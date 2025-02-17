package com.controllers;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.EmployeeRegisterDao;

@WebServlet("/registerEmp")
public class RegisterEmpServlet extends HttpServlet {
    
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // Get form data
        String first_name = req.getParameter("f_name");
        String last_name = req.getParameter("l_name");
        String email = req.getParameter("email");
        String contactStr = req.getParameter("contact");
        String password = req.getParameter("password");
        String confirmPassword = req.getParameter("confirmPassword");
        String address = req.getParameter("address");
        String position = "employee";
        
        // Validate empty fields
        if (first_name.isEmpty() || last_name.isEmpty() || email.isEmpty() || contactStr.isEmpty() || 
            password.isEmpty() || confirmPassword.isEmpty() || address.isEmpty()) {
            req.setAttribute("validation_message", "All fields are required.");
            req.getRequestDispatcher("register.jsp").forward(req, resp);
            return;
        }
        
        // Validate first name and last name should not contain numbers
        if (!isValidName(first_name) ) {
            req.setAttribute("validation_message", "First Name should not contain numbers.");
            req.getRequestDispatcher("register.jsp").forward(req, resp);
            return;
        }
        
        if(!isValidName(last_name)) {
        	 req.setAttribute("validation_message", "Last Name should not contain numbers.");
             req.getRequestDispatcher("register.jsp").forward(req, resp);
             return;
        }
        
        // Validate password match
        if (!password.equals(confirmPassword)) {
            req.setAttribute("validation_message", "Passwords do not match. Please try again.");
            req.getRequestDispatcher("register.jsp").forward(req, resp);
            return;
        }
        
        // Validate email format using regex
        if (!isValidEmail(email)) {
            req.setAttribute("validation_message", "Invalid email format.");
            req.getRequestDispatcher("register.jsp").forward(req, resp);
            return;
        }

        // Validate contact number format (must be 10 digits and not start with 0-6)
        if (!isValidContact(contactStr)) {
            req.setAttribute("validation_message", "Contact number must be exactly 10 digits and cannot start with 0-6.");
            req.getRequestDispatcher("register.jsp").forward(req, resp);
            return;
        }
        
        // Convert contact to long
        long contact = Long.parseLong(contactStr);
        
        // Check if email is already registered
        if (isEmailAlreadyRegistered(email)) {
            req.setAttribute("validation_message", "Email is already registered.");
            req.getRequestDispatcher("register.jsp").forward(req, resp);
            return;
        }
        
        // Register the user
        int result = EmployeeRegisterDao.employeeRegistered(first_name, last_name, email, password, address, contact, position);
        
        if (result == 1) {
            // Redirect to login page on success
            resp.sendRedirect("login.jsp");
        } else {
            // Handle failure (e.g., DB issues)
            req.setAttribute("validation_message", "Registration failed. Please try again.");
            req.getRequestDispatcher("register.jsp").forward(req, resp);
        }
    }
    
    // Email validation method (basic regex)
    private boolean isValidEmail(String email) {
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }
    
    // Contact validation method (10 digits and not starting with 0-6)
    private boolean isValidContact(String contactStr) {
        // Check if contact number is 10 digits and doesn't start with 0-6
        return contactStr.matches("[7-9][0-9]{9}");
    }
    
    // Validate that the name does not contain any digits
    private boolean isValidName(String name) {
        return !name.matches(".*\\d.*"); // Check if name contains any digit
    }
    
    // Method to check if the email is already registered (example)
    private boolean isEmailAlreadyRegistered(String email) {
        return EmployeeRegisterDao.isEmailExists(email);
    }
}

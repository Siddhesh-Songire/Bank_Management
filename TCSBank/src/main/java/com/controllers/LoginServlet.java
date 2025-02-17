package com.controllers;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.dao.ConnectionClass;
import com.dao.CustomerDao;

@WebServlet("/loginFormServlet")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // Retrieve form parameters
        int username = Integer.parseInt(req.getParameter("username"));
        String password = req.getParameter("password");
        String role = req.getParameter("role");

        // Set response content type
        boolean valid = CustomerDao.checkCredentials(username, password, role);
        if(valid ) {
        	 HttpSession session = req.getSession();
             session.setAttribute("user_id", username);
             session.setAttribute("role",role );
        	if(role.equals("employee")) {
        	resp.sendRedirect("Employee/employeehome.html");
        	}
        	else {
        		resp.sendRedirect("Customer/customerhome.html");
        		}
        }
        else {
    		resp.sendRedirect("login.jsp");

        }
        
        
    }
}

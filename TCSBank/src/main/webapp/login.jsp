<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="login.css" rel="stylesheet">
</head>
<body>
    
    <header>
        <section>
            <nav class="navbar navbar-expand-lg text-white ">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">Bank Of TCS</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        </ul>

                        <ul class="navbar-nav">

                            
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    </header>
<section>
    <div class="login">
<div class="card">
    <div class="card-body text-white">
        <h5 class="card-title text-center">Login</h5>
        <form id="loginForm" action="loginFormServlet" method="post">
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name = "username" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Login as:</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="role" id="roleEmployee" value="employee" checked>
                    <label class="form-check-label" for="roleEmployee">
                        Employee
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="role" id="roleCustomer" value="customer">
                    <label class="form-check-label" for="roleCustomer">
                        Customer
                    </label>
                </div>
            </div>
          <!--<button type="submit" class="btn btn-primary w-100">Login</button> -->  
            <input type="submit" class="btn btn-primary w-100" value = "Login"></input>
            <p class="text-center mt-5" id="registerOption">Don't have a account? 
            <button type="submit" onclick="window.location.href='register.jsp'" class="btn btn-primary w-100">Register</button></p>
        </form>
    </div>
</div>
</div>
</section>

<section>
    <footer class="text-white text-center text-lg-start" id="footer">
        <div class="container p-4">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Bank Of TCS</h5>
                    <p>
                        We are committed to providing the best banking solutions and financial services tailored to your needs.
                    </p>
                </div>
    
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                    
                </div>
    
                <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Contact Us</h5>
                    <p>Email: support@bankoftcs.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Pokhran Rd, Thane, Mumbai</p>
                </div>
            </div>
        </div>
    
        <div class="text-center p-3">
            © 2025 Bank Of TCS. All Rights Reserved.
        </div>
    </footer>
    
</section>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const roleRadios = document.getElementsByName('role');
        const registerOption = document.getElementById('registerOption');

        for (let radio of roleRadios) {
            radio.addEventListener('change', () => {
                if (radio.value === 'customer') {
                    registerOption.style.display = 'none';
                } else {
                    registerOption.style.display = 'block';
                }
            });
        }
    });
</script>
</body>
</html>

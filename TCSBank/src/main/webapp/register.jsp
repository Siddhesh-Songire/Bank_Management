<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="register.css" rel="stylesheet">
</head>
<body>
    <header>
        <section>
            <nav class="navbar navbar-expand-lg text-white">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">Bank Of TCS</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    </header>

    <section>
        <div class="register">
            <div class="card">
            
                <div class="card-body text-white">
                
                    <h5 class="card-title text-center">Register</h5>
                    <% if (request.getAttribute("validation_message") != null) { %>
                        <div id="errorDiv" class="alert alert-danger text-center" style=" top: 10px; left: 50%; transform: translateX(-50%); width: 80%; z-index: 1000;">
                            <%= request.getAttribute("validation_message") %>
                        </div>
                    <% } %>
                    <form id="registerForm" method="post" action ="registerEmp">
                        <div class="row">
                            <div class="mb-3 col-6">
                                <label for="firstName" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="firstName" maxlength="50" name ="f_name" required>
                            </div>
                            <div class="mb-3 col-6">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lastName" maxlength="50" name ="l_name"required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3 col-6">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="mb-3 col-6">
                                <label for="contactNumber" class="form-label">Contact Number</label>
                                <input type="text" class="form-control" id="contactNumber" maxlength="10" name="contact" pattern="\d{10}" required>
                            </div>
                        </div>
                        <div class="row">
                        <div class="mb-3 col-6">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" maxlength="30" name="password" required>
                            </div>
                            <div class="mb-3 col-6">
                                <label for="confirmPassword" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="confirmPassword" name = "confirmPassword" maxlength="30" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <textarea class="form-control" id="address" maxlength="100" rows="2" name="address" required></textarea>
                            </div>
                        </div>
                        <input type="submit" class="btn btn-primary w-100" value="Register"></input>
                    </form>
                </div>
            </div>
        </div>
    </section>
	 
    <footer class="text-white text-center text-lg-start" id="footer">
        <div class="container p-4">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Bank Of TCS</h5>
                    <p>We are committed to providing the best banking solutions and financial services tailored to your needs.</p>
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
            � 2025 Bank Of TCS. All Rights Reserved.
        </div>
    </footer>
<script type="text/javascript">
<% if (request.getAttribute("validation_message") != null) { %>
setTimeout(function() {
    document.getElementById('errorDiv').style.display = 'none';
}, 3000); // 3 seconds
<% } %>

</script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        /*document.addEventListener('DOMContentLoaded', () => {
            const registerForm = document.getElementById('registerForm');

            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;

                if (password !== confirmPassword) {
                	e.preventDefault(); //added
                    alert('Passwords do not match. Please try again.');
                    return;
                }
                

                alert('Registration successful!');
                // Additional code for storing or sending form data goes here
            });
        });*/
    </script>
</body>
</html>

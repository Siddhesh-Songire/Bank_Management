function loadpage(url) {
    window.location.href = url;
}

// Function to set the active class on the clicked sidebar item
function setActiveSidebarLink(event) {
    // Remove 'active' class from all sidebar items
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the clicked sidebar item
    event.target.classList.add('active');
}

window.onload = function() {
    // Retrieve the customer data from localStorage
    const customer = JSON.parse(localStorage.getItem('selectedCustomer'));
    
    if (customer) {
        // Populate form fields with the customer data
        document.getElementById('ssn').value = customer.ssn;
        document.getElementById('name').value = customer.name;
        document.getElementById('accountNumber').value = customer.accountNumber;
        document.getElementById('ifscCode').value = customer.ifscCode;
        document.getElementById('accountBalance').value = customer.accountBalance;
        document.getElementById('adhaarCard').value = customer.adhaarCard;
        document.getElementById('panCard').value = customer.panCard;
        document.getElementById('dob').value = customer.dob;
        document.getElementById('gender').value = customer.gender;
        document.getElementById('maritalStatus').value = customer.maritalStatus;
        document.getElementById('email').value = customer.email;
        document.getElementById('address').value = customer.address;
        document.getElementById('contactNumber').value = customer.contactNumber;
    } else {
        console.error("No customer data found in localStorage.");
    }
};


function saveCustomer() {

    // Validate Adhaar Card (12 digits)
    const adhaarCardRegex = /^\d{12}$/;
    if (!adhaarCardRegex.test(adhaarCard)) {
        alert("Adhaar Card must be exactly 12 digits.");
        return;
    }

    // Validate Contact Number (10 digits)
    const contactNumberRegex = /^\d{10}$/;
    if (!contactNumberRegex.test(contactNumber)) {
        alert("Contact Number must be exactly 10 digits.");
        return;
    }

    // Validate Pan Card (10 characters)
    const panCardRegex = /^[A-Z]{5}\d{4}[A-Z]{1}$/;
    if (panCard.length !== 10 || !panCardRegex.test(panCard)) {
        alert("Pan Card must be exactly 10 characters (Format: XXXXX1234X).");
        return;
    }

    // Validate Email (simple regex for email validation)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Get the edited values from the form
    const customer = {
        ssn: document.getElementById('ssn').value,
        name: document.getElementById('name').value,
        accountNumber: document.getElementById('accountNumber').value,
        ifscCode: document.getElementById('ifscCode').value,
        accountBalance: document.getElementById('accountBalance').value,
        adhaarCard: document.getElementById('adhaarCard').value,
        panCard: document.getElementById('panCard').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        maritalStatus: document.getElementById('maritalStatus').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        contactNumber: document.getElementById('contactNumber').value
    };

    // Save the edited customer data to localStorage
    localStorage.setItem('selectedCustomer', JSON.stringify(customer));

    // Redirect back to the customer details page
    window.location.href = 'customerdetails.html';

    // Optional: Show an alert (This can also be done on customer details page)
    alert("Customer edited successfully!");
}

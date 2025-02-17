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


// Retrieve the customer data from local storage
const customer = JSON.parse(localStorage.getItem('selectedCustomer'));

// Populate the fields with the customer data
document.getElementById('customer-ssn').textContent = customer.ssn;
document.getElementById('customer-name').textContent = customer.name;
document.getElementById('account-number').textContent = customer.accountNumber;
document.getElementById('ifsc-code').textContent = customer.ifscCode;
document.getElementById('account-balance').textContent = customer.accountBalance;
document.getElementById('adhaar-card').textContent = customer.adhaarCard;
document.getElementById('pan-card').textContent = customer.panCard;
document.getElementById('dob').textContent = customer.dob;
document.getElementById('gender').textContent = customer.gender;
document.getElementById('marital-status').textContent = customer.maritalStatus;
document.getElementById('email').textContent = customer.email;
document.getElementById('address').textContent = customer.address;
document.getElementById('contact-number').textContent = customer.contactNumber;

// Edit button functionality
function editCustomer() {
    // Implement your edit logic (could redirect to an edit form or make fields editable)
    window.location.href = 'customerform.html';

}

// Delete button functionality
function deleteCustomer() {
    // Implement your delete logic (e.g., removing from the array and localStorage)
    const customerData = JSON.parse(localStorage.getItem('customers'));
    const updatedData = customerData.filter(c => c.customerSSN !== customer.customerSSN);
    localStorage.setItem('customers', JSON.stringify(updatedData));
    
    // Optionally, redirect to another page after deletion
    alert('Customer deleted successfully');
    window.location.href = 'customer.html';  // Redirect to customer list page
}

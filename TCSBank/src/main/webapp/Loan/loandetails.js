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


// Function to load the selected loan data from localStorage
function loadLoanDetails() {
    const selectedLoan = JSON.parse(localStorage.getItem('selectedLoan'));
    
    if (selectedLoan) {
        document.getElementById('ssnId').textContent = selectedLoan.ssnId;
        document.getElementById('customerName').textContent = selectedLoan.customerName;
        document.getElementById('occupation').textContent = selectedLoan.occupation;
        document.getElementById('employerName').textContent = selectedLoan.employerName;
        document.getElementById('loanAmount').textContent = selectedLoan.loanAmount;
        document.getElementById('loanDuration').textContent = selectedLoan.loanDuration;
        document.getElementById('contactNumber').textContent = selectedLoan.contactNumber;
    } else {
        alert("Loan not found.");
        window.location.href = 'loan.html'; // Redirect back to loan list if no loan found
    }
}

// Function to handle the edit action
function editLoan() {
    const selectedLoan = JSON.parse(localStorage.getItem('selectedLoan'));
    if (selectedLoan) {
        // Redirect to loanform.html with the loan data as query parameter
        window.location.href = `loanform.html?editLoanId=${selectedLoan.loanId}`;
    }
}

// Function to handle the delete action
function deleteLoan() {
    const selectedLoan = JSON.parse(localStorage.getItem('selectedLoan'));
    if (selectedLoan) {
        let loanData = JSON.parse(localStorage.getItem('loanData')) || [];
        loanData = loanData.filter(loan => loan.loanId !== selectedLoan.loanId);
        localStorage.setItem('loanData', JSON.stringify(loanData));
        alert('Loan deleted successfully');
        window.location.href = 'loan.html'; // Redirect to loan list page after deletion
    }
}

// Load loan details when the page loads
window.onload = loadLoanDetails;

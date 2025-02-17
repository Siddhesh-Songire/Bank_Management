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


// Function to load loan data from localStorage and display it in the table
function loadLoanData() {
    const loanTableBody = document.getElementById('loanTableBody');
    loanTableBody.innerHTML = ""; // Clear existing table rows

    const storedLoanData = JSON.parse(localStorage.getItem('loanData')) || [];
    
    storedLoanData.forEach(loan => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${loan.ssnId}</td>
            <td>${loan.customerName}</td>
            <td>${loan.occupation}</td>
            <td>${loan.loanAmount}</td>
            <td>${loan.loanDuration}</td>
        `;
        // Add a click event to the row for viewing loan details
        row.onclick = () => {
            localStorage.setItem('selectedLoan', JSON.stringify(loan)); // Store selected loan
            window.location.href = `loandetails.html`; // Redirect to loan details page
        };
        loanTableBody.appendChild(row);
    });
}

// Load loan data when the page loads
window.onload = loadLoanData;

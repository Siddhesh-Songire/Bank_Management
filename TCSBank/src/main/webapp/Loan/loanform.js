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


// Function to load loan data for editing if editLoanId is in the URL
function loadLoanDataForEdit() {
    const urlParams = new URLSearchParams(window.location.search);
    const loanId = urlParams.get('editLoanId');
    
    if (loanId) {
        const loanData = JSON.parse(localStorage.getItem('loanData')) || [];
        const loan = loanData.find(loan => loan.loanId === loanId);
        
        if (loan) {
            document.getElementById('ssnId').value = loan.ssnId;
            document.getElementById('customerName').value = loan.customerName;
            document.getElementById('occupation').value = loan.occupation;
            document.getElementById('employerName').value = loan.employerName;
            document.getElementById('loanAmount').value = loan.loanAmount;
            document.getElementById('loanDuration').value = loan.loanDuration;
            document.getElementById('contactNumber').value = loan.contactNumber;
        }
    }
}

// Function to handle form submission (save/edit loan data)
document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loanData = JSON.parse(localStorage.getItem('loanData')) || [];
    const ssnId = document.getElementById('ssnId').value;
    const customerName = document.getElementById('customerName').value;
    const occupation = document.getElementById('occupation').value;
    const employerName = document.getElementById('employerName').value;
    const loanAmount = document.getElementById('loanAmount').value;
    const loanDuration = document.getElementById('loanDuration').value;
    const contactNumber = document.getElementById('contactNumber').value;

    const urlParams = new URLSearchParams(window.location.search);
    const loanId = urlParams.get('editLoanId');

    if (loanId) {
        const loanIndex = loanData.findIndex(loan => loan.loanId === loanId);
        if (loanIndex !== -1) {
            loanData[loanIndex] = {
                loanId,
                ssnId,
                customerName,
                occupation,
                employerName,
                loanAmount,
                loanDuration,
                contactNumber
            };
        }
    } else {
        const newLoan = {
            loanId: Date.now().toString(),
            ssnId,
            customerName,
            occupation,
            employerName,
            loanAmount,
            loanDuration,
            contactNumber
        };
        loanData.push(newLoan);
    }

    localStorage.setItem('loanData', JSON.stringify(loanData));
    alert('Loan details saved successfully');
    window.location.href = `loandetails.html?loanId=${loanId || newLoan.loanId}`;
});

// Load loan data if editing an existing loan
window.onload = loadLoanDataForEdit;

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


// Function to handle form submission (save/edit transaction data)
document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const transactionData = JSON.parse(localStorage.getItem('transactionData')) || [];
    const transactionId = document.getElementById('transactionId').value;
    const ssnId = document.getElementById('ssnId').value;
    const customerName = document.getElementById('customerName').value;
    const accountId = document.getElementById('accountId').value;
    const adhaarCardNo = document.getElementById('adhaarCardNo').value;
    const panCardNo = document.getElementById('panCardNo').value;
    const address = document.getElementById('address').value;
    const transactionDate = document.getElementById('transactionDate').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const modeOfTransaction = document.getElementById('modeOfTransaction').value;
    const amount = document.getElementById('amount').value;
    const transactionType = document.getElementById('transactionType').value;

    // Create a new transaction object
    const newTransaction = {
        transactionId,
        ssnId,
        customerName,
        accountId,
        adhaarCardNo,
        panCardNo,
        address,
        transactionDate,
        contactNumber,
        modeOfTransaction,
        amount,
        transactionType
    };

    // Add the new transaction to localStorage
    transactionData.push(newTransaction);
    localStorage.setItem('transactionData', JSON.stringify(transactionData));

    alert('Transaction details saved successfully');
    window.location.href = '../Home/home.html'; // Redirect to transaction list page after saving
});

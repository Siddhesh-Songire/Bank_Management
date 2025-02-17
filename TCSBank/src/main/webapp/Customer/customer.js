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


// Sample JSON data for 10 customers
const customerData = [
    {
        ssn: "123-45-6789",
        name: "John Doe",
        accountNumber: "1234567890123456",
        ifscCode: "IFSC123456",
        accountBalance: "$5000",
        adhaarCard: "1234 5678 9101",
        panCard: "ABCD1234E",
        dob: "1985-01-01",
        gender: "Male",
        maritalStatus: "Single",
        email: "johndoe@example.com",
        address: "123 Main St, City",
        contactNumber: "9876543210"
    },
    {
        ssn: "987-65-4321",
        name: "Jane Smith",
        accountNumber: "6543210987654321",
        ifscCode: "IFSC654321",
        accountBalance: "$10000",
        adhaarCard: "9876 5432 1098",
        panCard: "XYZD1234E",
        dob: "1990-02-15",
        gender: "Female",
        maritalStatus: "Married",
        email: "janesmith@example.com",
        address: "456 Oak St, City",
        contactNumber: "8765432109"
    },
    {
        ssn: "135-79-2468",
        name: "Alice Johnson",
        accountNumber: "1122334455667788",
        ifscCode: "IFSC112233",
        accountBalance: "$3000",
        adhaarCard: "1122 3344 5566",
        panCard: "XYZP5678Q",
        dob: "1988-03-25",
        gender: "Female",
        maritalStatus: "Single",
        email: "alicejohnson@example.com",
        address: "789 Pine St, City",
        contactNumber: "7654321098"
    },
    {
        ssn: "246-80-1357",
        name: "Bob Brown",
        accountNumber: "2233445566778899",
        ifscCode: "IFSC223344",
        accountBalance: "$2000",
        adhaarCard: "2233 4455 6677",
        panCard: "ABCX8901Z",
        dob: "1992-05-10",
        gender: "Male",
        maritalStatus: "Married",
        email: "bobbrown@example.com",
        address: "321 Maple St, City",
        contactNumber: "6543210987"
    },
    {
        ssn: "456-12-7890",
        name: "Charlie Davis",
        accountNumber: "3344556677889900",
        ifscCode: "IFSC334455",
        accountBalance: "$7500",
        adhaarCard: "3344 5566 7788",
        panCard: "LMNO1234P",
        dob: "1994-06-20",
        gender: "Male",
        maritalStatus: "Single",
        email: "charliedavis@example.com",
        address: "567 Birch St, City",
        contactNumber: "5432109876"
    },
    {
        ssn: "567-34-8901",
        name: "Debbie White",
        accountNumber: "4455667788990011",
        ifscCode: "IFSC445566",
        accountBalance: "$12000",
        adhaarCard: "4455 6677 8899",
        panCard: "PQRS1234T",
        dob: "1996-07-30",
        gender: "Female",
        maritalStatus: "Married",
        email: "debbiewhite@example.com",
        address: "678 Cedar St, City",
        contactNumber: "4321098765"
    },
    {
        ssn: "678-90-1234",
        name: "Eve Black",
        accountNumber: "5566778899001122",
        ifscCode: "IFSC556677",
        accountBalance: "$18000",
        adhaarCard: "5566 7788 9900",
        panCard: "STUV1234W",
        dob: "1998-08-14",
        gender: "Female",
        maritalStatus: "Single",
        email: "eveblack@example.com",
        address: "789 Elm St, City",
        contactNumber: "3210987654"
    },
    {
        ssn: "789-01-2345",
        name: "Frank Green",
        accountNumber: "6677889900112233",
        ifscCode: "IFSC667788",
        accountBalance: "$9000",
        adhaarCard: "6677 8899 0011",
        panCard: "WXYZ1234A",
        dob: "2000-09-10",
        gender: "Male",
        maritalStatus: "Married",
        email: "frankgreen@example.com",
        address: "890 Spruce St, City",
        contactNumber: "2109876543"
    },
    {
        ssn: "890-12-3456",
        name: "Grace Blue",
        accountNumber: "7788990011223344",
        ifscCode: "IFSC778899",
        accountBalance: "$2000",
        adhaarCard: "7788 9900 1122",
        panCard: "UVWX5678Y",
        dob: "2001-10-22",
        gender: "Female",
        maritalStatus: "Single",
        email: "graceblue@example.com",
        address: "901 Willow St, City",
        contactNumber: "1098765432"
    },
    {
        ssn: "901-23-4567",
        name: "Henry Red",
        accountNumber: "8899001122334455",
        ifscCode: "IFSC889900",
        accountBalance: "$6000",
        adhaarCard: "8899 0011 2233",
        panCard: "QRST2345B",
        dob: "2003-11-30",
        gender: "Male",
        maritalStatus: "Single",
        email: "henryred@example.com",
        address: "1234 Ash St, City",
        contactNumber: "9988776655"
    }
];

localStorage.setItem("customers", JSON.stringify(customerData));

function loadCustomerData() {
    const tableBody = document.getElementById('customerTableBody');
    tableBody.innerHTML = ""; 

    const storedCustomerData = JSON.parse(localStorage.getItem("customers"));
    
    if (storedCustomerData) {
        storedCustomerData.forEach(customer => {
            const row = document.createElement('tr');

            row.onclick = function () {
                localStorage.setItem('selectedCustomer', JSON.stringify(customer));
                
                window.location.href = 'customerdetails.html';  
            };
            row.innerHTML = `
                <td>${customer.ssn}</td>
                <td>${customer.name}</td>
                <td>${customer.accountNumber}</td>
                <td>${customer.ifscCode}</td>
                <td>${customer.accountBalance}</td>
                <td>${customer.adhaarCard}</td>
                <td>${customer.panCard}</td>
                <td>${customer.dob}</td>
                <td>${customer.gender}</td>
                <td>${customer.maritalStatus}</td>
                <td>${customer.email}</td>
                <td>${customer.address}</td>
                <td>${customer.contactNumber}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        console.error("No customer data found in localStorage.");
    }
}

// Load customer data when the page loads
window.onload = loadCustomerData;

// Assuming you have a function that handles row click and loads the customer details
function viewCustomerDetails(customerId) {
    // Retrieve customer data from local storage or the JSON array
    const customerData = JSON.parse(localStorage.getItem('customers'));

    // Find the customer by ID (you can adjust this as per your actual data structure)
    const customer = customerData.find(c => c.customerSSN === customerId);
    
    // Store the customer data in local storage for the detail page
    localStorage.setItem('selectedCustomer', JSON.stringify(customer));

    // Redirect to the customer details page
    window.location.href = 'customer-details.html';
}


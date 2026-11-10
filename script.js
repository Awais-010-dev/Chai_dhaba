// Existing order function
function order() {
    window.alert("Order Confirm");
}

// New function for menu items
function addToOrder() {
    window.alert("Item added to your order!");
}


// Function for contact form submission
function handleContactSubmit(event) {
    event.preventDefault(); // Prevents page refresh
    window.alert("Thank you for reaching out to Quetta Cafe!");
    document.getElementById("contactForm").reset(); // Clears form fields
}
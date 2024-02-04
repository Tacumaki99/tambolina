
    document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.signup-form');

    form.addEventListener('submit', function (event) {
    // Validate the form
    if (!validateForm()) {
    event.preventDefault(); // Prevent the form from submitting
}
});

    function validateForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const agreeTerms = document.getElementById('agree-terms').checked;

    // Basic validation
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('All fields are required');
    return false;
}

    // Additional validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
}

    // Check if the terms are agreed
    if (!agreeTerms) {
    alert('Please agree to the Terms & Conditions');
    return false;
}

    // If all validation passes
    return true;
}
});

// js/login.js

function validateForm(event) {
    event.preventDefault();
    
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginError = document.getElementById('loginError');
    
    // Reset all error states
    emailError.classList.add('d-none');
    passwordError.classList.add('d-none');
    loginError.classList.add('d-none');
    
    let hasErrors = false;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.classList.remove('d-none');
        hasErrors = true;
    }
    
    // Validate password
    if (password.value.length < 6) {
        passwordError.classList.remove('d-none');
        hasErrors = true;
    }
    
    // If no validation errors, show the login error
    if (!hasErrors) {
        loginError.classList.remove('d-none');
    }
    
    return false;
}
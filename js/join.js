function validateJoinForm(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const experience = document.getElementById('experience');
    
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const experienceError = document.getElementById('experienceError');
    const successMessage = document.getElementById('successMessage');
    
    [firstNameError, lastNameError, emailError, experienceError, successMessage].forEach(element => element.classList.add('d-none'));
    
    let hasErrors = false;

    if (!firstName.value.trim()) {
        firstNameError.classList.remove('d-none');
        hasErrors = true;
    }

    if (!lastName.value.trim()) {
        lastNameError.classList.remove('d-none');
        hasErrors = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.classList.remove('d-none');
        hasErrors = true;
    }

    if (!experience.value) {
        experienceError.classList.remove('d-none');
        hasErrors = true;
    }

    if (!hasErrors) {
        successMessage.classList.remove('d-none');
        event.target.reset();
    }
    
    return false;
}
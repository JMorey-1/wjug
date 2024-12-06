// Password strength functionality
document.addEventListener('DOMContentLoaded', () => {
    // Get our password input and create containers for strength feedback
    const passwordInput = document.getElementById('password');
    
    // Create and insert HTML elements for strength meter
    const strengthContainer = document.createElement('div');
    strengthContainer.innerHTML = `
        <div class="progress mb-2" style="height: 5px;">
            <div id="passwordStrength" class="progress-bar" role="progressbar"></div>
        </div>
        <small id="passwordFeedback" class="d-block mb-3"></small>
    `;
    
    // Insert strength meter after password input
    passwordInput.parentNode.insertBefore(strengthContainer, passwordInput.nextSibling);

    // Function to check password strength
    function checkPasswordStrength(password) {
        let strength = 0;
        let feedback = [];
        
        // Initialize our checks
        const hasLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);
        
        // Add to strength score based on checks
        if (hasLength) strength += 20;
        if (hasUpperCase) strength += 20;
        if (hasLowerCase) strength += 20;
        if (hasNumbers) strength += 20;
        if (hasSpecialChar) strength += 20;
        
        // Build feedback message
        if (!hasLength) feedback.push("8+ characters");
        if (!hasUpperCase) feedback.push("uppercase letter");
        if (!hasLowerCase) feedback.push("lowercase letter");
        if (!hasNumbers) feedback.push("number");
        if (!hasSpecialChar) feedback.push("special character");

        // Update visual elements
        const progressBar = document.getElementById('passwordStrength');
        const feedbackElement = document.getElementById('passwordFeedback');
        
        // Update progress bar
        progressBar.style.width = strength + '%';
        progressBar.className = 'progress-bar';
        
        // Set color and message based on strength
        if (strength < 40) {
            progressBar.classList.add('bg-danger');
            feedbackElement.textContent = `Weak password - needs ${feedback.join(", ")}`;
        } else if (strength < 80) {
            progressBar.classList.add('bg-warning');
            feedbackElement.textContent = feedback.length ? 
                `Moderate password - consider adding ${feedback.join(", ")}` : 
                'Moderate password';
        } else {
            progressBar.classList.add('bg-success');
            feedbackElement.textContent = 'Strong password';
        }
    }

    // Add event listener to password input
    if (passwordInput) {
        passwordInput.addEventListener('input', (e) => {
            checkPasswordStrength(e.target.value);
        });
    }
});
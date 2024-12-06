document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const joinForm = document.getElementById('joinForm');

    // Validation rules
    const rules = {
        email: {
            validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: 'Please enter a valid email address'
        },
        password: {
            validate: value => value.length >= 6,
            message: 'Password must be at least 6 characters'
        },
        firstName: {
            validate: value => value.trim().length > 0,
            message: 'Please enter your first name'
        },
        lastName: {
            validate: value => value.trim().length > 0,
            message: 'Please enter your last name'
        },
        experience: {
            validate: value => value !== '',
            message: 'Please select your experience level'
        }
    };

    function validateField(input) {
        const rule = rules[input.id];
        const errorElement = document.getElementById(`${input.id}Error`);
        const isValid = rule.validate(input.value);
        
        errorElement.classList.toggle('d-none', isValid);
        return isValid;
    }

    function attachValidation(form) {
        const inputs = form.querySelectorAll('input, select');
        
        inputs.forEach(input => {
            if (rules[input.id]) {
                input.addEventListener('input', () => validateField(input));
                input.addEventListener('blur', () => validateField(input));
            }
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            inputs.forEach(input => {
                if (rules[input.id] && !validateField(input)) {
                    isValid = false;
                }
            });

            if (isValid && form.id === 'joinForm') {
                document.getElementById('successMessage').classList.remove('d-none');
                form.reset();
            } else if (isValid && form.id === 'loginForm') {
                document.getElementById('loginError').classList.remove('d-none');
            }
        });
    }

    if (loginForm) attachValidation(loginForm);
    if (joinForm) attachValidation(joinForm);
});
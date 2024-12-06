document.getElementById('themeToggle').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const themeIcon = document.getElementById('themeIcon');
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('bi-moon', 'bi-sun'); // Switch to sun icon
    } else {
        themeIcon.classList.replace('bi-sun', 'bi-moon'); // Switch to moon icon
    }
});
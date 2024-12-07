document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";

    // Apply the saved theme by adding or removing the dark-mode class
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    // Update the toggle icon (optional)
    updateToggleIcon(savedTheme);
});

document.getElementById("themeToggle").addEventListener("click", function () {
    const isDarkMode = document.body.classList.contains("dark-mode");

    // Toggle the dark-mode class
    if (isDarkMode) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    }

    // Update the toggle icon (optional)
    updateToggleIcon(isDarkMode ? "light" : "dark");
});

// Optional: Update the theme toggle button or icon
function updateToggleIcon(theme) {
    const themeIcon = document.getElementById("themeIcon");
    if (theme === "dark") {
        themeIcon.classList.replace("bi-moon", "bi-sun");
    } else {
        themeIcon.classList.replace("bi-sun", "bi-moon");
    }
}
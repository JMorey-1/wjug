document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Update the toggle icon (optional)
    updateToggleIcon(savedTheme);
});

document.getElementById("themeToggle").addEventListener("click", function () {
    const isDarkMode = document.body.classList.contains("dark-mode");
    const newTheme = isDarkMode ? "light" : "dark";

    // Apply the new theme
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Update the toggle icon (optional)
    updateToggleIcon(newTheme);
});

function applyTheme(theme) {
    const darkThemeLink = document.getElementById("darkThemeLink");

    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        if (!darkThemeLink) {
            // Create and append the dark theme link
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "css/styles-dark.css";
            link.id = "darkThemeLink";
            document.head.appendChild(link);
        }
    } else {
        document.body.classList.remove("dark-mode");
        if (darkThemeLink) {
            // Remove the dark theme link
            darkThemeLink.remove();
        }
    }
}

// Optional: Update the theme toggle button or icon
function updateToggleIcon(theme) {
    const themeIcon = document.getElementById("themeIcon");
    if (theme === "dark") {
        themeIcon.classList.replace("bi-moon", "bi-sun");
    } else {
        themeIcon.classList.replace("bi-sun", "bi-moon");
    }
}
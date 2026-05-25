document.addEventListener("DOMContentLoaded", () => {
    const themeStorageKey = "tomoden-theme";
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function applyTheme(theme) {
        document.body.classList.toggle("dark-theme", theme === "dark");
        document.body.classList.toggle("light-theme", theme === "light");
    }

    function preferredTheme() {
        return localStorage.getItem(themeStorageKey) || (mediaQuery.matches ? "dark" : "light");
    }

    function ensureThemeToggle() {
        let toggle = document.getElementById("theme-toggle");
        if (toggle) {
            return toggle;
        }

        toggle = document.createElement("button");
        toggle.type = "button";
        toggle.id = "theme-toggle";
        toggle.className = "theme-toggle page-theme-toggle";
        toggle.setAttribute("aria-label", "テーマ切り替え");
        toggle.innerHTML = '<span class="theme-sun" aria-hidden="true">☀</span><span class="theme-moon" aria-hidden="true">☾</span>';
        document.body.append(toggle);
        return toggle;
    }

    applyTheme(preferredTheme());

    mediaQuery.addEventListener("change", (event) => {
        if (!localStorage.getItem(themeStorageKey)) {
            applyTheme(event.matches ? "dark" : "light");
        }
    });

    ensureThemeToggle().addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
        localStorage.setItem(themeStorageKey, nextTheme);
        applyTheme(nextTheme);
    });

    const clockEl = document.getElementById("clock");
    if (clockEl) {
        function updateClock() {
            const now = new Date();
            const pad = (value) => String(value).padStart(2, "0");
            clockEl.textContent = `${now.getFullYear()}/${pad(now.getMonth() + 1)}/${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
        }

        updateClock();
        setInterval(updateClock, 1000);
    }
});

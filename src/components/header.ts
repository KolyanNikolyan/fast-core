export default function Header() {
    const header = document.createElement("header");
    header.setAttribute("data-aos", "fade-down");

    header.innerHTML = `
        <div class="logo">💻 FastCore</div>
        <nav>
        
            <ul>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#products">Товары</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </nav>
    `;
    // 🔘 Добавляем кнопку темы
    const themeToggle = document.createElement("button");
    themeToggle.className = "theme-toggle";
    themeToggle.innerText = "🌙 / ☀️";

    themeToggle.onclick = () => {
        document.body.classList.toggle("light-theme");
        localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
    };

    // Добавим кнопку в header (например, в конец)
    header.appendChild(themeToggle);
    return header;
}

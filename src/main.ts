import "./styles/header.scss";
import "./styles/hero.scss";
import "./styles/products.scss";
import "./styles/services.scss";
import "./styles/footer.scss";
import "./styles/main.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/header.ts";
import Hero from "./components/hero.ts";
import Products from "./components/products.ts";
import Services from "./components/services.ts";
import Footer from "./components/footer.ts";

// Добавляем секции на страницу
document.body.append(
    Header(),
    Hero(),
    Products(),
    Services(),
    Footer()
);

// Инициализация анимаций при скролле
AOS.init({
    duration: 800,
    once: true,
});

// Применение сохранённой темы при загрузке
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    const themeToggleBtn = document.getElementById("theme-toggle");
    themeToggleBtn?.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const isLight = document.body.classList.contains("light-theme");
        localStorage.setItem("theme", isLight ? "light" : "dark");
    });

    // Scroll анимация для блока "ПОЧЕМУ МЫ?"
    const whySection = document.querySelector(".why-container") as HTMLElement | null;

    function showWhySection() {
        if (!whySection) return;
        const sectionPos = whySection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            whySection.classList.add("show-why");
        }
    }

    window.addEventListener("scroll", showWhySection);
    showWhySection(); // Вдруг уже видно
});

// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || "");

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth",
            });
        }
    });
});

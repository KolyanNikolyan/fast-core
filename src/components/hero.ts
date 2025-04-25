export default function Hero() {
    const hero = document.createElement("section");
    hero.className = "hero";
    hero.setAttribute("data-aos", "fade-up");
    hero.setAttribute("id", "hero-section");
    hero.id = "hero-section"; // Это обязательно!

    hero.innerHTML = `
        <div class="hero-content">
            <h1>Компьютер с нами — это просто.</h1>
            <p>Мы подберем сборку в любой бюджет с любыми комплектующими.</p>
        </div>
        <div class="why-us">
            <div class="why-content">
                <h2>ПОЧЕМУ МЫ?</h2>
                <ul class="why-list">
                    <li>🔧 Мы подберем сборку в любой бюджет с любыми комплектующими.</li>
                    <li>💬 Наша поддержка со специалистами работает 24/7.</li>
                    <li>🛡️ Даем гарантию на все наши услуги.</li>
                    <li>💰 Возместим ущерб, если что-то сломали.</li>
                    <li>💜 Любим свою работу.</li>
                </ul>
            </div>
        </div>
    `;

    return hero;
}



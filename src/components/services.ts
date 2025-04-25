export default function Services() {
    const section = document.createElement("section");
    section.id = "services";
    section.setAttribute("data-aos", "fade-up");

    section.innerHTML =  `
        <section id="services" class="services">
            <h2>Услуги</h2>
            <div class="service-list">
                <div class="service-card">
                    <h3>Обслуживание ПК</h3>
                    <p>Замена термопасты, чистка от пыли</p>
                </div>
                <div class="service-card">
                    <h3>Сборка ПК</h3>
                    <p>Качественная сборка и подбор деталей</p>
                </div>
            </div>
        </section>
    `;
    return section;

}

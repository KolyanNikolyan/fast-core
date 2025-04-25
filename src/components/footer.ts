export default function Footer() {
    const footer = document.createElement("footer");
    footer.id = "contact";
    footer.setAttribute("data-aos", "fade-up");
    footer.innerHTML = `
        <footer id="contact">
    <p>Наши контакты: +7 ХХХ-ХХХ-ХХХ</p>
    <p>Мы в соцсетях: 📞 💬 📧</p>
</footer>

</body>
</html>

    `;
    return footer;
}
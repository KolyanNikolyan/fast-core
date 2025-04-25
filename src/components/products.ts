export default function Products() {
    const section = document.createElement("section");
    section.id = "products";
    section.setAttribute("data-aos", "zoom-in");

    section.innerHTML =`
        <section id="products" class="products">
            <h2>В наличии:</h2>
            <div class="product-list">
                <div class="product-card">
                    <img src="pc1.jpg" alt="ПК 1">
                    <h3>Intel Core i7 3770</h3>
                    <p>Nvidia GeForce GTX 1060</p>
                    <button>Купить за 25.599</button>
                </div>
                <div class="product-card">
                    <img src="pc2.jpg" alt="ПК 2">
                    <h3>Intel Core i7 12700</h3>
                    <p>Nvidia GeForce RTX 4070</p>
                    <button>Купить за 150.000</button>
                </div>
            </div>
        </section>
    `;
    return section;
}


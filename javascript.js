document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartButton = document.getElementById('cartButton');
    const cartElement = document.getElementById('cart');
    const cartItemsElement = document.getElementById('cartItems');
    const checkoutButton = document.getElementById('checkoutButton');
    const clearCartButton = document.getElementById('clearCartButton');

    const products = [
        { id: 1, name: 'ASUS Vivobook - Laptop WUXGA de 16 pulgadas, Intel Core i5-1235U', price: '1686.00', img: 'asus1.jpg' },
        { id: 2, name: 'HP 2023 Laptop 14-procesador AMD Ryzen 3 de hasta 3.5 GHz', price: '1420.00', img: 'hp1.jpg' },
        { id: 3, name: 'Laptop Asus Intel Core i3 de 8 núcleos 8GB 256GB SSD Vivobook Go 15 12° Gen 15.6" FHD', price: '1399.00', img: 'asus2.png' },
        { id: 4, name: 'Acer Nitro 5 AN515-58-57Y8 - Laptop para juegos | Intel Core i5-12500H | GPU NVIDIA GeForce RTX 3050 Ti ', price: '2818.40', img: 'acer1.jpg' },
        { id: 5, name: 'Laptop Hp Intel Core I3 8GB 256GB SSD 12va Gen 14" 14-dq5009la', price: '1349.00', img: 'hp2.png' },
        { id: 6, name: 'Acer Predator Helios Neo 16 Laptop para juegos | Intel Core i7-13650HX | NVIDIA GeForce RTX 4060', price: '4259.00', img: 'acer2.jpg' },
        { id: 7, name: 'Dell Inspiron 3520 Core I7 12va Ram 32gb 1tb Ssd 15.6 +funda', price: '3859.00', img: 'dell1.png' },
        { id: 8, name: 'MSI Portátil para juegos Cyborg 15: Intel Core i5-12450H GeForce RTX 2050', price: '2525.00', img: 'msi1.jpg' },
        { id: 9, name: 'Gamer MSI Intel Core i7 RTX4050 16GB 512GB SSD Thin 15 B12ve 12° Gen 15.6', price: '5499.00', img: 'msi2.png' },
        { id: 10, name: 'MSI Laptop delgada para juegos GF63, 15.6" FHD 144Hz, Intel i5-11400H, RTX 3050, 16GB RAM', price: '2620.00', img: 'msi3.jpg' },
    ];

    function renderProducts() {
        const productsSection = document.getElementById('products');
        productsSection.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>S/.  ${product.price}</p>
                <button data-id="${product.id}">Añadir al Carrito</button>
            `;
            productsSection.appendChild(productElement);
        });
    }

    function renderCart() {
        cartItemsElement.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = `${item.name} - S/.${item.price}`;
            cartItemsElement.appendChild(itemElement);
        });
        cartButton.textContent = `Carrito (${cart.length})`;
    }

    function addToCart(product) {
        cart.push(product);
        renderCart();
    }

    function clearCart() {
        cart.length = 0;
        renderCart();
    }

    document.getElementById('products').addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    });

    cartButton.addEventListener('click', () => {
        cartElement.classList.toggle('hidden');
    });

    checkoutButton.addEventListener('click', () => {
        alert('Gracias por tu compra!');
        clearCart();
    });

    clearCartButton.addEventListener('click', () => {
        clearCart();
    });

    renderProducts();
});


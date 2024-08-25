let cart = [];

function addToCart(product) {
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartSection = document.getElementById('cart');
    const cartItems = document.getElementById('cartItems');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = item;
        cartItems.appendChild(itemElement);
    });

    cartSection.style.display = 'block';
}

function clearCart() {
    cart = [];
    displayCart();
}

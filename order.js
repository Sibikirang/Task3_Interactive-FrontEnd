// order.js
document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById('orderForm');
    const addToCartButton = document.getElementById('addToCart');
    const cart = document.getElementById('cart');
    const submitOrderButton = document.getElementById('submitOrder');
    const clearCartButton = document.getElementById('clearCart');
    
    const cartItems = [];

    addToCartButton.addEventListener('click', () => {
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;
        if (product && quantity) {
            const item = `${product} (Quantity: ${quantity})`;
            cartItems.push(item);
            cart.innerHTML = cartItems.map((item) => `<li>${item}</li>`).join('');
        } else {
            alert('Please enter both product and quantity.');
        }
    });

    clearCartButton.addEventListener('click', () => {
        cartItems.length = 0;
        cart.innerHTML = '';
    });

    submitOrderButton.addEventListener('click', () => {
        if (cartItems.length > 0) {
            // Send the order data to a server (you can use an API or backend service).
            alert('Order submitted successfully!');
            cartItems.length = 0;
            cart.innerHTML = '';
        } else {
            alert('Your shopping cart is empty.');
        }
    });
});

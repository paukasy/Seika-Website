if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

function addToCart(productName, price) {
    // Get the existing cart
    let cart = JSON.parse(localStorage.getItem('cart'));

    // Add the new product to the cart
    cart.push({ name: productName, price: price });

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(productName + " has been added to your cart!");
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartItems = document.getElementById('cart-items');
    let total = 0;

    cart.forEach(item => {
        let cartItem = document.createElement('li');
        cartItem.textContent = item.name + " - $" + item.price.toFixed(2);
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    document.getElementById('cart-total').textContent = "Total: $" + total.toFixed(2);
}

// Call this function when the cart page loads
displayCart();

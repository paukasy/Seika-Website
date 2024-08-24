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
    
    // Create the table element
    let table = document.createElement('table');

    // Create the table header row
    let headerRow = document.createElement('tr');
    let headerProduct = document.createElement('th');
    headerProduct.textContent = 'Product';
    let headerPrice = document.createElement('th');
    headerPrice.textContent = 'Price';
    headerRow.appendChild(headerProduct);
    headerRow.appendChild(headerPrice);
    table.appendChild(headerRow);

    let total = 0;

    // Create rows for each item in the cart
    cart.forEach(item => {
        let row = document.createElement('tr');

        let cellProduct = document.createElement('td');
        cellProduct.textContent = item.name;
        row.appendChild(cellProduct);

        let cellPrice = document.createElement('td');
        cellPrice.textContent = "$" + item.price.toFixed(2);
        row.appendChild(cellPrice);

        table.appendChild(row);

        total += item.price;
    });

    // Add the table to the cartItems element
    cartItems.appendChild(table);

    // Display the total price
    document.getElementById('cart-total').textContent = "Total: $" + total.toFixed(2);
}

function clearCart(){
    localStorage.setItem('cart', JSON.stringify([]));
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = "";

    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    let headerProduct = document.createElement('th');
    headerProduct.textContent = 'Product';
    let headerPrice = document.createElement('th');
    headerPrice.textContent = 'Price';
    headerRow.appendChild(headerProduct);
    headerRow.appendChild(headerPrice);
    table.appendChild(headerRow);

    cartItems.appendChild(table);


    document.getElementById('cart-total').textContent = "Total: $0.00";

    alert("Your cart has been cleared!");
}

// Call this function when the cart page loads
displayCart();

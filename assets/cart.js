function openCart() {
    var cartOverlay = document.getElementById('cart-overlay');
    cartOverlay.classList.remove('hidden');
    cartOverlay.classList.add('open');
}
function closeCart() {
    var cartOverlay = document.getElementById('cart-overlay');
    cartOverlay.classList.remove('open');
    cartOverlay.classList.add('hidden');
}
function showCart(e) {
    e.preventDefault();
    openCart();
}

function addToCart(form_id) {
    toggleLoading(true);
    $.ajax({
        type: 'POST', 
        url: '/cart/add.js',
        dataType: 'json', 
        data: $('#'+form_id).serialize(),
        success: addToCartOk,
        error: addToCartFailure
    });
}
function addToCartOk() { 
    $('#cartCounter').html("<p>" + cartCount + "</p>");
    getCart();
    cartSuccess('Added item successfully');
}
function addToCartFailure() {
    cartError('Failed to add to cart. This product may no longer be available in the desired quantity.');
    toggleLoading(false);
}
function cartError(error) {
    $('#cartError').html("<div class='error'><h3>Error</h3><p>" + error + "</p></div>");
    openCart();
}
function cartSuccess(error) {
    $('#cartError').html("<div class='success'><h3>Success</h3><p>" + error + "</p></div>");
    openCart();
}

function removeFromCart(line_id) {
    toggleLoading(true);
    $.ajax({
        type: 'POST', 
        url: '/cart/change.js',
        dataType: 'json', 
        data: {
            'line': line_id+1,
            'quantity': 0
        },
        success: removeFromCartOk,
        error: removeFromCartFailure
    });
}

function removeFromCartOk(line_id) {
    cartSuccess('Removed item successfully');
    getCart();
}

function removeFromCartFailure() {
    cartError('Failed to remove item from cart. Click View Cart and try removing from there instead.');
    toggleLoading(false);
}

function getCart() {
    toggleLoading(true);
    $.ajax({
        type: 'GET', 
        url: '/cart.js',
        dataType: 'json',
        success: getCartOk,
        error: getCartFail
    });
}
function getCartOk(data) {
    cartCount = data.item_count;
    // cartContents = data.items;
    updateCart(data.items, data.currency);
    toggleLoading(false);
    // openCart();
} 
function getCartFail(data) {
    $('#cartError').replaceWith("<p>" + "Failed to get cart. This item may no longer be in stock" + "</p>");
    openCart();
    toggleLoading(false);
}
function updateCart(items, currency) {
    if (cartContents != items) {
        let counter = 0;
        const cartHtml = [];
        items.map((item, idx) => {
            counter += item.quantity;
            let price = new Intl.NumberFormat('en-GB', {style: 'currency', currency: currency}).format(item.price / 100);
            let title = filterProductTitle(item.product_title);
            cartHtml.unshift(`
            <div class='cart-item'>
                <div class='image'>
                <a href="${item.url}">
                    <img src="${item.image}" width='100%' height='100%' alt="${item.product_title}">
                </a>
                </div>
                <div class='details'>
                <a href="${item.url}"><div class='price'>
                    ${price}
                </div>
                <div class='product-title'>
                    ${title}
                </div> </a>
                <div class='variant'>
                    ${item.variant_title}
                    - Qty 
                    ${item.quantity}
                    </div>
                </div>
                <a onclick='removeFromCart(${idx}); return false;'>
                    <div class='remove-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                </a>
            </div>
            `)
        document.getElementById('cart-item-count').innerHTML = counter + ' items'
        document.getElementById('cartCounter').innerHTML ='<p>' + counter + '</p>'
        });
        const newProductData = `${cartHtml.join("")}`;
        const fullContent = $('#cartItems');
        fullContent[0].innerHTML = newProductData;
    }
    cartContents = items;
}

$(document).ready(function() {
    getCart();
});
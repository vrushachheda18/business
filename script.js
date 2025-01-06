let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartCount();
    alert(`${productName} has been added to your cart.`);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function showCart() {
    let cartContent = '<h2>Your Cart</h2><ul>';
    let total = 0;
    cart.forEach(item => {
        cartContent += `<li>${item.productName} - $${item.price.toFixed(2)}</li>`;
        total += item.price;
    });
    cartContent += `</ul><p>Total: $${total.toFixed(2)}</p>`;
    document.getElementById('cart').innerHTML = cartContent;
}

function startSlideshow(slideshowId) {
    const images = document.querySelectorAll(`#${slideshowId} img`);
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    ['slideshow1', 'slideshow2', 'slideshow3', 'slideshow4', 'slideshow5', 'slideshow6'].forEach(startSlideshow);
});
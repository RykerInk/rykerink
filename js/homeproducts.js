import {cart, addToCart} from './cart.js';
import {products} from './products.js';

let productsHTML = '';

products.slice(0, 16).forEach((product) => {
    productsHTML += `
        <div class="product-box">
            <img class="product-img" src="${product.image}">
        </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;


function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}


document.querySelectorAll('.js-add-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        addToCart(productId);
        updateCartQuantity();
    });
});

updateCartQuantity();

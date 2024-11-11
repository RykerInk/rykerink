import {products} from './products.js';

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
        <div class="product-box">
            <img class="product-img" src="${product.image}">
        </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

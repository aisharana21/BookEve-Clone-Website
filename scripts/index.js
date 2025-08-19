import { products } from "../data/products.js";
import { cart, addToCart } from "../data/cart.js";
let productsHTML = "";

// let productData = document.querySelector(".js-products-grid");


products.forEach((product) => {
  const HTML = ` <div class="product-container js-product-container-${product.id}">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>
      <div class="product-name limit-text-to-2-lines">
       ${product.name}
      </div>
      <div class="product-price">
    ${product.price}
      </div>
      <div class="product-quantity-container">
        <select class="poduct-quanity-option
         js-product-quantity-option" 
         data-product-id="${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div class="product-spacer"></div>
      <div class="added-to-cart-text js-added-to-cart-text" ></div>
      <button class="add-to-cart-button js-add-to-cart-button"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>`
  productsHTML += HTML;

});
//cart quantity
let quantity={};
document.querySelector(".js-products-grid")
.innerHTML = productsHTML;
document.querySelectorAll(".js-product-quantity-option")
.forEach(option=>{
  option.addEventListener('input',()=>{
    const productQuantityId= option.dataset.productId;
    quantity[productQuantityId] = Number(option.value);   
   
  });
});
//add to cart
document.querySelectorAll(".js-add-to-cart-button")
  .forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = btn.dataset.productId;
      let container = document.querySelector
      (`.js-product-container-${productId}`)
      container.querySelector(".js-added-to-cart-text").innerHTML = "Added";

      setTimeout(() => {
        container.querySelector(".js-added-to-cart-text").innerHTML = "";
      }, 2000);
            const productQuantity = quantity[productId] || 1;  

      addToCart(productId,productQuantity);
   updateCartQuantity();
    });
  });

console.log(cart);
  // updating cart quantity in header

function updateCartQuantity() {
  let cartQuantity =0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    document.querySelector(".cart-quantity").innerHTML = cartQuantity
  });
  
}
updateCartQuantity();
import { products } from "../data/products.js";

function renderProducts(){
    let productsHTML="";
// let productData = document.querySelector(".js-products-grid");
products.forEach((product)=>{
    const HTML=` <div class="product-container">
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
        <select>
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
      <button class="add-to-cart-button ">
        Add to Cart
      </button>
    </div>`
    productsHTML+=HTML;
    console.log(productsHTML)
        console.log(product);
})
// productData.innerHTML=productsHTML;
document.querySelector(".js-products-grid").innerHTML=productsHTML

}
renderProducts();
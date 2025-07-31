import { products } from "../data/products.js";

function renderProducts() {
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
      <div class="added-to-cart-text js-added-to-cart-text" ></div>
      <button class="add-to-cart-button js-add-to-cart-button"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>`
    productsHTML += HTML;

  })
  // productData.innerHTML=productsHTML;
  document.querySelector(".js-products-grid").innerHTML = productsHTML;
    let addedMessageTimeoutId;

  document.querySelectorAll(".js-add-to-cart-button")
    .forEach((btn) => {
      btn.addEventListener('click', () => {
        const btnId = btn.dataset.productId;
        let container = document.querySelector(`.js-product-container-${btnId}`)
        console.log(container)
//  const addedMessage = container.querySelector(".js-added-to-cart-text");

//       // Show the "Added" text
//       addedMessage.innerHTML = "Added";

//       // If this product already has a timer, clear it
//       if (addedMessage.setTimeoutId) {
//         clearTimeout(addedMessage.setTimeoutId);
//       }

//       // Start a new timer for this product only
//       addedMessage.setTimeoutId = setTimeout(() => {
//         addedMessage.innerHTML = "";
//       }, 2000);

//       console.log("Added to product:", btnId);

        container.querySelector(".js-added-to-cart-text").innerHTML = "Added";
        // if(addedMessageTimeoutId){

        //   clearTimeout(addedMessageTimeoutId);
        // }
    
    //  const setTimeoutId = 
     setTimeout(() => {
          container.querySelector(".js-added-to-cart-text").innerHTML = "";
        }, 2000);
        // addedMessageTimeoutId=setTimeoutId;
        console.log(addedMessageTimeoutId);
        console.log("Added");

      });
    });
}
        

renderProducts();

import { cart, removeCart, saveToLocalStorage } from "../data/cart.js";
import { products } from "../data/products.js";

export function renderCart() {
    let cartOrderHTML = "";

    cart.forEach((cartItem) => {
        let matchingproduct;
        products.forEach((product) => {
            if (product.id === cartItem.productId) {
                matchingproduct = product;
            }

        });
        // console.log(matchingproduct);
        cartOrderHTML += ` 
<div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
    <div class="cart-item-detail-grid">
    <div class="product-image">
         <img src="${matchingproduct.image}" alt="">
      </div>
    <div class="product-detail">
     <div class="product-name">
       ${matchingproduct.name}
    </div>
     <div class="product-price">
     Price : Rs ${matchingproduct.price}
     </div>
        <div class="product-quantity">
         <span class="js-cart-quantity-${matchingproduct.id}">
        Quantity: ${cartItem.quantity}
         </span>
          </div>
        <div class="edit-cart">
        <span class="update-cart js-update-cart"
         data-product-id="${matchingproduct.id}">
         Update
         </span>
        <span class="update-quantity">
         <select class="update-quantity-option 
         js-update-quantity-option-${matchingproduct.id}"
         data-product-id="${matchingproduct.id}">
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
        </select></span>
        <span class="save-update-quantity js-save-update-quantity"
         data-product-id="${matchingproduct.id}">
         Save
         </span>
        <span class="delete-cart js-delete-cart" 
        data-product-id="${matchingproduct.id}">
        Delete
        </span>
       </div>

     </div>
    </div>
     </div>`;
        // console.log(cartOrderHTML);

    });
    const quantity = {};
    document.querySelector(".order-summary").innerHTML
        = cartOrderHTML;
    console.log(cartOrderHTML);
    // removing product from Cart
    document.querySelectorAll(".js-delete-cart")
        .forEach((deleteLink) => {
            deleteLink.addEventListener('click', () => {
                const deleteProductId = deleteLink.dataset.productId;

                console.log("delete Id ", deleteProductId);
                removeCart(deleteProductId);
                renderCart();
            });
        });
    //updating cart 
    document.querySelectorAll(".js-update-cart")
        .forEach((updateLink) => {
            updateLink.addEventListener('click', () => {
                const updateProductId =
                    updateLink.dataset.productId;
                const container = document.querySelector
                    (`.js-cart-item-container-${updateProductId}`);
                container.classList.add("show-update-option");

            });
        });
    //updating quantity
    document.querySelectorAll(".update-quantity-option")
        .forEach(option => {
            option.addEventListener('input', () => {
                const updatedQuantityId = option.dataset.productId;
                quantity[updatedQuantityId] = option.value;
            });

        });
    document.querySelectorAll(".js-save-update-quantity")
        .forEach((saveLink) => {
            saveLink.addEventListener('click', () => {
                const saveProductId = saveLink.dataset.productId;
                const container = document.querySelector
                    (`.js-cart-item-container-${saveProductId}`);
                console.log("I'm container ", container);
                container.classList.remove("show-update-option");


                cart.forEach(cartItem => {
                    if (cartItem.productId === saveProductId)
                        cartItem.quantity = quantity[saveProductId] || 1;
                    document.querySelector(`.js-cart-quantity-${saveProductId}`)
                        .innerHTML = `Quantity: ${quantity[saveProductId] || 1}`;

                })

                saveToLocalStorage();
            });
        });






}
renderCart();
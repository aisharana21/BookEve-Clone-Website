import { cart,removeCart } from "../data/cart.js";
import { products } from "../data/products.js";

export function  renderCart(){
        let cartOrderHTML="";

cart.forEach((cartItem)=>{
let matchingproduct ;
 products.forEach((product)=>{
    if(product.id===cartItem.productId){
        matchingproduct= product;
    }

});
// console.log(matchingproduct);
cartOrderHTML+=` 
<div class="cart-item-container">
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
         <span>Quantity 1</span>
          </div>
        <div class="edit-cart">
        <span class="update-cart js-update-cart">Update</span>
        <span class="delete-cart js-delete-cart" data-product-id="${matchingproduct.id}">Delete</span>
       </div>

     </div>
    </div>
     </div>`;
    // console.log(cartOrderHTML);
  
});




// console.log(cart);/
document.querySelector(".order-summary").innerHTML
 = cartOrderHTML;

  // attach delete button listeners AFTER rendering
  document.querySelectorAll(".js-delete-cart")
    .forEach((deleteLink) => {
      deleteLink.addEventListener('click', () => {
        const productId = deleteLink.dataset.productId;
        console.log("delete Id ", productId);
        removeCart(productId);
        renderCart(); 
      });
    });
}
               renderCart();
import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

    let cartOrderHTML="";

cart.forEach((cartItem)=>{
let matchingproduct ;
 products.forEach((product)=>{
    if(product.id===cartItem.productId){
        matchingproduct= product;
    }

});
console.log(matchingproduct);

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
        <span>Update</span>
        <span>Delete</span>
       </div>

     </div>
    </div>
     </div>`;
    console.log(cartOrderHTML);
});

document.querySelector(".order-summary")
.innerHTML=cartOrderHTML;


console.log(cart);


               
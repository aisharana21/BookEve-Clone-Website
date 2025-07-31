// import { products } from "../data/products.js";
export const cart = JSON.parse(localStorage.getItem('cart')) || [];
 export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
        console.log("matching", matchingItem);
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    }
    else {
      cart.push({
        productId,
        quantity: 1
      });
    }
    console.log(cart);
    saveToLocalStorage();
  }

function saveToLocalStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

// import { products } from "../data/products.js";
export const cart = JSON.parse(localStorage.getItem('cart')) || [];
export function addToCart(productId,quantity) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
      console.log("matching", matchingItem);
    }
  });
  if (matchingItem) {
    matchingItem.quantity += quantity;
  }
  else {
    cart.push({
      productId,
      quantity
    });
  }
  console.log(cart);
  saveToLocalStorage();
}

export function saveToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
export function removeCart(productId) {
  cart.forEach((cartItem, index) => {
    if (cartItem.productId === productId) {
      cart.splice(index, 1);
      console.log(cart);
      saveToLocalStorage();
    }
  });
}

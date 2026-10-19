// function notImplemented() {
//   throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
// }

function addToCart(cart, product, quantity) {
  if (quantity > 0) {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex === -1) {
      return [{ ...product, quantity }];
    }
    const newCart[existingItemIndex] = { ...product, quantity:  cart[existingItemIndex].quantity + quantity}
    return newCart;
  }
  throw new RangeError();
}
function changeQuantity() {
  return notImplemented();
}
function removeFromCart() {
  return notImplemented();
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;

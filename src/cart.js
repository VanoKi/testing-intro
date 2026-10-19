function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}
function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError();
  }
  const existingItemIndex = cart.findIndex((item) => item.id === product.id);
  if (existingItemIndex === -1) {
    if (quantity > product.stock) {
      throw new RangeError();
    }
    return [{ ...product, quantity }];
  }

  const updatedQuantity = cart[existingItemIndex].quantity + quantity;
  if (updatedQuantity > product.stock) {
    throw new RangeError();
  }
  const newCart = [...cart];
  newCart[existingItemIndex] = {
    ...cart[existingItemIndex],
    quantity: updatedQuantity,
  };
  return newCart;
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

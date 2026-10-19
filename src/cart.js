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
function changeQuantity(cart, id, quantity) {
  if (quantity <= 0) {
    throw new RangeError();
  }
  const productIndex = cart.findIndex((item) => item.id === id);
  if (productIndex === -1) {
    return cart;
  }
  if (quantity > cart[productIndex].stock) {
    throw new RangeError();
  }
  const newCart = [...cart];
  newCart[productIndex] = { ...cart[productIndex], quantity };
  return newCart;
}
function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id);
}
function calculateCartSubtotal(cart) {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
  }
  return total;
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

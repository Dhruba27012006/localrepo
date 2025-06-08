function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const index = cart.findIndex(i => i.name === item.name);
  if (index !== -1) {
    cart[index].quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-count');
  if (badge) badge.textContent = count;
}
function goToCartPage() {
  window.location.href = 'cart.html';
}

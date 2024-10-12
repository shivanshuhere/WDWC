document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMsg = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPriceDiv = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  const products = [
    { id: 1, name: "product 1", price: 31.432 },
    { id: 2, name: "product 2", price: 31.432 },
    { id: 3, name: "product 3", price: 31.432 },
    { id: 4, name: "product 4", price: 31.432 },
  ];

  const cart = [];

  // render products
  products.forEach((prodcut) => {
    const { id, name, price } = prodcut;
    const newProduct = document.createElement("div");
    newProduct.innerHTML = `<span>${name} - $${price}</span><button data-id="${id}">Add to Cart</button>`;
    newProduct.classList.add("product");
    productList.appendChild(newProduct);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.dataset.id);
      addToCart(productId);
    }
  });

  function addToCart(id) {
    const item = products.find((product) => product.id === id);
    cart.push(item);
    renderCart();
  }

  function renderCart() {
    let totalPrice = 0;
    cartItems.innerHTML = "";
    if (cart.length > 0) {
      cartTotal.classList.remove("hidden");
      emptyCartMsg.classList.add("hidden");

      cart.forEach((item) => {
        const { id, name, price } = item;
        const newItem = document.createElement("div");
        newItem.innerHTML = `<span>${name} - $${price}</span> <button data-id="${id}">Remove</button>`;
        newItem.classList.add("product");
        cartItems.appendChild(newItem);
        totalPrice += price;
      });
      totalPriceDiv.innerHTML = `$${totalPrice.toFixed(2)}`;
    }
    if (cart.length == 0) {
      cartItems.innerText = emptyCartMsg.innerHTML;
      totalPriceDiv.innerHTML = `$0.00`;
      cartTotal.classList.add("hidden");
    }
  }

  cartItems.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.dataset.id);
      removeCartItem(productId);
    }
  });

  function removeCartItem(id) {
    const itemIndex = cart.findIndex((item) => item.id === id);
    cart.splice(itemIndex, 1);
    renderCart();
  }

  checkoutBtn.addEventListener("click", () => {
    alert("Checkout Successfully!");
    cart.length = 0;
    renderCart();
  });
});

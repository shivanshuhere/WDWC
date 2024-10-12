document.addEventListener("DOMContentLoaded", () => {
  const prodList = document.querySelector("#product-list");
  const emptyCartMsg = document.querySelector("#empty-cart");
  const cartItem = document.querySelector("#cart-items");
  const cardTotoal = document.querySelector("#cart-total");
  const cardTotoalPrice = document.querySelector("#total-price");

  const products = [
    {
      id: 1,
      name: "product 1",
      price: 19.1293,
    },
    {
      id: 2,
      name: "product 2",
      price: 39,
    },
    {
      id: 3,
      name: "product 3",
      price: 42,
    },
  ];

  const cart = [];

  products.forEach((prod) => {
    const { name, price, id } = prod;
    let newProd = document.createElement("div");
    newProd.innerHTML = `<span>${name} - $${price.toFixed(2)}
    </span><button data-id="${id}">Add to cart</button>`;
    newProd.classList.add("product");
    newProd.setAttribute("price-data", price);
    prodList.appendChild(newProd);
  });

  prodList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let id = parseInt(e.target.dataset.id);
      const product = products.find((prod) => prod.id === id);
      addToCart(product);
    }
  });
  function addToCart(prod) {
    cart.push(prod);
    renderCart();
  }
  function renderCart() {
    let totalPrice = 0;
    if (cart.length) {
      cartItem.innerHTML = "";
      emptyCartMsg.classList.add("hidden");
      cardTotoal.classList.remove("hidden");

      cart.forEach((item, index) => {
        totalPrice += item.price;
        const newItem = document.createElement("p");
        newItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItem.appendChild(newItem);
      });
      cardTotoalPrice.textContent = `$${totalPrice.toFixed(2)}`;
    } else {
      emptyCartMsg.classList.remove("hidden");
      cardTotoalPrice.textContent = `$0.00`;
    }
  }

  document.querySelector("#checkout-btn").addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout Successfully!");
    renderCart();
  });
});

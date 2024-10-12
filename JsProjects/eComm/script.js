document.addEventListener("DOMContentLoaded", () => {
  const prodList = document.querySelector("#product-list");
  const emptyCart = document.querySelector("#empty-cart");
  const cardTotoal = document.querySelector("#cart-total");

  let count = 0;
  function addNewProduct(n, prices) {
    for (let i = 0; i < n; i++) {
      let newProd = document.createElement("div");
      newProd.innerHTML = `<span>product ${++count} - $${
        prices[i]
      }</span><button>Add to cart</button>`;
      newProd.classList.add("product");
      newProd.setAttribute("price-data", prices[i]);
      prodList.appendChild(newProd);
    }
  }

  document.querySelector("button").addEventListener("click", (e) => {
    console.log(e);
    addToCart();
  });

  function addToCart() {
    console.log("add to cart");
  }

  let priceList = [10, 43, 123, 64, 12];
  addNewProduct(5, priceList);
});

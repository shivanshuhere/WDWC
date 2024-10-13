document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");
  const totalAmt = document.getElementById("total-amount");
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  if (expenses) renderExpenses();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const [expense, amount] = e.srcElement;

    const newExpense = {
      id: Date.now(),
      expenseName: expense.value,
      amount: amount.value,
    };
    expense.value = "";
    amount.value = "";
    expenses.push(newExpense);
    save();
    renderExpenses();
  });

  function renderExpenses() {
    let total = 0;
    expenseList.innerText = "";
    if (expenses.length) {
      expenses.forEach((item) => {
        const { expenseName, amount, id } = item;
        const newExpense = document.createElement("li");
        newExpense.innerHTML = `<span>${expenseName} - $${amount}</span><button data-id="${id}">Remove</button>`;
        expenseList.appendChild(newExpense);
        total = total + parseInt(amount);
      });
      totalAmt.innerText = `${total}`;
      //   console.log(total);
    } else {
      totalAmt.innerText = `0.00`;
    }
  }

  function save() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    console.table(expenses);
  }

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = e.target.dataset.id;
      remove(id);
    }
  });

  function remove(id) {
    const itemIndex = expenses.findIndex((item) => item.id === id);
    expenses.splice(itemIndex, 1);
    save();
    renderExpenses();
  }
});

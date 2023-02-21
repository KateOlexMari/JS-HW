//Задача 2.
//З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

// Отримуємо необхідні дані
const productPrice = parseFloat(prompt("Введіть ціну товара", "10"));
const amountMoney = parseFloat(prompt("Введіть кількість грошей", "20"));
const lotteryPrice = 4;
let el = document.querySelector(".task__result");
let reminder = amountMoney - productPrice;

if (reminder < 0) {
  // не можливо зробити покупку товару
  alert("Недостатньо коштів для розрахунку.");
} else if (reminder >= lotteryPrice) {
  alert("Оплата пройшла успішно. Ви можете зіграти в лотерею за 4 грн.");
} else {
  alert("Оплата пройшла успішно. Приходьте ще!");
}

//Задача 3.
//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

const minInterval = 1;
const maxInterval = 5;

let randomNumber =
  minInterval + Math.floor(Math.random() * (minInterval - minInterval + 1));

alert("Спробуйте вгадати ціле число від 1 до 5 (включно). У вас є 2 спроби.");
let userNumber = parseInt(prompt("Введіть перший варіант числа"));

if (userNumber === randomNumber) {
  alert(
    `Вітаємо, ви вгадали з першої спроби! випадкове число було ${randomNumber}.`
  );
} else {
  alert(`Ви не вгадали, але маєте ще одну спробу!`);
  userNumber = parseInt(prompt("Введіть другий варіант числа"));
  if (userNumber === randomNumber) {
    alert(`Вітаємо, ви вгадали! Випадкове число було ${randomNumber}.`);
  } else {
    alert(`Нажаль,ви не вгадали. Випадкове число було ${randomNumber}.`);
  }
}

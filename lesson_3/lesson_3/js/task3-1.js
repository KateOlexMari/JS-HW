//Задача 1
//З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

// Отримуємо необхідні дані

const firstChildName = prompt("Введіть ім’я першої дитини:", "Марія");
const quantityCandyFirstChild = parseInt(
  prompt("Скільки цукерок у першої дитини?", "5")
);
const secondChildName = prompt("Введіть ім’я другої дитини:", "Сашко");
const quantityCandySecondChild = parseInt(
  prompt("Скільки цукерок у другої дитини?", "10")
);

// Виводимо результат

let el = document.querySelector(".task__result");

if (quantityCandyFirstChild > quantityCandySecondChild) {
  el.innerHTML = `
		<p>
			${firstChildName} має більше цукерок.
		</p>`;
} else if (quantityCandyFirstChild < quantityCandySecondChild) {
  el.innerHTML = `
		<p>
			${secondChildName} має більше цукерок.
		</p>`;
} else {
  el.innerHTML = `
		<p>
			Цукерок у обох дітей порівну.
		</p>`;
}

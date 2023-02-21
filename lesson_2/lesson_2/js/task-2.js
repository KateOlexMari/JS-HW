window.onload = function () {
	//Отримуємо рік народження користувача
	let userBirthYear = parseInt(prompt('Введіть рік вашого народження', '0'));

	//Визначаємо поточну дату та рік
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();

	//Вираховуємо вік користувача
	let userAge = currentYear - userBirthYear;

	// Виводимо результат
	let el = document.querySelector('.task__result');
	el.innerHTML = `
	Вам ${userAge} роки.
	`;
};	
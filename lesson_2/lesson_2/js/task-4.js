window.onload = function () {
	// Декларуємо константи
	const CENTIMETR_TO_METR_RATIO = 0.01;
	const CENTIMETR_TO_KILOMETR_RATIO = 0.001;

	// Робимо запит довжини елементу у користувача
	let centimetrs = parseFloat(prompt('Введіть довжину елементу в см', '0'));

	//Робимо підрахунки
	let resultInMetrs = centimetrs * CENTIMETR_TO_METR_RATIO;
	let resultInKilometrs = centimetrs * CENTIMETR_TO_KILOMETR_RATIO;

	// Виводимо результат
	let el = document.querySelector('.task__result');
	el.innerHTML = `
<p>Довжина в метрах ${resultInMetrs} м.</p>
<p>Довжина в кілометрах ${resultInKilometrs} км.</p>
`;
};	
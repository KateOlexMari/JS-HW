window.onload = function () {
	// Визначаємо константи
	const dayMin = 0;
	const dayMax = 6;
	const monthMin = 1;
	const monthMax = 12;

	// Отримуємо випадкові числа з визначених проміжків
	let randomDay = dayMin + Math.floor(Math.random() * (dayMax - dayMin + 1));
	let randomMonth = monthMin + Math.floor(Math.random() * (monthMax - monthMin + 1));

	// Отримуємо суму двох випадкових чисел з визначених проміжків
	let randomSum = randomDay + randomMonth;

	// Виводимо результат
	let el = document.querySelector('.task__result');
	el.innerHTML = `
    <p>
        Випадковий день = <b>${randomDay}</b> 
    </p>
    <p>
        Випадковий місяць = <b>${randomMonth}</b>
    </p>
    <p>
	 	Сума випадкового дня і місяця = <b>${randomSum}</b>
    </p>
`;
};	
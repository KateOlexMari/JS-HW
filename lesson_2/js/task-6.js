window.onload = function () {
	// Отримуємо вартість та к-сть товарів
	let firstProductPrice = parseFloat(prompt('Введiть вартiсть Товару 1 (грн)', '0'));
	let firstProductQuantity = parseFloat(prompt('Введiть кількість Товару 1 (шт. кг)', '0'));
	let secondProductPrice = parseFloat(prompt('Введiть вартiсть Товару 2 (грн)', '0'));
	let secondProductQuantity = parseFloat(prompt('Введiть кількість Товару 2 (шт. кг)', '0'));
	let thirdProductPrice = parseFloat(prompt('Введiть вартiсть Товару 3 (грн)', '0'));
	let thirddProductQuantity = parseFloat(prompt('Введiть кількість Товару 3 (шт. кг)', '0'));

	// Визначаємо суму по кожному з товарів
	let firstProductSum = firstProductPrice * firstProductQuantity;
	let secondProducSum = secondProductPrice * secondProductQuantity;
	let thirdProductSum = thirdProductPrice * thirddProductQuantity;

	// Визначаємо загальну вартість покупок
	let totalSum = firstProductSum + secondProducSum + thirdProductSum;

	// Вививодимо результат у "чек"
	let el = document.querySelector('.task__result');
	el.innerHTML = `
			<table>
					<tr>
						<td>Назва товару</td>
						<td>Ціна</td>
						<td>Кількість</td>
						<td>Сума чека</td>
					</tr>
					<tr>
						<td>Товар 1</td>
						<td>${firstProductPrice}</td>
						<td>${firstProductQuantity}</td>
						<td>${firstProductSum}</td>
					</tr>
					<tr>
						<td>Товар 2</td>
						<td>${secondProductPrice}</td>
						<td>${secondProductQuantity}</td>
						<td>${secondProducSum}</td>
					</tr>
					<tr>
						<td>Товар 3</td>
						<td>${thirdProductPrice}</td>
						<td>${thirddProductQuantity}</td>
						<td>${thirdProductSum}</td>
					</tr>
					<tr>
						<th colspan="3">Загальна сума:</th>
						<td>${totalSum}грн</td>
					</tr>
			</table>
		
		`;

};	
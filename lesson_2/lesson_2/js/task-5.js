window.onload = function () {

	//Отримуємо значення в секундах
	let seconds = parseInt(prompt('Скільки секунд тому почаласа ваша доба?'));

	let secondsToMinutes = seconds / 60;
	let minutesToHours = Math.floor(secondsToMinutes / 60);
	let hoursToMinutes = Math.round(secondsToMinutes - minutesToHours * 60);



	//Виводимо результат
	let el = document.querySelector('.task__result');
	el.innerHTML = `

	<p> Кількість секунд, які ви ввели:
	${seconds} 
	.</p>
	<p> Це дорівнює
	${minutesToHours} год. ${hoursToMinutes} хв.
	</p>
	`;
};




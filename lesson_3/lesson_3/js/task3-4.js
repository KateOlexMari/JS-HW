//Задача 4.
//З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const userAge = parseInt(prompt("Вік користувача"));

const maxKindergartenAge = 6,
  maxschoolAge = 16,
  maxStudentAge = 23,
  maxWorkerAge = 70,
  maxRetiredAge = 71;

if (userAge <= maxKindergartenAge) {
  alert(`Людині ${userAge}р., це Дитина`);
} else if (userAge <= maxschoolAge) {
  alert(`Людині ${userAge}р., це Школяр`);
} else if (userAge <= maxStudentAge) {
  alert(`Людині ${userAge}р., це Студент`);
} else if (userAge <= maxWorkerAge) {
  alert(`Людині ${userAge}р., це Працівник`);
} else {
  alert(`Людині ${userAge}р., це Пенсіонер`);
}

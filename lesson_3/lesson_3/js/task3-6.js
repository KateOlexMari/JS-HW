//Задача 6.
//З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

const dayNumber = parseInt(prompt("Введіть номер дня тижня (від 1 до 7)"));

const mondayNum = 1;
const tuesdayNum = 2;
const wednesdayNum = 3;
const thursdayNum = 4;
const fridayNum = 5;
const saturdayNum = 6;
const sundayNum = 7;

if (dayNumber == mondayNum) {
  alert(`${dayNumber}й день тижня це - Понеділок.`);
} else if (dayNumber === tuesdayNum) {
  alert(`${dayNumber}й день тижня це - Вівторок.`);
} else if (dayNumber === wednesdayNum) {
  alert(`${dayNumber}й день тижня це - Середа.`);
} else if (dayNumber === thursdayNum) {
  alert(`${dayNumber}й день тижня це - Четвер.`);
} else if (dayNumber === fridayNum) {
  alert(`${dayNumber}й день тижня це - П'ятниця.`);
} else if (dayNumber === saturdayNum) {
  alert(`${dayNumber}й день тижня це - Субота.`);
} else if (dayNumber === sundayNum) {
  alert(`${dayNumber}й день тижня це - Неділя.`);
} else {
  alert("Введіть число від 1 до 7");
}

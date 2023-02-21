//Задача 7.
//З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься.

const monthNumber = parseInt(prompt("Введіть номер місяця (від 1 до 12)"));

if (monthNumber <= 0 || monthNumber > 12) {
  alert("Помилка, у одному році тільки 12 місяців.");
} else if (monthNumber <= 2 || monthNumber === 12) {
  alert(`${monthNumber}й - це зимовий місяць `);
} else if (monthNumber <= 5) {
  alert(`${monthNumber}й - це весняний місяць `);
} else if (monthNumber <= 8) {
  alert(`${monthNumber}й - це літній місяць `);
} else if (monthNumber <= 11) {
  alert(`${monthNumber}й - це осінній місяць `);
}

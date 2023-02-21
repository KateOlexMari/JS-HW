//Задача 5.
//З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

const driverLicenseCategory = prompt(
  "Введіть категорію водійського посвідчення(англійські літери A,B чи C)",
  "A"
).toUpperCase();

const driverCategory_A = "A";
const driverCategory_B = "B";
const driverCategory_C = "C";

if (driverLicenseCategory == driverCategory_A) {
  alert(
    `Категорія посвідчення - ${driverLicenseCategory}, вам дозволено керувати мотоциклом.`
  );
} else if (driverLicenseCategory === driverCategory_B) {
  alert(`Категорія посвідчення - ${driverLicenseCategory}, вам дозволено керувати легковим
автомобілем.`);
} else if (driverLicenseCategory === driverCategory_C) {
  alert(`Категорія посвідчення - ${driverLicenseCategory}, вам дозволено керувати вантажним
автомобілем.`);
} else {
  alert("Категорія посвідчення введена не корректно");
}

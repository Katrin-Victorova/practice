// 1
// остаток от деления для проверки
// function sum() {
//   let number = 7;

//   if (number % 2 === 0) {
//     console.log("Чётное число");
//   } else {
//     console.log("Нечётное число");
//   }
// }

// sum();

// 2
// function age() {
//   const ages = 15;

//   if (ages < 13) {
//     console.log("Ребёнок");
//   } else if (ages <= 18) {
//     console.log("Подросток");
//   } else if (ages > 18) {
//     console.log("Взрослый");
//   } else {
//     console.log("Не верный возраст");
//   }

//   return ages;
// }

// age();

// 3
// function hourNew() {
//   let hour = 27;
//   if (hour >= 6 && hour <= 12) {
//     console.log("Доброе утро");
//   } else if (hour >= 12 && hour <= 18) {
//     console.log("Добрый день");
//   } else if (hour >= 18 && hour <= 24) {
//     console.log("Добрый вечер");
//   } else if (hour >= 0 && hour <= 6) {
//     console.log("Доброй ночи");
//   } else {
//     console.log("Такого времени суток нет");
//   }
// }

// hourNew()

// 3 от Руслана что так лучше использовать
// let hour = 14;

// switch (true) {
//   case hour >= 6 && hour < 12:
//     console.log("Доброе утро");
//     break;
//   case hour >= 12 && hour < 18:
//     console.log("Добрый день");
//     break;
//   case hour >= 18 && hour < 24:
//     console.log("Добрый вечер");
//     break;
//   case hour >= 0 && hour < 6:
//     console.log("Доброй ночи");
//     break;
//   default:
//     console.log("Некорректное время");
// }

// 4
// let agewe = 19;
// const ageNahe = agewe >= 18 ? "Совершеннолетний" : "Несовершеннолетний";

// console.log(ageNahe)

// 5
// let temperature = -5;
// const outputTemperature =
//   temperature < 0 ? "Холодно" : temperature < 30 ? "Тепло" : "Жарко";

// console.log(outputTemperature);

// 6
// let isMember = true;
// console.log(isMember ? "Скидка 10%" : "Без скидки");

// 7
// let month = 12;
// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Зима");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Весна");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Лето");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Осень");
//     break;
// }

// console.log(month);

// 8
// let result;

// let a = parseFloat(prompt("Введите первое число: "));
// let b = parseFloat(prompt("Введите второе число: "));
// let operator = prompt("Введите  оператор: (+, -, * или / ): ");

// switch (operator) {
//   case "+":
//     result = a + b;
//     console.log(`${a} + ${b} = ${result}`);
//     break;
//   case "-":
//     result = a - b;
//     console.log(`${a} - ${b} = ${result}`);
//     break;
//   case "*":
//     result = a * b;
//     console.log(`${a} * ${b} = ${result}`);
//     break;
//   case "/":
//     result = a / b;
//     console.log(`${a} / ${b} = ${result}`);
//     break;
// }

// console.log();

// 9
// let day = 7;

// switch (day) {
//   case 1:
//     console.log("Понедельник");
//     break;
//   case 2:
//     console.log("Вторник");
//     break;
//   case 3:
//     console.log("Среда");
//     break;
//   case 4:
//     console.log("Четверг");
//     break;
//   case 5:
//     console.log("Пяница");
//     break;
//   case 6:
//     console.log("Суббота");
//     break;
//   case 7:
//     console.log("Воскресение");
//     break;
// }

// console.log(day)
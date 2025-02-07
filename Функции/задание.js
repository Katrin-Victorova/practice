// 1
function sum(a, b) {
  return a + b;
}

// console.log(sum(5, 3));

// 2
function getStringLength(string) {
  return console.log(string.length);
}

// console.log(getStringLength("Проверка"));

// 3
function introduce(name, age, sity) {
  return console.log(`Меня зовут ${name}, мне ${age} лет, я из ${sity}`);
}

// introduce("Максим", 25, "Москва");
// Меня зовут Иван, мне 25 лет, я из Москва

// 4
let message = "Привет, мир!";

function chageMessage() {
  return (message = "Новое значение");
}

// console.log(message)

// chageMessage()

// console.log(message)

// 5
let globalMessage = "Глобальная переменная";

function chageglobalMessage() {
  let globalMessage = "Локальная переменная";
  return console.log(globalMessage);
}

// chageglobalMessage();

// console.log(globalMessage);

// 6
const double1 = function (x) {
  return x * 2;
};

// console.log(double(4)); // 8

// Преобразуй эту функцию в стрелочную функцию
const double = (x) => x * 2;
console.log(double(6)); // 8

//7
const pow = (x, n) => x ** n;
console.log(pow(3, 2)); // 9

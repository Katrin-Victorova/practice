//Пример изменения внешней переменной:
let userName = 'Вася';  // глобальная переменная

function showMessage() {
  userName = "Петя";  // изменяем значение глобальной переменной
  let message = 'Привет, ' + userName;
  console.log(message);
}

console.log(userName);  // Выведет: Вася (до вызова функции)

showMessage();    // Выведет: Привет, Петя

console.log(userName);  // Выведет: Петя (после изменения функции)
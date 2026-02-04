/**
 * Они позволяют объединять условия и выполнять действия в зависимости
 * от их истинности (true) или ложности (false). Логические операторы
 * особенно полезны при работе с условными операторами и циклами.
 *
 * 1 && 0 вернёт 0, потому что 0 — это ложное значение.
 *
 * let result = 0 || "" || false || null;
 *  console.log(result);  // null (последнее ложное значение)
 *
 * || Оператор проверяет все значения: 0, "", false и null — все они ложные,
 * поэтому возвращается последнее ложное значение (null)
 *
 * Оператор "НЕ" (!) инвертирует логическое значение:
 * true становится false, и наоборот.
 */

// Ситуация: Необходимо разрешить доступ только пользователям старше 18 лет
// с билетами или тем, кто имеет VIP-статус, при этом они не должны быть
// заблокированы.

let age = 20;
let hasTicket = false;
let isVIP = true;
let isBanned = false;

if ((age > 18 && hasTicket) || (isVIP && !isBanned)) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}

/**
 * Условие ​​​​(age > 18 && hasTicket)​​​​ проверяет, есть ли у пользователя билет и старше ли он 18 лет.
 * Условие ​​​​isVIP && !isBanned​​​​ проверяет, является ли пользователь VIP и не заблокирован ли он.
 * Оператор ​​​​||​​​​ объединяет два выражения, разрешая доступ, если выполнено одно из них.
 */

// Проверка допустимого времени работы
let currentHour = 10;
let isWeekend = false;

if ((currentHour >= 9 && currentHour <= 18) || isWeekend) {
  console.log("Рабочее время или выходной день");
} else {
  console.log("Не рабочее время");
}

// Обработка формы с условием на все поля
let username = "JohnDoe";
let password = "password123";
let email = "";

if (username && password && email) {
  console.log("Все поля заполнены");
} else {
  console.log("Необходимо заполнить все поля");
}

// Проверка валидности входа
let isLoginValid = false;
let isPasswordValid = false;
let isAdminMode = true;

if ((isLoginValid && isPasswordValid) || isAdminMode) {
  console.log("Вход выполнен");
} else {
  console.log("Неверный логин или пароль");
}
/**
 * Оператор нулевого слияния (??) был введён в ECMAScript 2020 (ES11). 
 * Он используется для возврата первого не null и не undefined значения. 
 * Это удобно, когда нужно задать значение по умолчанию, если 
 * переменная не определена или равна null.
 */

let username = null;
let defaultUsername = "Гость";

let currentUser = username ?? defaultUsername;
console.log(currentUser);  // "Гость"

// Значения по умолчанию для нескольких переменных
let firstName = null;
let lastName = "Doe";

let displayName = (firstName ?? "Имя не указано") + " " + (lastName ?? "Фамилия не указана");
console.log(displayName);  // "Имя не указано Doe"
// Оператор ​​​​??​​​​ позволяет задать значения по умолчанию для каждой переменной отдельно. 
// В этом примере, если ​​​​firstName​​​​ или ​​​​lastName​​​​ равны ​​​​null​​​​ или ​​​​undefined​​​​, используются значения по умолчанию.

// Использование в функциях с параметрами
function greet(name) {
  let userName = name ?? "Гость";
  console.log("Привет, " + userName);
}

greet();  // Привет, Гость
greet("Алексей");  // Привет, Алексей
// 1
// console.log(null ?? 0 ?? "Привет"); // 0
// console.log(null || 0 || "Привет"); // Привет
// console.log(null && 0 && "Привет"); // null

// let x = 3;
// let y = 5;
// console.log(x > 2 || y < 6 && x === 3); //3

// console.log(0 ?? undefined ?? null ?? 10);   //0
// console.log(0 || undefined || null || 10);   // 10

// let isMember = true;
// let isPremium = false;

// // console.log(isMember && isPremium || !isPremium); // 3 true
// console.log(!isMember || isPremium && isMember); // 2 false

// let age = 16;
// let hasParentalConsent = true;

// if (age >= 18 || (age >= 16 && hasParentalConsent)) {
//   console.log("Доступ разрешён");    // 1 true
// } else {
//   console.log("Доступ запрещён");    // 2
// }

// let firstName = null;
// let lastName = null;

// console.log(firstName ?? "Имя не указано" + " " + lastName ?? "Фамилия не указана");

// 2
// let age = 18;
// let hasTicket = false;
// let isVIP = true;

// if (age >= 18 && hasTicket || !hasTicket && isVIP) {
//   console.log("Доступ разрешён")
// } else {
//   console.log("Доступ запрещён")
// }

// Напишите условие для проверки доступа

// 3
// let currentHour = 14;
// let isWeekend = false;
// let isHoliday = false;

// if ((currentHour >= 9 && currentHour <= 18) && (isHoliday && isWeekend)) {
//   console.log("Сотрудник работает");
// } else {
//   console.log("Сотрудник отдыхает");
// }

// Напишите условие, которое проверяет, работает ли сотрудник

// 4 есть вопросы
// let personalDiscount = null;
// let couponDiscount = 10; // Скидка по купону в процентах
// let isVIP = true;

// if (personalDiscount ?? couponDiscount) {
//   console.log(`Ваша скидка: ${couponDiscount}%`)
// } else if (isVIP === true) {
//   console.log(`Ваша скидка: 50%`)
// } else {
//   console.log("Скидка отсутствует");
// }

// 5 есть вопросы
// let isAuthorized = true;
// let isBanned = false;
// let isVerified = false;
// let isAdmin = true;

// if (isAuthorized && !isBanned || isVerified && isAdmin) {
//   console.log("Доступ разрешён")
// } else {
//   console.log("Доступ запрещён")
// }

// Напишите условие для проверки доступа

// 6
let score1 = 85;
let score2 = null;
let score3 = 90;

// let total = score1 + score2 + score3;
// let per = total / 3;

// console.log(per)
// if (score2 === null ?? 0 : 'Значение не указанно') {}



//Вывести средний балл пользователя с учётом значений по умолчанию.
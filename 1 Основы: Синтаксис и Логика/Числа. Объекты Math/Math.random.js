// Какой самый надёжный способ получить целое от 1 до 1000?
const min = 1;
const max = 1000;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

/*
	Math.floor округляет вниз
	(max - min + 1) — чтобы попасть именно в [1, 1000]
	min — чтобы начать с 1
 */

/*
		Вывод:
		Просто * 1000 — можно получить 0, не получишь 1, если округляешь вниз!
		Чтобы получить от 1 до 1000 — сдвигаем диапазон: Math.random() * 999 + 1 (или как в формуле выше для целых).
 */

// Формула:
Math.random() * (max - min) + min;

// 1. получить целое число от min до max (включительно).
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // Например: 7

// 2. выбрать случайный элемент из массива.
const arr = ['кот', 'пёс', 'ежик', 'слон'];
const randomIndex = Math.floor(Math.random() * arr.length);
const randomAnimal = arr[randomIndex];
console.log(randomAnimal); // Например: "ежик"

/*
						▼           ▼
		['кот', 'пёс', 'ежик', 'слон']
			0      1       2        3
		randomIndex = случайное от 0 до 3
 */

// 3. Случайное булево значение (true/false)
const randomBool = Math.random() > 0.5;
console.log(randomBool); // true или false

// Монетка — "орёл или решка"
const coin = Math.random() < 0.5 ? 'орёл' : 'решка';
console.log(coin);

// 4. Генерация случайного пароля (из букв/цифр)
function getRandomPassword(length) {
	const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let pass = '';
	for (let i = 0; i < length; i++) {
		pass += chars[Math.floor(Math.random() * chars.length)];
	}
	return pass;
}
console.log(getRandomPassword(8)); // Например: "8kfp0zay"

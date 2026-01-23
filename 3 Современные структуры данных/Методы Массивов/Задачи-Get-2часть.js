/**
 * Задача 6: Сумма положительных чисел */
const numbers = [-2, 3, 4, -1, 5];

// 1. Фильтруем положительные
const positive = numbers.filter(num => num > 0);

// 2. Складываем их
const positiveSum = positive.reduce((acc, num) => acc + num, 0);

console.log(positiveSum); // 12

/**
 * Задача 7: Уникальные значения - убрать дубликаты */

// Set — это структура данных, которая автоматически убирает дубликаты.
const items = [1, 2, 3, 2, 4, 1, 5];

const uniqueItems = [...new Set(items)];

console.log(uniqueItems); // [1, 2, 3, 4, 5]

// Filter
const items2 = [1, 2, 3, 2, 4, 1, 5];

const uniqueItems2 = items2.filter((item, index) => {
	return items2.indexOf(item) === index;
});

console.log(uniqueItems2); // [1, 2, 3, 4, 5]

// Reduce - здесь мы вручную контролируем, что попадает в массив.
// если элемента нет в аккумуляторе — положи его туда через push
const items3 = [1, 2, 3, 2, 4, 1, 5];

const uniqueItems3 = items3.reduce((acc, num) => {
	// если числа нет в аккумуляторе — добавляем
	// acc — это "коробка" для уникальных значений
	if (!acc.includes(num)) {
		acc.push(num);
	} // на каждом шаге мы смотрим: ⤷ «а это число уже лежит в коробке?» если нет → кладём
	return acc;
}, []);

console.log(uniqueItems3); // [1, 2, 3, 4, 5]

/**
 * Задача 8: Массив объектов с определённым условием
 * оставить только тех пользователей, которым больше 18 → filter
 * достать их имена → map
 */
const users = [
	{ name: 'Alice', age: 17 },
	{ name: 'Bob', age: 22 },
	{ name: 'Charlie', age: 19 },
];

const adults = users.filter(user => user.age > 18); // оставили взрослых
const adultsNames = adults.map(user => user.name); // достали имя

// const adultNames = users
//   .filter(user => user.age > 18)
//   .map(user => user.name);

console.log(adultsNames); // ["Bob", "Charlie"]

/**
 * Задача 9: Объединить массив строк в одно предложение
 * map — если нужно что-то изменить (но тут ничего менять не надо)
 * map нужен, если бы мы делали:
   первая буква заглавная
   добавить точку
   преобразовать в верхний регистр
 * join — склеивает элементы массива в строку */

const words = ['JavaScript', 'is', 'fun'];

const sentence = words.join(' ');
console.log(sentence); // "JavaScript is fun"

/**
 * Задача 10: Найти максимальное число среди положительных
 * убрать отрицательные → filter
 * найти максимум → reduce или Math.max */

const numbersF = [3, -2, 7, -1, 5];

// 1. Оставляем положительные числа
const positiveF = numbersF.filter(num => num > 0); // фильтруем положительные

// 2. Находим максимальное среди них
const maxNumber = positiveF.reduce((acc, num) => {
	// если новое число больше — обновляем
	return num > acc ? num : acc;
});

// const maxNumber = numbers
//   .filter(n => n > 0)
//   .reduce((acc, n) => (n > acc ? n : acc));

console.log(maxNumber); // 7

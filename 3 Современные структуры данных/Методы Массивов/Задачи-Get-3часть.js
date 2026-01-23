/**
 * Сейчас мы сами напишем myMap, myFilter и myReduce, чтобы ты чётко понимала,
 * как работают настоящие методы.
 */

/**
 * Задача 11: Реализовать myMap */
function myMap(array, callback) {
	// array — массив, с которым работаем
	// callback — функция, которую вызываем для каждого элемента
	// Создаём новый массив, в который будем складывать результаты
	const result = [];
	// Проходим по всем элементам исходного массива
	for (let i = 0; i < array.length; i++) {
		const current = array[i]; // текущий элемент

		// Вызываем колбэк-функцию и передаём ей текущий элемент
		// callback должен вернуть НОВОЕ значение для этого элемента
		const newValue = callback(current, i, array);
		// current - текущий элемент
		// i       - индекс
		// array   - весь исходный массив (как в обычном map)

		// Кладём новое значение в результат
		result.push(newValue);
	}
	// Возвращаем новый массив
	return result;
}

// проверяем
const nums = [1, 2, 3];
const doubled = myMap(nums, function (num) {
	return num * 2;
});
console.log(doubled); // [2, 4, 6]
console.log(nums); // [1, 2, 3]

/**
 * Задача 12: Реализовать myFilter */
function myFilter(array, callback) {
	// Здесь будем хранить элементы, которые "прошли проверку"
	const result = [];

	// Перебираем все элементы массива
	for (let i = 0; i < array.length; i++) {
		const current = array[i];

		// Вызываем колбэк: он возвращает true или false
		const shouldKeep = callback(current, i, array);

		// Если колбэк вернул true — оставляем элемент (кладём в result)
		if (shouldKeep) {
			result.push(current);
		}
	}

	// Возвращаем НОВЫЙ массив отфильтрованных элементов
	return result;
}

// Проверяем:
const numsD = [1, 2, 3, 4, 5];

const evenNums = myFilter(nums, function (num) {
	return num % 2 === 0; // true, если число чётное
});

console.log(evenNums); // [2, 4]
console.log(nums); // [1, 2, 3, 4, 5] — исходный массив не изменился

/**
 * Задача 13: Реализовать myReduce */
function myReduce(array, callback, initialValue) {
	// Стартовое значение аккумулятора
	let acc = initialValue;

	// Перебираем все элементы массива
	for (let i = 0; i < array.length; i++) {
		const current = array[i];

		// Обновляем аккумулятор, вызывая колбэк
		// callback получает:
		//   acc     - текущее накопленное значение
		//   current - текущий элемент массива
		//   i       - индекс
		//   array   - весь исходный массив
		acc = callback(acc, current, i, array);
	}

	// В конце возвращаем накопленное значение
	return acc;
}

// Проверка:
const numbers = [1, 2, 3, 4];

const sum = myReduce(
	numbers,
	function (acc, val) {
		return acc + val;
	},
	0
);

console.log(sum); // 10

// Примеры
const array = ['Spong', 'Patrick', 'Fase', 'Valeria'];

// сделать что-то
array.forEach(elem => {
	console.log(`Hello ${elem}`);
});

const arrayNew = array.map(elem => {
	return `Hello ${elem}!`;
});

console.log(array);
console.log(arrayNew);

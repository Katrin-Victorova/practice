// ✅ Задача 1: multiply() через arguments
// Требование: переменное число аргументов, вернуть произведение, использовать arguments.
function multiply() {
	// arguments — псевдомассив: {0:..., 1:..., length:...}
	let result = 1;

	// если аргументов 0 — обычно логично вернуть 1 (нейтральный элемент умножения)
	for (let i = 0; i < arguments.length; i++) {
		result *= arguments[i];
	}

	return result;
}

// проверки
console.log(multiply(2, 3, 4)); // 24
console.log(multiply(5)); // 5
console.log(multiply()); // 1

// ✅ Задача 2: concatStrings() через rest parameters
// Требование: принимает первое слово и сколько угодно остальных, вернуть строку из всех слов через пробел.
function concatStrings(firstWord, ...otherWords) {
	// firstWord — отдельный параметр
	// otherWords — массив "остальных" слов

	// собираем все слова в один массив
	const allWords = [firstWord, ...otherWords];

	// соединяем пробелом
	return allWords.join(' ');
}

// проверки
console.log(concatStrings('Hello', 'world')); // "Hello world"
console.log(concatStrings('Я', 'учу', 'JS')); // "Я учу JS"
console.log(concatStrings('Один')); // "Один"

// ✅ Задача 3: combineArrays() через spread
// Требование: принять два массива и вернуть новый, содержащий элементы обоих. Использовать spread.
function combineArrays(arr1, arr2) {
	// spread в массиве "разворачивает" элементы
	return [...arr1, ...arr2];
}

// проверки
console.log(combineArrays([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(combineArrays([], [5])); // [5]

// ✅ Задача 4: copyObject() — копия объекта + новый ключ через spread
// Требование: принять объект, вернуть его копию + добавить новый ключ и значение. Использовать spread.
// Сделаем универсально: передадим ещё newKey и newValue.
function copyObject(obj, newKey, newValue) {
	// создаём новый объект-копию и добавляем/перезаписываем поле newKey
	return {
		...obj,
		[newKey]: newValue, // computed property name
	};
}

// проверки
const user = { name: 'Kate', age: 20 };

const updated = copyObject(user, 'city', 'Moscow');
console.log(updated); // { name: 'Kate', age: 20, city: 'Moscow' }

// исходный объект не изменился
console.log(user); // { name: 'Kate', age: 20 }

// rest  (...)  — собирает в массив (в параметрах функции)
// spread(...)  — разворачивает (в вызове / массивах / объектах)
// arguments    — старый псевдомассив (только в обычных функциях)

// 1 конвертация числа в разные системы счисления
function convertNumberSystems(num) {
	return {
		binary: num.toString(2),
		octal: num.toString(8),
		hex: num.toString(16),
	};
}
console.log(convertNumberSystems(255));
// { binary: '11111111', octal: '377', hex: 'ff' }

// 2. Использование методов Math
// Напишите функцию, которая генерирует случайное число от 1 до 1000 и округляет его до ближайшего целого числа, до двух знаков после запятой или до ближайшего большего целого числа, в зависимости от параметра.
function generateAndRoundNumber(rounding) {
	// 1. Генерируем случайное число от 1 до 1000
	const random = Math.random() * (1000 - 1) + 1;

	if (rounding === 'int') {
		return Math.round(random);
	} else if (rounding === 'fixed2') {
		return Number(random.toFixed(2));
	} else if (rounding === 'ceil') {
		return Math.ceil(random);
	} else {
		return random;
	}
}
console.log(generateAndRoundNumber('int')); // Например: 842
console.log(generateAndRoundNumber('fixed2')); // Например: 319.51
console.log(generateAndRoundNumber('ceil')); // Например: 154
console.log(generateAndRoundNumber()); // Например: 748.82115442

// 3. Проверка на конечность и NaN
// Напишите функцию, которая принимает значение и возвращает true
// — если аргумент NaN или Infinity, и false — если нет.
function filterFiniteNumbers(value) {
	// Если строго NaN или не строгое число (не finite) — возвращаем true
	// return Number.isNaN(value) || !Number.isFinite(value);
	return Number.isNaN(value) || value === Infinity || value === -Infinity;
}

console.log(filterFiniteNumbers(42)); // false
console.log(filterFiniteNumbers(NaN)); // true
console.log(filterFiniteNumbers(Infinity)); // true
console.log(filterFiniteNumbers(-Infinity)); // true
console.log(filterFiniteNumbers('abc')); // false! (потому что 'abc' — не число)

/*
 * Number.isNaN и Number.isFinite — строго для чисел.
 * isNaN и isFinite — могут ловить ошибки преобразования типов.
 */

/*
 Если по-настоящему строго по формулировке задачи (ловим ТОЛЬКО NaN и Infinity, 
 НО не строки и не объекты): Делаем явную проверку!
 */
function filterFiniteNumbers(value) {
	return value === NaN || value === Infinity || value === -Infinity;
}
// value === NaN всегда false (NaN не равен сам себе!)
// Поэтому для NaN используют Number.isNaN(value)

// 4. Использование parseInt и parseFloat
// Напишите функцию, которая принимает строку, содержащую число,
// и возвращает это число.Должно работать как с integer, так и с float.
function parseNumbers(str) {
	return parseFloat(str);
}

console.log(parseNumbers('123.456px')); // 123.456
console.log(parseNumbers('200px')); // 200
console.log(parseNumbers('12.34abc')); // 12.34
console.log(parseNumbers('abc123')); // NaN

// 5. Проверка точности вычислений
// Напишите функцию, которая складывает два числа с плавающей точкой,
// но гарантирует правильную точность(без типичных ошибок с плавающей точкой).
function addFloats(a, b) {
	return Number((a + b).toFixed(1));
}
console.log(addFloats(0.1, 0.2)); // 0.3

// 6. Округление числа до указанного количества знаков
// Напишите функцию, которая округляет число до указанного количества знаков после запятой.
function roundToDecimals(num, decimals) {
	return Number(num.toFixed(decimals));
}
console.log(roundToDecimals(123.456789, 3)); // 123.457

// 7. Использование Math.max и Math.min
// Напишите функцию, которая принимает ряд чисел и возвращает
// максимальное и минимальное значение из него.
function findMax(num1, num2, num3) {
	return Math.max(num1, num2, num3);
}
function findMin(num1, num2, num3) {
	return Math.min(num1, num2, num3);
}
console.log(findMax(1, 2, 3));
console.log(findMin(1, 2, 3));

// можно улучшить чтобы функция работала с любым количеством чисел
function findMaxElse(...nums) {
	// ...nums — функция принимает любое количество аргументов и превращает их в массив.
	return Math.max(...nums); // Math.max(...nums) — разворачиваем массив в список чисел.
}

// 8. Проверка целого числа
// Напишите функцию, которая проверяет, является ли число целым,
// и возвращает соответствующее сообщение.
function checkIfInteger(num) {
	return Number.isInteger(num)
		? `${num} is an integer`
		: `${num} is not an integer`;
}
console.log(checkIfInteger(5)); // "5 is an integer"
console.log(checkIfInteger(5.1)); // "5.1 is not an integer"

// 9. Сравнение двух чисел с плавающей точкой
// Напишите функцию, которая сравнивает два числа с плавающей точкой
// с заданной точностью(например, до 5 - го знака после запятой).
function areFloatsEqual(a, b, precision = 5) {
	const epsilon = Math.pow(10, -precision);
	return Math.abs(a - b) < epsilon;
}
console.log(areFloatsEqual(0.1 + 0.2, 0.3)); // true
console.log(areFloatsEqual(0.123456, 0.123457, 5)); // true
console.log(areFloatsEqual(0.1234, 0.1235, 4)); // false
/*
    1 Находим разницу между числами:
    Math.abs(a - b)
    2 Сравниваем эту разницу с очень маленьким числом (называют "эпсилон" — epsilon):
    Например, для 5 знаков после запятой: 0.00001
    Как связать "точность" (5 знаков) с числом?
    const epsilon = Math.pow(10, -precision);
    Для 5: Math.pow(10, -5) = 0.00001
 */

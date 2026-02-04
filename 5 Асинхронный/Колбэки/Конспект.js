// Колбэк (callback) — это функция, которая передаётся другой функции в качестве аргумента и вызывается внутри этой функции после завершения определённого действия.

// Колбэки помогают организовывать выполнение кода последовательно, особенно когда нужно подождать результат работы какой-либо функции, прежде чем продолжить.

// Сначала рассмотрим синхронные колбэки — когда функция вызывает колбэк сразу, в той же последовательности выполнения кода.
function calculate(a, b, callback) {
	return callback(a, b);
}

function sum(x, y) {
	return x + y;
}

function multiply(x, y) {
	return x * y;
}

console.log(calculate(2, 3, sum)); // 5
console.log(calculate(2, 3, multiply)); // 6

// Многие встроенные методы массивов используют колбэки.
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
	return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]

// Когда колбэк используется для обработки действий, которые занимают время (например, запросы к серверу, таймеры), он становится асинхронным.
console.log('Start');

setTimeout(function () {
	console.log('Delayed message');
}, 2000); // асинхронные колбэки не блокируют выполнение основного кода.

console.log('End');

// Чтение данных (имитация запроса)
function fetchData(callback) {
	setTimeout(() => {
		// Функция fetchData имитирует задержку с помощью setTimeout
		const data = { id: 1, name: 'John' };
		callback(data); // Колбэк вызывается после завершения "запроса".
	}, 1500);
}

console.log('Request sent');
fetchData(function (response) {
	console.log('Received data:', response);
});
console.log('Other code continues');
// В это время основной код продолжает работу.

// Колбэк в обработчике событий
const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

button.addEventListener('click', function () {
	console.log('Button was clicked');
});

// Несколько асинхронных колбэков
setTimeout(() => console.log('First'), 1000);
setTimeout(() => console.log('Second'), 500);
setTimeout(() => console.log('Third'), 1500);
// Порядок вызова зависит от времени ожидания, а не от порядка написания кода.

// Частые ошибки при работе с колбэками:
// Забыли вызвать колбэк внутри функции.
// Синхронные ожидания в асинхронных колбэках, блокирующие стек.
// Неправильный контекст this внутри колбэка.
// Callback hell — слишком глубокая вложенность колбэков, затрудняющая чтение кода.

// классический асинхронный колбэк
function load(cb) {
	console.log('Loading...');

	setTimeout(() => {
		cb();
	}, 1000);
}

load(() => {
	console.log('Done');
});

console.log('Continue');

// Это НЕ асинхронность, НЕ колбэки “потом”, НЕ очереди. Это обычный синхронный код.
const nums = [1, 2];

nums
	.map(n => {
		// полностью проходит массив
		console.log('A', n); // возвращает НОВЫЙ массив
		return n;
	})
	.map(n => {
		// и ТОЛЬКО ПОТОМ вызывается следующий .map
		console.log('B', n);
	});

// беру 1 → вызываю callback → печатаю "A 1" → кладу 1 в новый массив
// беру 2 → вызываю callback → печатаю "A 2" → кладу 2 в новый массив

// nums = [1, 2]

// ┌──────── first map ────────┐
// │ A 1                       │
// │ A 2                       │
// └──────── returns [1,2] ────┘
//                ↓
// ┌──────── second map ───────┐
// │ B 1                       │
// │ B 2                       │
// └───────────────────────────┘

//
function fetch(cb) {
	setTimeout(() => {
		cb('Data');
	}, 500);
}

console.log('Send');

fetch(data => {
	console.log(data);
});

console.log('Wait');

// Send
// Wait
// Data   // через ~500 мс

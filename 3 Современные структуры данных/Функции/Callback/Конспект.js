/*
Callback — это как записка:
“Когда закончишь — позвони мне!”
 */

/**
 * Где применяются callbacks:
Реакция на действия пользователя (клики, скроллы)
Асинхронные операции (загрузка, ожидание)
Работа с массивами
Таймеры
Свои функции с “уведомлением” о завершении
 */

// 1. Callback в обработчиках событий | Представь, что есть кнопка на странице
const button = document.querySelector('button');

button.addEventListener('click', function () {
	alert('Ты нажала на кнопку!');
});

// 2. Callback при запросах к серверу
fetch('https://api.example.com/data')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		// Функции в then — это callbacks
		console.log('Данные с сервера:', data);
	});

// 3. Перебор массивов — методы map, forEach, filter
const girls = ['Маша', 'Даша', 'Катя'];

girls.forEach(function (name) {
	// Callback — функция внутри forEach.
	console.log('Привет, ' + name + '!');
});

// 4. Callback в своих функциях
function cookCake(onReady) {
	console.log('Торт в духовке...');
	setTimeout(function () {
		onReady();
	}, 3000);
}

cookCake(function () {
	// через 3сек сработает
	console.log('Торт готов, иди пить чай!');
});

// Вывод в консоль стоимость товара с скидкой, по определенной формуле
let discount = function (price) {
	return price - 200;
};

let discount2 = function (price) {
	if (price > 500) {
		return price - 250;
	}
	return price - 200;
};

function printPrice(price, fn) {
	console.log(`Стоимость товара: ${fn(price)}`);
}

printPrice(600, discount); // Стоимость товара: 400
printPrice(600, discount2); // Стоимость товара: 350

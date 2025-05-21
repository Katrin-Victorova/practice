// 1. Повторное использование кода
// Если логика выполняется более одного раза — выносите ее в функцию.
function formatPrice(price) {
	return `$${price.toFixed(2)}`;
}
console.log(formatPrice(99)); // $99.00

// 2. Инкапсуляция сложной логики
// Разбивайте код на функции, чтобы сделать его читаемым.
function calculateTax(income) {
	const base = income * 0.1;
	return base > 1000 ? base * 1.2 : base;
}

// 3. Обработка событий
// Колбэки для кликов, таймеров, запросов к серверу.
button.addEventListener('click', () => {
	console.log('Кнопка нажата!');
});

// 4. Функциональное программирование
// Используйте функции высшего порядка (map, filter, reduce).
const doubled = [1, 2, 3].map(num => num * 2); // [2, 4, 6]

// 5. Создание методов объектов
// Функции как свойства объектов.
const user = {
	name: 'Alex',
	greet() {
		console.log(`Привет, ${this.name}!`);
	},
};

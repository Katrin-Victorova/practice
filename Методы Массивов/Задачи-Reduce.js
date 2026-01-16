// Reduce
const totalPrice = products.reduce((acc, product, i, arr) => {
	return acc + product.price;
}, 0);

console.log(totalPrice);

// reduce — это for под капотом, а не магия
Array.prototype.myReduce = function (fn, acc) {
	for (let i = 0; i < this.length; i++) {
		acc = fn(acc, this[i], i, this);
		// Тут происходит вся магия reduce:
		// передаём:
		// acc — аккумулятор
		// this[i] — текущий элемент
		// i — индекс
		// this — массив
		// результат функции → новый acc
	}

	return acc;
};

const mytotalPrice = products.myReduce((acc, product, i, arr) => {
	// console.log(acc);
	return acc + product.price;
}, 0);

console.log(mytotalPrice);

// задача 1
const numbers = [2, 3, 11, 15, 20, 3, 5, 8, 10, 16, 2, 11, 14, 15, 18];

// посчитать среднее значение всех элементов массива
const getAverage = numbers => {
	const total = numbers.reduce((total, number) => {
		return total + number;
	}, 0);
	return total / numbers.length;
};

console.log(getAverage(numbers));

// задача 2
const users = [
	{
		username: 'lando12',
		jedi: false,
	},
	{
		username: 'kvaigon99',
		jedi: true,
	},
	{
		username: 'anakin skywalker',
		jedi: false, // DARK SIDE ISN'T JEDI WAY!!!
	},
	{
		username: 'littlegreenpug',
		jedi: true,
	},
	{
		username: 'ray',
		jedi: true,
	},
	{
		username: 'padmebestqueenever',
		jedi: false,
	},
];

// посчитать количество jedi в массиве users
const countJedi = users => {
	return users.reduce((count, user) => {
		// reduce позволяет сделать за один проход с точки зрения производительности
		if (user.jedi) {
			count++;
		}
		return count;
	}, 0);
};

console.log(countJedi(users));

// массив из тех кто являеться jedi - имена
const getArrayOnlyJedi = users => {
	return users.reduce((names, user) => {
		if (user.jedi) {
			names.push(user.username);
		}
		return names;
	}, []);
};

console.log(getArrayOnlyJedi(users));

// одномерный массив
const data = [
	[1, 2, 3],
	[3, 4, 5],
	[6, 7, 8],
];

const flat = data.reduce((prev, item) => {
	return prev.concat(item);
}, []);

console.log(flat);

// Function context, this, bind, call, apply
// call — вызывает функцию СРАЗУ, явно указывая this
function sayHi() {
	console.log(this.name);
}

const user = { name: 'Kate' };

sayHi.call(user); // Kate
// С аргументами
function sayHi(age) {
	console.log(this.name, age);
}

sayHi.call(user, 25); // Kate 25

// apply — то же самое, что call, НО аргументы передаются массивом
function sayHi(age, city) {
	console.log(this.name, age, city);
}

sayHi.apply(user, [25, 'Berlin']);
// call  → аргументы через запятую
// apply → аргументы массивом

// bind — НЕ вызывает функцию, а возвращает новую функцию с привязанным this
function sayHi() {
	console.log(this.name);
}

const user2 = { name: 'Kate' };

const boundFn = sayHi.bind(user); // bind = «запомни this навсегда»

boundFn(); // Kate

// Частый кейс — колбэки ❌ Потеря this
const user3 = {
	name: 'Kate',
	sayHi() {
		setTimeout(function () {
			console.log(this.name);
		}, 1000);
		// ✅ Решение через bind
		// setTimeout(function () {
		// 		console.log(this.name);
		// 	}.bind(this),1000);
	},
};

user.sayHi(); // undefined

// ⚠️ Стрелка НЕ имеет своего this
const user4 = {
	name: 'Kate',
	sayHi() {
		setTimeout(() => {
			// 📌 Стрелки нельзя перевязать через call/apply/bind
			console.log(this.name); // this === user
		}, 1000);
	},
};

user.sayHi(); // Kate

// Лущенко Алекс
// контекст = область видимости + переменная this
// this - ссылка на обьект, который вызывает код в данный момент
let count = 0;
function f1() {
	console.log(count);
	console.log(this);
	this.textContent = count;
	count++;
}

f1();

docement.querySelector('.b-1').addEventListener('click', f1);

// arrow не имеют this
const f2 = () => {
	console.log(count);
	console.log(this);
	this.textContent = count; // !!!!!!!!
	count++;
};

f2();

docement.querySelector('.b-2').addEventListener('click', f2);

//
let printValue = x => {
	return x * 2;
};

// декоратор
const cachingDecoration = func => {
	let cache = new Map();

	return function (x) {
		if (cache.has(x)) {
			console.log('Я беру из кеша');
			return cache.get(x);
		}

		let result = func(x);
		cache.set(x, result);

		console.log('Я беру не из кеша');

		return result;
	};
};

printValue = cachingDecoration(printValue);

console.log(printValue(2)); // Я беру не из кеша
console.log(printValue(2)); // Я беру из кеша

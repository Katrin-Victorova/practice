// // Сравнение переменных
console.log(x);
var x = 5;
// // undefuned

// // Что выведет?
const calc = () => {
	return 2 + 2;
};
// console.log(typeof null) // object
// console.log(typeof calc) // function
// console.log(calc instanceof Object); // true (функция — объект)

let a = 1;
// console.log(a++) // 1
// console.log(++a) // 3
// console.log(a) // 3

let i = 0;

while (i < 3) {
	console.log(i);
	i++;
} // 0, 1, 2

let arr7 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr7.length; i++) {
	if (arr7[i] === 3) {
		break;
	}
	console.log(arr7[i]);
} // 1, 2

let iq = 0;
while (true) {
	iq++;
	if (iq === 10) {
		break;
	}
}

console.log(iq); // 10

let arr1 = [10, 20, 30];
for (let i in arr1) {
	console.log(i);
} // ключи переберает индекст в массиве 0 1 2
for (let value of arr1) {
	console.log(value);
} // значения перебираем 10 20 30

const sentence = 'Hello, world! This is a sentence.';
const worlds = sentence.split(' ', 3);
console.log(worlds); // мы разделяем на массив слов (пробелы)
// [ 'Hello,', 'world!', 'This' ]

// Сначала преобразует значение в число, затем проверяет, является ли результат NaN.
console.log(isNaN(NaN)); // true
console.log(isNaN(123)); // false
console.log(isNaN('123')); // false
console.log(isNaN('abc')); // true

// Не преобразует значение.
// Проверяет, является ли переданный аргумент точно NaN и имеет тип number.
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN('123')); // false
console.log(Number.isNaN('abc')); // false строка (string), а не number.

let user = { name: 'John', age: 30 };
let clone = user; // поверхностное копирование
clone.name = 'Pete';
console.log(user.name); // измениться по ссылке Pete

let obj = {
	name: 'Alice',
	sayHi() {
		console.log(this.name);
	},
};

let fn = obj.sayHi; // скопировали функциию без контекста
fn(); // undefined

let users3 = {
	name: 'John',
	age: 30,
	sayHi() {
		console.log(this.name);
	},
};

let admin = users3;
users3 = null;
admin.sayHi(); // 'John'

const personArr = {
	name: 'Bob',
	greet: () => {
		console.log(`Hello, ${this.name}!`);
	},
};

personArr.greet(); // нет своего this у стрелочной =>

const personSet = {
	name: 'Lily',
	greet: function () {
		setTimeout(() => {
			console.log(`Hello, ${this.name}!`);
		}, 1000);
	},
};

personSet.greet(); // Hello, Lily!

const obg46 = {
	name: 'John',
	printName() {
		console.log(this.name);
	},
	delayedPrintName() {
		// setTimeout(this.printName, 1000) // undefined
		// setTimeout(this.printName.bind(this), 1000) // John
		// setTimeout(() => this.printName(), 1000) // John
	},
};

obg46.delayedPrintName(); // undefined

let obj2 = { a: 1, b: undefined };

console.log('b' in obj2); // ?\есть ли в обьекте 2 ? true
console.log(obj2.c !== undefined); // такого не "c" не существует false

// freeze - "замораживает" объект, делая его неизменяемым
// Поверхностная заморозка: вложенные объекты не затрагиваются.
// Возвращает исходный объект (не копию).
const obj66 = { a: 1, b: { c: 2 } };
Object.freeze(obj66);
obj66.a = 100; // Игнорируется (ошибка в strict mode)
obj66.b.c = 200; // Работает (вложенный объект не заморожен)

const obj1 = { a: 1, b: 2 };
Object.freeze(obj1);
obj1.a = 3;

console.log(obj1.a); // 1

// вывести все ключи обьекта в массиве (массив ключей)
const user1 = {
	name: 'Alise',
	age: 25,
	job: 'Developer',
};

for (let value of Object.keys(user1)) {
	console.log(value);
}

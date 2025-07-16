// Специальное ключевое слово в JS которое ссылаеться на объект, в контексте которого был вызван текущих код. По сути, это способ доступа к текущему объекту изнутри его методов или функции.

// Non-strict mode
console.log(this); // Выведет {}
// В Node.js в глобальной области видимости this ссылается на пустой объект, а не на глобальный объект global.

// 'use strict';
console.log(this); // Выведет undefined
// В строгом режиме в глобальной области видимости this будет undefined.

// в браузере так же но там - window

// Стрелочные функции не имеют собственного значения this. Вместо этого они наследуют this из своего окружения, то есть из контекста, в котором они были созданы.

// Non-strict mode
const arrowFunction = () => {
	console.log(this);
};
arrowFunction(); // Выведет глобальный объект Node.js (в Node.js — global)

// 'use strict';
const arrowFunctionStrict = () => {
	console.log(this);
};
arrowFunctionStrict(); // В строгом режиме в глобальной области видимости this будет undefined.

/**
 * Обычная function(), у неё действительно есть специальное скрытое свойство — это контекст this.
 * Но! this — это не явный параметр (его нет в списке параметров!), а внутренний механизм.
 */

/**
 * Твоя мини-шпаргалка:
	func.call(obj, ...args) — вызывает функцию и делает this === obj внутри неё.
	func.apply(obj, [args]) — то же самое, но аргументы в массиве.
	func.bind(obj) — возвращает новую функцию, у которой всегда this === obj.
 */
function sayHi() {
	console.log(this);
}
sayHi(); // this зависит от режима и контекста (window, undefined...)

sayHi.call({ name: 'Anna' }); // this внутри функции будет { name: 'Anna' }
// Ты говоришь: “Выполни функцию, но сделай так, чтобы внутри неё this был равен вот этому объекту!”

function sayHi(greeting, smile) {
	console.log(greeting, this.name, smile);
}

sayHi.call({ name: 'Anna' }, 'Hello', '😊');

/**
 * apply - Точно так же подменяет this и вызывает функцию сразу,
 * НО аргументы принимает массивом!
 */
sayHi.apply({ name: 'Anna' }, ['Hi', '🥳']);
// Выведет: Hi Anna 🥳

/**
 * bind - НЕ вызывает функцию сразу!
 * Возвращает НОВУЮ функцию, у которой this всегда будет тот, что ты указала.
 */
const boundHi = sayHi.bind({ name: 'Anna' }, 'Hey', '💫');
boundHi(); // Выведет: Hey Anna 💫 // Можно сохранить функцию и вызывать когда угодно.

// ВЫЗОВ С NEW

/**
		1. Что происходит при вызове функции с new?
		Когда ты пишешь new RegularFunctionNode(), JavaScript:
		Создаёт новый пустой объект.
		Вызывает функцию, где внутри this указывает на этот новый объект.
		Если нет явного return объекта, возвращает этот новый объект.

		2. Что будет внутри функции?
		Внутри конструктора (функции с new) this — это тот самый новый объект.
		Любые свойства, которые ты запишешь через this.something = ..., будут на новом объекте.
 */
function RegularFunctionNode() {
	this.name = 'Default';
	console.log(this);
}
const instance3 = new RegularFunctionNode();
console.log(instance3);

/**
		3. Зачем это нужно?
		* Так работают "классы" в JS до появления class-синтаксиса.
		* Это основа создания новых объектов по шаблону (например, new User(), new Car()).

		4. Кратко в одну фразу:
		Вызов функции с new всегда создаёт новый объект, 
		а this внутри такой функции указывает на этот новый объект.
 */

// Dot-notation / Точечная нотация
// this в dot-нотации — это всегда объект слева от точки!
const user = {
	name: 'Катя',
	sayHi: function () {
		console.log(this);
	},
};
user.sayHi(); // this === user

// Dot-notation - Вызов через точку — this внутри метода указывает на объект слева от точки (cat).
const cat = {
	name: 'Мурка',
	sayHi: function () {
		console.log('Привет, я', this.name);
	},
};

cat.sayHi(); // Привет, я Мурка
// this === cat

// Без dot-нотации - Вызов функции как есть, без объекта слева — this не связан ни с каким объектом.
function whoAmI() {
	console.log(this);
}

whoAmI(); // В strict mode: undefined. В не strict: window (или global в Node)

//  Оторвали метод от объекта
const dog = {
	name: 'Бобик',
	bark() {
		console.log(this.name);
	},
};

const barkFn = dog.bark; // Копируем ссылку на функцию
barkFn(); // undefined (strict) или window (не strict)

// Передача метода как колбэк
const rabbit = {
	name: 'Кролик',
	jump() {
		console.log(this.name);
	},
};

setTimeout(rabbit.jump, 1000); // undefined (strict) или window (не strict)
// В setTimeout функция вызвана без объекта слева от точки, контекст потерян.

setTimeout(rabbit.jump.bind(rabbit), 1000); // через 1 сек. выведет "Кролик"
// rabbit.jump.bind(rabbit) — создаёт функцию, где this всегда будет равен rabbit.

setTimeout(() => rabbit.jump(), 1000); // Тут мы явно вызываем rabbit.jump() с нужным контекстом.
// Стрелочная функция не имеет своего this и "захватит" внешний контекст.

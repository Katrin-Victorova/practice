//  Лайвкодинг - this --- Что слева от точки — то и есть this!

// 1 --- Стрелка на одном уровне с name
const person = {
	name: 'Alice',
	// greet — стрелочная функция на верхнем уровне объекта!
	greet: () => {
		// this тут НЕ ссылается на person!
		// this взят из глобального окружения
		console.log(this.name); // <-- undefined
	},
};

person.greet(); // undefined
// Потому что this внутри стрелки — не объект person!

/**
    Стрелочная функция greet НЕ создаёт свой this, а берёт его из внешнего окружения 
    (обычно это глобальный объект или undefined).
    Внутри объекта стрелка НЕ захватывает person как контекст.
 */

// 2 --- Стрелка внутри метода (на уровень ниже !):
const personUp = {
	name: 'Alice',
	greet() {
		// this тут — это объект person!
		// Объявляем стрелку ВНУТРИ обычного метода
		const innerArrow = () => {
			// Стрелка замыкает (запоминает) this из метода greet
			// Теперь this тут = this из greet, а значит = person
			console.log(this.name); // <-- 'Alice'
		};
		innerArrow();
	},
};

personUp.greet(); // Alice
// Здесь this внутри стрелки = объект person, потому что стрелка замкнула его из greet

/**
    Обычный метод greet получает this как объект person (через вызов person.greet()).
    Стрелочная функция innerArrow замыкает this метода greet, то есть видит тот же контекст!
    Именно так стрелки обычно используют внутри методов — чтобы не терять контекст!
 */

// как работает bind, если делать bind несколько раз
const userBind = {
	name: 'Bob',
	sayHi() {
		console.log(this.name);
	},
	sayHiArrow: () => {
		console.log(this.name);
	},
};

// --- "Оторвали" методы от объекта:
const hi = userBind.sayHi;
const sayHiArrow = userBind.sayHiArrow;

// --- bind — привязываем this к user:
const hiBinded = userBind.sayHi.bind(userBind);

// --- Второй bind! Пробуем поменять this на { name: 'Peter' }
const hiBindedSecond = hiBinded.sayHi.bind({ name: 'Peter' }); // у hiBinded нет свойства sayHi!
// будет ОШИБКА уже при выполнении строки

// --- Вызовы:
hiBinded(); // { name: 'Bob' }
hiBindedSecond(); // TypeError

/*
    ВАЖНО! hiBinded — это уже НЕ объект с методом, а обычная функция.
    hiBinded.sayHi — undefined (у функции нет свойства sayHi!)
    Попытка сделать hiBinded.sayHi.bind(...) приведёт к ошибке:
    TypeError: Cannot read properties of undefined (reading 'bind')
 */

// bind фиксирует this НАВСЕГДА (после bind второй раз bind не сработает)

const obj = {
	name: 'Tom',
	say() {
		function inner() {
			// this тут не obj, а window или undefined
			console.log(this.name); // undefined
		}
		const innerArrow = () => {
			// this тут "украден" у obj.say, то есть obj
			console.log(this.name); // 'Tom'
		};
		inner(); // undefined ! Мы вызываем её просто как inner(), не как obj.inner() !!!
		innerArrow(); // Tom
	},
};

obj.say(); // Tom

var o = {
	name: 'Petr',
	f: function () {
		// --- Здесь this ссылается на объект o, если вызов через o.f()
		const arrf = () => {
			// --- arrf ЗАМЫКАЕТ (запоминает) значение this из f
			// --- То есть arrf всегда вернёт то, чему равен this в f
			return this;
		};
		console.log(arrf()); // Выведет объект o (если вызвали через o.f()), иначе undefined
	},
};
// --- Копируем функцию в переменную
const func = o.f;
// --- Вызов через переменную (контекст потерян)
console.log(func()); // Здесь this внутри f будет undefined (strict mode) или window (без строгого режима)
o.f(); // Покажет объект o

// строгий режим 'use string' чтобы не показывать глобальный объект
function f() {
	console.log(this);
}
f();
// что выведет? undefaned

(function () {
	console.log(this === window);
})();
// false если с 'use string' true - window

// Каким будет вывод этого фрагмента кода?
function fun() {
	this.x = 5;
	console.log(this); // {x: 5}
}
var o = new fw();
console.log(o.x); // 5

var oa = {
	fen: function () {
		return this;
	},
};
console.log(o.fen()); // { fen: [Function: fen] }
// ссылаемся на наш обьект, this ссылаеться на обьект в котором эта функция есть

function func() {
	console.log(this);
}
func.call(window); // window
func.call(func); // [Function: func]
// call метод для привязки контекста

function cale() {
	console.log(this.toString());
}
cale.call(123); // 123 строка

function userF() {
	console.log(this);
}

let user = {
	g: userF.bind(null),
};

user.g(); // null

// внутри setTimeout this — undefined.
// Потому что setTimeout вызывает функцию не как метод объекта, а “самостоятельно”, где this — глобальный объект (window в браузере, global в Node.js) или undefined в strict mode.

const userSet = {
	name: 'Kate',

	sayLater() {
		// this === user
		// setTimeout вызывает обычную функцию (function() {})
		setTimeout(function () {
			// Внутри обычная функция function() теряет связь с объектом user.
			// Здесь this - это window (или undefined в strict mode),
			// а не userSet! Поэтому this.name === undefined
			console.log(this.name); // undefined
		}, 1000);
	},

	// Как правильно делать: обычно используют стрелочные функции (они “захватывают” внешний this):
	//   sayLater() {
	//   setTimeout(() => {
	//     console.log(this.name); // "Kate"
	//   }, 1000);
	// }

	//  sayLater() {
	//   const self = this; // Или сохраняют this в переменную
	//   setTimeout(function() {
	//     console.log(self.name); // "Kate"
	//   }, 1000);
	// }

	sayLaterArrow: () => {
		// Стрелочная функция userSet.sayLaterArrow, у неё нет своего this.
		// this берётся из внешнего контекста (глобальный scope или undefined в strict mode).
		setTimeout(() => {
			// Здесь this также глобальный, не userSet.
			console.log(this.name); // undefined
		});
	},
};

userSet.sayLater(); // через 1 секунду выведет: undefined
userSet.sayLaterArrow(); // сразу выведет: undefined

// -- задача
const userSetThis = {
	name: 'Kate',
	cbArrow: () => {
		// cbArrow - это стрелочная функция, у неё НЕТ своего this!
		// this возьмется из глобального контекста (window или undefined в strict mode)
		console.log(this.name);
	},
	sayLater() {
		// sayLater - обычный метод объекта, this внутри этого метода === userSetThis
		setTimeout(userSetThis.cbArrow, 0);
		// cbArrow - стрелка, вызовется с контекстом window/undefined
	},
	sayLaterArrow: () => {
		// sayLaterArrow - сама стрелочная функция! this = window (или undefined)
		setTimeout(userSetThis.cbArrow, 0);
		// cbArrow тоже стрелка, this всё равно window/undefined
	},
};

userSetThis.sayLater(); // undefined
userSetThis.sayLaterArrow(); // undefined

// Что выведет?
const btn = document.getElementById('btn');

// 1. Обычная function в обработчике
btn.addEventListener('click', function () {
	console.log(this); // 👉 здесь this — это сам элемент button!
});

// 2. Стрелочная функция в обработчике
btn.addEventListener('click', () => {
	console.log(this); // 👉 здесь this — это window (или undefined в strict)
});

// -- задача с class
// Создаём класс Animal
class Animal {
	// Конструктор: сюда попадает имя, когда создаём Animal через new
	constructor(name) {
		// constructor — работает только при создании через new Animal(...).
		this.name = name; // this указывает на новый объект Animal
	}

	// Стрелочная функция! В классах она создаётся для каждого экземпляра,
	// и берёт this из экземпляра (то есть dog в нашем случае)
	speakArrow = () => {
		// this.name — будет равно 'Dog', если вызвали на dog
		console.log(`${this.name} makes a sound. (стрелочная)`); // Подсказка!
	};

	// Обычный метод класса
	speak() {
		// this.name — будет равно 'Dog', если вызвали на dog
		console.log(`${this.name} makes a sound. (обычный)`); // Подсказка!
	}
}

// Создаём экземпляр класса Animal с именем Dog
const dog = new Animal('Dog');

// Вызываем обычный метод
dog.speak(); // Выведет: Dog makes a sound. (обычный)

// Вызываем стрелочный метод
dog.speakArrow(); // Выведет: Dog makes a sound. (стрелочная)

// При деструктуризации методов из объекта this теряет свой контекст!
const userDes = {
	name: 'Helen',
	sayName() {
		console.log(this.name); // this указывает на объект, к которому принадлежит метод
	},
};

// Деструктуризация: вытаскиваем функцию sayName в отдельную переменную
const { sayName } = userDes;

// Вызов функции отдельно от объекта
sayName(); // undefined

// undefined * 3 — это математическая операция, где одно из значений undefined,
// поэтому результат — NaN (Not-a-Number)
const calculator = {
	value: 10,

	// Обычный метод: this — это объект calculator
	double() {
		return this.value * 2; // здесь this === calculator
	},

	// Стрелочная функция: нет собственного this
	triple: () => this.value * 3, // здесь this не привязан к calculator!
};

console.log(calculator.double()); // 20
console.log(calculator.triple()); // NaN

// bind на стрелку — не работает
const objNotBind = { value: 42 };

const getValue = () => this.value;
// Стрелочная функция! this не привязывается к obj, а берётся из внешнего контекста (window или undefined)

const boundGetValue = getValue.bind(objNotBind);
// .bind(objNotBind) не работает для стрелочных функций!
// Стрелки игнорируют bind/call/apply — у них уже "жёстко" зашит внешний this.

console.log(boundGetValue()); // ?
// Результат: undefined

function show() {
	console.log(this); // #1 undefined
}

show(); // #2 undefined

const usera = {
	name: 'Peter',
	greet() {
		console.log(`Hi ${this.name}`); // #3 Hi Peter
		show(); // #4 undefined
	},
};

usera.greet(); // #5 Hi Peter and undefined

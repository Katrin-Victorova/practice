// Объект — это структура данных, которая
// хранит значения в формате ключ-значение.

const uuser = {
	name: 'Alice',
	age: 25,
	greet: function () {
		console.log('Hello!');
	},
};
// ​​greet​​​​ — метод объекта ​​​​user​​​​ (метод — это функция,
// которая является свойством объекта).

// Метод — это функция, которая выполняет действия от имени объекта.
// Стандартный способ обьявления метода:
const usser = {
	name: 'Alice',
	greet: function () {
		console.log(`Hello, my name is ${this.name}`);
	},
};

user.greet(); // Выведет: Hello, my name is Alice
// Здесь greet — это метод, который выводит приветствие.
// ​​​​this.name​​​​ указывает на свойство ​​​​name​​​​ объекта ​​​​user​​​​.
// Сокращённая запись (ES6):
const useer = {
	name: 'Alice',
	greet() {
		console.log('Hello!');
	},
};

//  Ключевое слово this играет важную роль в методах объектов,
// так как с его помощью можно обращаться к текущему экземпляру объекта.
const user = {
	name: 'Alice',
	greet() {
		console.log(`Hello, my name is ${this.name}`);
	},
	logThis: function () {
		console.log(this);
	},
};

user.greet(); // Выведет: Hello, my name is Alice
user.logThis();
//Выведет: {
//   "name": "Alice",
//   "greet": function () {console.log(`Hello, my name is ${this.name}`)},
//   "logThis": function () {console.log(this)}
// }

// ​​​​this.name​​​​ ссылается на ​​​​name​​​​ текущего объекта ​​​​user​​​​.
// ​​​​logThis ​​​​- метод который выводит this, те сам объект.
// ​​​​this​​​​ зависит от контекста вызова функции. В методах объектов
// ​​​​this​​​​ указывает на объект, в котором метод вызван.

const users = {
	name: 'Alice',
	age: 25,
	greet() {
		console.log(`Hello, my name is ${users.name}`);
	},
};

user.greet(); // Выведет: Hello, my name is Alice
const admin = Object.assign({}, users); //скопировали объект user
admin.name = 'Jho';
admin.greet();
// Hello, my name is Alice, метод в объкте admin
// все так же ссылается на user.name

// ​​​​this​​​​ можно использовать в любой функции, даже если это не метод объекта.
let useur = { name: 'John' };
let admin = { name: 'Admin' };

function sayHi() {
	alert(this.name);
}

// используем одну и ту же функцию в двух объектах
useur.f = sayHi;
admin.f = sayHi;

// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
useur.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f']();
// Admin (нет разницы между использованием точки или квадратных скобок
// для доступа к объекту)

// Правило простое: если вызывается obj.f(), то во время вызова f,
// this – это obj. Так что, в приведённом выше примере
// это либо user, либо admin.

// Стрелочные функции особенные: у них нет своего «собственного» this.
// Если мы ссылаемся на this внутри такой функции, то оно берётся
// из внешней «нормальной» функции.
let userUo = {
	firstName: 'Ilya',
	sayHi() {
		let arrow = () => alert(this.firstName);
		arrow();
	},
};

userUo.sayHi(); // Ilya
// Это особенность стрелочных функций. Она полезна, когда мы
// на самом деле не хотим иметь отдельное this,
// а скорее хотим взять его из внешнего контекста.

const userFerst = {
	name: 'Alice',
	greet() {
		console.log(`Hello, my name is ${this.name}`);
	},
	logThis: function () {
		console.log(this);
	},
};
userFerst.greet(); // Выведет: Hello, my name is Alice
userFerst.logThis(); // Выведет объект user целиком

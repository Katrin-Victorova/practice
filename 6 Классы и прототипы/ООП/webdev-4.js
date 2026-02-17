// Наследование с использованием классов. Super, конструктор.

class User {
	constructor(name) {
		//метод
		this.name = name;
	}
	sayHello() {
		console.log(this.name + ' Hello ');
		return this.name;
	}
}

const name = new User('Katrin');
console.log(name);
console.log(name.sayHello());

class Person extends User {
	constructor(name, email) {
		super(name); // позволяет обращаться к родителям
		this.email = email;
	}
	sayHello2() {
		super.sayHello();
	}
}

const maks = new Person('Maksim', 'li@mail.ru');
console.log(maks);
console.log(maks.sayHello2());

class User1 {
	// без конструктора
	sayHello() {
		console.log(this.name + ' Hello ');
		return this.name;
	}
}

const Ale = new User1();
console.log(Ale.sayHello());

class Person extends User1 {
	constructor(name) {
		super();
		this.name = name;
	}
}

const li = new Person('lu');
console.log(li);

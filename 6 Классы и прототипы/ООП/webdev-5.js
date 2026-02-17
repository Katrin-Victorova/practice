// Get, Set, приватные (#) и защищенные (_) свойства

class User {
	constructor() {
		// this._name = name // при код ревью, вызывать так нельзя, ошибка обращение напрямую
	}
	// setNameOnthisClass(name) {
	// 	this._name.trin().toLowerCase();
	// }

	#test = 'Hohoho'; // замкнуто внутри класса
	set name(name) {
		// мы получили контролируемый доступ к свойству
		console.log('Privat =' + this.#test); // внутри класса, при обращении, оно доступно
		this._name = name.trin().toLowerCase();
	}

	get name() {
		return this._name;
	}

	one() {
		console.log(this.#test);
	}
}

const student = new User('alex');
// student.setNameOnthisClass('Ivan'); // метод по которому можно присваивать метод
// student.get('Ivan');
console.log(student);
console.log(student.name);

class User2 extends User {}
const student2 = new User2();
console.log(student2.name('Katrin'));
console.log(student2.one());

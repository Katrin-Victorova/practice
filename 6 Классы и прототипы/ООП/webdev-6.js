// Статические методы и свойства
class User {
	constructor(name) {
		this.name = name;
	}

	static getRole() {
		// реализация
		return 'student';
	}
}

const person = new User('Hikita');
console.log(person);

// Alex(гость) -> перейти на форум
// role -> класс -> обьект -> object.getRole()
console.log(User.getRole('Alex@ex')); // нельзя без Static
console.log(person.getRole()); // можно когда нет Static

// класс = свойства + методы() + вспомогательные инструменты

class Student extends User {
	static test = false;
	constructor(name) {
		super();
	}
}

console.lof(Student.getRole('test'));
console.lof(Student.test); // false

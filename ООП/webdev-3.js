// Класс, обьект, конструктор, свойства и методы. This
// ab class - > class - > object

class User {
	constructor(username, password) {
		this.username = username;
		this.password = password;
	}
	validatePassword() {
		console.log('work parent pass');
		if (this.password.length > 6) {
			return true;
		} else {
			return false;
		}
	}
}

let a = 'Katrin';
let b = '222422';

const person = new User(a, b);
console.log(person);
console.log(person.username);
console.log(person.validatePassword());

// дочерний
class Student extends User {
	constructor(username, password, nickname) {
		super(username, password);
		this.nickname = nickname;
	}
	getStudentCourses() {
		return [1, 2];
	}
	// свой пароль, перезаписали
	validatePassword() {
		super.validatePassword(); // обращение к прототипу
		if (this.password.length > 10) {
			return true;
		} else {
			return false;
		}
	}
}

let firstStudent = new Student(a, b, 'Marvel');
console.log(firstStudent);
console.log(firstStudent.getStudentCourses());
console.log(firstStudent.validatePassword());

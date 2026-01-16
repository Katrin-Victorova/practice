// Понятие обьекта. Свойства и методы. Прототипное програмирование.Наследование.
let a = {
	text: 'Hello',
	color: 'red',
	bold: true,
	show: function () {
		console.log(this.fontSize);
	},
	// __proto__ = c // круговая зависимость - ошибка !!!
};

let b = {
	fontSize: '24px',
	__proto__: a,
};

let c = {
	fontFamily: 'Verdana',
	__proto__: b,
};

console.log(c);
console.log(c.bold); // цепочка наследования
console.log(c.hasOwnProperty('prop')); // false - отслеживать

b.show(); // 24px
a.show(); // undefined

let user = {
	login: '',
	password: '',
	validatePassword: function () {
		if (this.password > 6) {
			return true;
		} else {
			return false;
		}
	},
};

user.password = 'hello123';
console.log(user.validatePassword());

// наследование от user
let user_profile = {
	username: '',
	proto: '',
	age: 0,
	__proto__: user,
};

user_profile.age = 25;
user_profile.user.name = 'Piknik';
consoe.log(user_profile);

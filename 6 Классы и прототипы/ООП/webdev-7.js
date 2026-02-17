// this
console.log(this); // window or node

// document.querySelector('.b-1').onclick = function () {
// 	console.log(this);
// 	this.style.background = 'orange';
// };

document.querySelector('.b-1').addEventListener('click', f1);

function f1() {
	console.log(this); // получаеться при клике кнопка оранжевая
	this.style.background = 'orange';
}

let p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
	p[i].onclick = f1;
}

// class User классы мы пишем в отдельных файлах, в файле находиться только класс
class U2 {
	constructor(model) {
		this.model = model;
	}
	showThis() {
		// метод показать
		console.log(this);
	}
}
const boau = new U2('765');
console.log(boau);
boau.showThis(); // this указывает на сам обьект

class YellowsSubmarine extends U2 {
	constructor(model, color) {
		super(model);
		this.color = color;
	}
}

let b = new YellowsSubmarine(666, 'red');
console.log(b);

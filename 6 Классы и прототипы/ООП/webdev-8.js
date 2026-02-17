// Bind, Call, Apply
const b1 = document.querySelector('.b-1');

b1.onclick = test;

function test(color, num) {
	console.log(this);
	console.log(num);
	// this.style.background = 'red';
	this.style.background = color;
}

// test() !!!! Error!!!!
// Call()
// function.call(isContext, [arg1, arg2])

test.call(b1); // вызвал функцию - this = b1
b2.onclick = function () {
	test.call(b1, 'green', 555); // что для тебя будет this ? при нажатие на b2 меняеться цвет на b1
};

// Apply()
b2.onclick = function () {
	// функция обертка
	test.apply(b1, ['green', 555]); // агрументы в виде МАССИВА передаем !!!!
};

// Bind()
let a = test.bind(b1, 'red', 777); // экземпляр функции
let b = test.bind(b2, 'orange', 888);

b2.onclick = b;

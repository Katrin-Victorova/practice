// Навигация по элементам дерева, атрибуты async и defer

console.log('Элемент <body>:', document.body);

console.log('Родительский элемент над <body>:', document.body.parentElement);

console.log(
	'Соседний элемент перед <body>:',
	document.body.previousElementSibling,
);

console.log(
	'💡Соседний элемент после <body>:',
	document.body.nextElementSibling,
);

console.log('💡Дочерние элементы <body>:', document.body.children);

const bodyChildren = document.body.children;

console.log(bodyChildren);

// Создание нового элемента <button>
const newButtonElement = document.createElement('button');

// Добавление нового элемента <button> в <body> в конец
document.body.appendChild(newButtonElement);

console.log(bodyChildren);

const bodyChildrenArray = [...bodyChildren]; // или воспользоваться оператором Spred

bodyChildrenArray.forEach(element => {
	// мы можем предварительно превратить кол. в массив, через глобальный обьект Array
	console.log('Дочерний элемент <body>:', element);
});

const divElement = document.body.children[0];

console.log('Элемент <div>:', divElement);

console.log(
	'Первый дочерний элемент внутри <div>:',
	divElement.firstElementChild,
);

console.log(
	'Последний дочерний элемент внутри <div>:',
	divElement.lastElementChild,
);

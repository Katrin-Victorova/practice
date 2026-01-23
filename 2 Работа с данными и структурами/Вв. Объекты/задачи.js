// Задание 1: Создание объекта и доступ к его свойствам
// Создайте объект person с такими свойствами:
// age(число)
// lastName(строка)
// firstName(строка)
const person = {
	age: 29,
	lastName: 'Katrin',
	firstName: 'Vit',
};

console.log(person);

// Задание 2: Изменение и удаление свойств
// Создайте объект book с такими свойствами:
// year(число)
// author(строка)
// title(строка)
// Напишите код, чтобы:
// Удалить свойство author.
// Изменить год публикации на 2023.
// Проверить, что изменения были применены, и выведите объект book в консоль.
const book = {
	year: 22,
	author: 'Maks',
	title: 'Пиздатая цитата',
};

console.log(book);
delete book.author;
book.year = 2023;

console.log(book);

// Задание 3: Сравнение объектов
// Создайте два объекта obj1 и obj2 с одинаковыми свойствами и значениями.
// Сравните их с помощью операторов == и === и объясните результат.
// Измените один из объектов и повторите сравнение.

const obj1 = { name: 'Alice', age: 25 };
const obj2 = { name: 'Alice', age: 25 };

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

obj2.name = 'Bob';

console.log(obj1);
console.log(obj2);
console.log(obj1 == obj2); // false

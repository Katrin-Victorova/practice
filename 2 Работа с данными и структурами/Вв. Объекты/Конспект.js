// Введение в объекты, обращение к объектам, копирование.
// Если примитивные типы хранят одно значение, то объекты могут
// хранить коллекции данных в виде пар «ключ: значение».
// Ключами могут быть строки или символы, а значения —
// любые допустимые в JavaScript типы данных (строки, числа,
// массивы, функции, другие объекты и т.д.).

// Создать через Конструктор функции
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello my name is ${this.name}`);
  };
}
const person1 = new Person("Alice, 25");

// Создать через Классы
class Persone {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello my name is ${this.name}`);
  }
}
const person11 =  new Persone("Alice, 25");

// Конструктор объекта
let user = new Object();
user.name = "John";
user.age = 30;
console.log(user); // { name: "John", age: 30 }

// Создать через пустой Object.create(obg)

// Литерал объекта
// Самый распространённый способ создания объектов — это литеральная нотация:
let users = {
  name: "Katrin",
  age: 27,
};
console.log(users);

// Пример с несколькими типами данных:
let product = {
  title: "Laptop",
  price: 1200,
  isAvailable: true,
  features: ["16GB RAM", "512GB SSD"],
};

console.log(product);
// {
//   title: "Laptop",
//   price: 1200,
//   isAvailable: true,
//   features: ["16GB RAM", "512GB SSD"]
// }

//  Доступ к свойствам через точку
let user = { name: "John", age: 30 };
console.log(user.name); // "John"
console.log(user.age); // 30

// Через квадратные скобки Этот способ используется,
// если ключ содержит пробелы, специальные символы или
// если имя свойства хранится в переменной.
let user = {
  "first name": "John",
  age: 30,
};
console.log(user["first name"]); // "John"

// Также квадратные скобки позволяют динамически выбирать свойства на основе переменной:
let key = "age";
console.log(user[key]); // 30 user[age]

// В объект можно добавлять новые свойства после его создания.
let user = { name: "John" };
user.age = 30;
console.log(user); // { name: "John", age: 30 }

// Изменение значения свойства осуществляется так же, как и его добавление.
let user = { name: "John", age: 30 };
user.age = 40;
console.log(user); // { name: "John", age = 40 };

// Чтобы удалить свойство объекта, используйте оператор delete:
delete user.age;
console.log(user); // { name: "John" }

// ажным побочным эффектом хранения объектов в качестве ссылок является то,
// что объект, объявленный как const, может быть изменён.
const userr = {
  name: "John",
};
userr.name = "Pete"; // (*)*alert(user.name); // Pete
console.log(userr);
// Значение user это константа, оно всегда должно ссылаться
// на один и тот же объект, но свойства этого объекта могут свободно изменяться.

// in оператор проверяет не значение свойства,
// а само его существование в объекте, что делает его особенно
// полезным в некоторых ситуациях допустим:
// свойство существует но содержит undefined.
let usIn = {
  name: undefined,
};

if ("name" in usIn) {
  console.log(usIn.name);
}

let user = { name: "John", age: 30 };

console.log("name" in user); // true, свойство "name" существует
console.log("address" in user); // false, свойства "address" нет
// Здесь "property" — это строка с именем свойства,
// а object — объект, в котором проверяется существование этого свойства.

// Если имя свойства хранится в переменной, оператор in
// также позволяет использовать переменную для проверки существования свойства.
let user = { age: 25 };
let propertyName = "age";

console.log(propertyName in user); // true, проверяем свойство, используя переменную

// В JavaScript объекты и массивы являются ссылочными типами.
let name = "Tom";
let age = 20;
let person = { name: "Muru", age: 10, country: "Africa" };
let otherPerson = person; // person ссылается на тот же объект, что и person

person.age = 20; // Изменение через otherPerson также изменяет person

console.log(person.age); // Выведет 20
console.log(otherPerson.age); // Выведет 20
// В этом примере person и otherPerson ссылаются на один и тот же объект.
// Изменение свойства age через otherPerson также изменяет его значение в person.
// Из-за того, что объект имеет ссылочный тип, то и сравнение объектов
// в JavaScript происходит по ссылке, что означает, что два объекта
// равны только в случае, если они являются одним и тем же объектом в памяти.

// Поверхностное копирование (Shallow Copy)
// При поверхностном копировании создается новый объект,
// но вложенные объекты (или массивы) остаются ссылками
// на те же объекты, что и в исходном объекте.
let obj111 = { a: 1, b: { c: 2 } };
let obj2 = Object.assign({}, obj111); // Поверхностное копирование

obj2.b.c = 3; // Изменение вложенного объекта

console.log(obj1.b.c); // Выведет 3 (изменение отразилось в obj1)
console.log(obj2.b.c); // Выведет 3

obj2.a = 4; // изменение примитива в скопированном объекте
console.log(obj1.a); // Выведет 4 (изменение отразилось в obj1)
console.log(obj2.a); // Выведет 4

// Глубокое копирование(клонирование) (Deep Copy)
// Глубокое копирование создает новый объект,
// включая рекурсивное копирование всех вложенных объектов.
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = JSON.parse(JSON.stringify(obj1)); // Глубокое копирование

obj2.b.c = 3; // Изменение вложенного объекта

console.log(obj1.b.c); // Выведет 2 (изменение не отразилось в obj1)
console.log(obj2.b.c); // Выведет 3
// Метод JSON.parse(JSON.stringify(...)) делает глубокое копирование,
// но имей в виду, что он не поддерживает функции, undefined,
// специальные объекты типа Date и другие нестандартные значения.

// Если требуется более сложное глубокое копирование, можно
// использовать библиотеку lodash с функцией cloneDeep:
const _ = require("lodash");

let obj11 = { a: 1, b: { c: 2 } };
let obj2 = _.cloneDeep(obj11); // Глубокое копирование

obj2.b.c = 3; // Изменение вложенного объекта

console.log(obj1.b.c); // Выведет 2 (изменение не отразилось в obj1)
console.log(obj2.b.c); // Выведет 3
// Функция cloneDeep делает полное глубокое копирование, включая сложные структуры.

// Проверка существования свойств
let userInfo = {
  name: "Katrin",
  age: 30,
};

if (userInfo) {
  // true or false
  console.log(userInfo.age);
}
// если значение будет существовать то оно вернуться или будет пусто

// Опциональная цепочка
let usersIntorm = {
  name: "Bater",
  age: 30,
  address: {
    city: "Minsk",
    street: "Freedom",
  },
};

console.log(usersIntorm.address.street);
// если такого свойства нет вообще мы получим ошибку и чтобы такого не было
console.log(usersIntorm?.address?.street);
// прописываем ? и вместо ошибки мы получим undefined

// Метод Object.assign()
// Используеться для копировани значений всех перечисляемых свойств 
// из одного или нескольких исходных объектов в целевой объект
// const obj1 = {name:'Katrin', age: 30};
// const obj2 = Object.assign({}, obj1);

// Спред-оператор (...):
// Позволяет распростронить элементы массива или свойства обьекта
// в новом обьекте или массиве. При использовании соответсвующим образом
// он может быть использован для создания поверхностной копии обьекта
// const obj1 = {name:'Katrin', age: 30};
// const obj2 = {...obj1};

// Метод JSON.parse() и JSON.stringify():
// При сериализации обьекта в строку с помощью JSON.stringify()
// и последующем его парсинге с помощью JSON.parse() создаеться новый
// обьект, который являеться глубокой копией исходного обьекта
// const obj1 = {name:'Katrin', age: 30};
// const obj2 = JSON.parse(JSON.stringify(obj1));
// функции нельзя копировать ?!

// Глубокое копирование
// Если нам нужно создать глубокую копию обьекта (копию обьекта, включая все
// вложенные обьекты), мы можем возпользоваться различными библиотеками,
// такими как lodash, или написать собственную функцию для глубокого копирования
// const obj1 = {name:'Katrin', adress: {city: 'Minsk'}};
// const obj2 = _.cloneDeep(obj1); с помощью lodash

// structuredClone
// мрожет использоваться, например в веб-разработке и других окружениях,
// где требуеться передача данных между потоками выполнения без потери их структор
// const obj1 = {name:'Katrin', adress: {city: 'Minsk'}};
// const obj2 = structuredClone(obj1);
// этот метод гарантирует, что в результате создаеться полная копия обьекта
// obj1, включая все его вложенные обьекты и свойства. Изменения в obj2
// не будут влиять на obj1 и наоборот

// Важно отметить, что structuredClone не являеться частью стандартна JS
// и его поддержка может отличаться в разных окружениях выполнения JS

// Рекурсия ?!

// в таблицк соединить обьекты ...
const button = {
  width: 200,
  text: "Buy"
}

const redButton = {
  ...button,
  color: "red"
}

console.table(redButton)

// Методы keys и values для обьектов

Object.keys({name: "Katrin", age: 22})
// Получаем на выходе: (2) ['name', 'age']

Object.values({name: "Maks", age: 22})
// Получаем на выходе: (2) ['Maks', 22]
// В JavaScript объекты — это структуры данных, которые 
// используются для хранения коллекций данных в виде ключ-значение. 
// Для работы с объектами есть несколько полезных методов, которые 
// позволяют получить ключи, значения и пары ключ-значение объекта. 
// Это методы Object.keys(), Object.values(), и Object.entries().

// Object.keys() — это метод, который возвращает массив всех 
// собственных (то есть принадлежащих самому объекту, а не унаследованных) 
// ключей (имен свойств) объекта. Этот метод полезен, когда вам нужно 
// работать с ключами объекта.

// Перебор ключей с помощью for...in и for...of
const user = {
  name: "John",
  age: 30,
  occupation: "developer"
};

// Получаем массив ключей объекта
const keys = Object.keys(user);

// Перебор ключей с помощью for...of
for (const key of keys) {
  console.log(key); // Выведет: name, age, occupation
}

// Перебор ключей объекта напрямую с помощью for...in
for (const key in user) {
  console.log(key); // Выведет: name, age, occupation
}

// Подсчет количества свойств
const numOfKeys = Object.keys(user).length;
console.log(numOfKeys); // 3

// Object.values() — это метод, который возвращает массив всех 
// значений собственных свойств объекта. Этот метод полезен, 
// если вам нужно работать со значениями объекта.

// Перебор значений с помощью for...of
const users = {
  name: "John",
  age: 30,
  occupation: "developer"
};

// Получаем массив значений объекта
const values = Object.values(users);

// Перебор значений с помощью for...of
for (const value of values) {
  console.log(value); // Выведет: John, 30, developer
}

// Также можно использовать for...in для доступа к значениям
for (const key in users) {
  console.log(users[key]); // Выведет: John, 30, developer
}

// Object.entries() — это метод, который возвращает массив всех 
// пар ключ-значение объекта в виде вложенных массивов. Каждый 
// вложенный массив состоит из двух элементов: первый — это ключ, 
// второй — это соответствующее ему значение.

// Получение пар ключ-значение объекта
const userr = {
  name: "John",
  age: 30,
  occupation: "developer"
};

const entries = Object.entries(userr);
console.log(entries);
// [["name", "John"], ["age", 30], ["occupation", "developer"]]

// В этом примере метод Object.entries() вернул массив массивов, 
// где каждый внутренний массив содержит пару ключ-значение.

const userse = {
  name: "Katrin",
  age: 30,
}

const newArray = Object.entries(userse).map((item) => {
return [item[0], item[1]];
});

console.log(newArray);
// вернули трансформированный массив на основе старого

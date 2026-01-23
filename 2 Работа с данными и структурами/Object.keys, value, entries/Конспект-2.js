// Перебор пар ключ-значение с помощью for...of
const user = {
  name: "John",
  age: 30,
  occupation: "developer"
};

// Получаем массив пар [ключ, значение]
const entries = Object.entries(user);

// Перебор пар с помощью for...of
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`); // Выведет: name: John, age: 30, occupation: developer
}

// Перебор через for...in
for (const key in user) {
  console.log(`${key}: ${user[key]}`); // Выведет: name: John, age: 30, occupation: developer
}

// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]

// Object.keys/values/entries игнорируют символьные свойства
// Так же, как и цикл for..in, эти методы игнорируют свойства, 
// использующие Symbol(...) в качестве ключей.

// Например, у нас есть объект с ценами, и мы хотели бы их удвоить:
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // преобразовать в массив, затем map, затем fromEntries (обратно в объект)
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
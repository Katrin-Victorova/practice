// Для перебора всех свойств объекта используется цикл for .. in
for (let key in object) {
  // тело цикла выполняеться для каждого свойства объекта
}

let usIn = {
  name: "Katrin",
  age: 27,
  adress: {
    city: "Minsk",
    street: "Freedom",
  },
};

for (let key in usIn) {
  // ключи
  console.log(key); // name, age, adreess
  // значение ключей
  console.log(usIn[key]); // Katrin, 27, Object {}
}

for (let key in usIn.adress) {
  // ключи
  console.log(key); // city, street
  // значение ключей
  console.log(usIn.adress[key]); // Minsk, Freedom
}

// проходимся по ключам обьекта
const bask = {
  Laptop: 1500,
  Mouse: 25,
  Keyboard: 100,
  HDMI: 25,
}

for(const key in bask) {
  const price = bask[key];
  console.log(`Price of ${key} is ${price}`);
} // такой-то элемент корзины стоит ...

// for of - массивы и тд
const basket = [
  { price: 1500 }, 
  { price: 25 }, 
  { price: 100 }, 
  { price: 10 },
];

for (const item of basket) {
  console.log(`Price: ${item.price}`);
} //  выведет все цены

const baskets = [
  { name: "Laptop", price: 1500}, 
  { name: "Mouse", price: 100}, 
  { name: "Keyboard", price: 10},
];

for (const {name, price} of baskets) {
  console.log(`Price of ${name} is ${price}`);
} // выведет и имя и значение
// цена такого-то товара

// Выводим форматированное представление для элементов объекта Map:
const skills = new Map()

skills.set(1, 'JavaScript')
skills.set(2, 'CSS')
skills.set(3, 'PHP')

for (let value of skills) {
  console.log(`${value[0]}.`, value[1])
}
// 1. JavaScript
// 2. CSS
// 3. PHP

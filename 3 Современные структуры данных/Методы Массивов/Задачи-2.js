// Дан массив чисел. Выведите в консоль каждый элемент массива и его квадрат
// Для массива [1, 2, 3, 4] вывод должен быть: {1: 1, 2: 4, 3: 9, 4: 16};
function getValues(arr) {
  const result = {};
  arr.forEach((el) => result[el] = el * el);
  return result
}
console.log(getValues([1, 2, 3, 4]))

// Дан массив: ["яблоко", "банан", "апельсин", "груша", "виноград"]
// Сделайте копию массива, содержащего только первые три элемента
const arrayCut = (arr, length) => {
  // [...arr].length = length; // длина массива
  return arr.slice(0, 3)
}

console.log(arrayCut(["яблоко", "банан", "апельсин", "груша", "виноград"]))

// Дан массив [1, 2, 3, 4, 5]
// Удалите из массива два элемента, начиная с индекста 2, и добавьте вместо них числа 9 и 10
let arr = [1, 2, 3, 4, 5];
const copied = [...arr]
copied.splice(2, 2, 9, 10) // возвращает массив удаленных элементов
console.log(copied)

// Даны два массива ["a", "b", "c"] и [1, 2, 3]
// Обьедините их в один массив
const connectArrays = (arr1, arr2) => {
  return arr1.concat(arr2)
}

const connectArraysSpread = (arr1, arr2) => {
  return [...arr1,...arr2]
}

console.log(["a", "b", "c"], [1, 2, 3])
console.log(connectArrays(["a", "b", "c"], [1, 2, 3]))
console.log(connectArraysSpread(["a", "b", "c"], [1, 2, 3]))

// Дан массив [5, 12, 8, 130, 44]
// Найдите первое число, которое больше 10
const num = [5, 12, 8, 130, 44].find(el => el > 10);
console.log(num)

// Найти пользователей, которые старше 18 лет и выведите того, которого зовут "Alice"
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Maks", age: 30 },
  { name: "David", age: 15 }
];

function findUsers(searchAge, searchName) {
  return arr.filter(({ name, age }) => age > searchAge && name === searchName)
}
// Нужно получить единый плоский массив всех значений хобби
const users = [
  { name: "Alice", hobbies: ["Reading", "Hiking"] },
  { name: "Bob", hobbies: ["Cooking"] },
  { name: "Maks", hobbies: ["Gaming", "Tenis"] },
];

const result = users.flatMap(el => el.hobbies)
console.log(result)

// Сортировка по длине строк: Остортируйте массив строк по длине каждой строки
const worlds = ["apple", "banana", "cherry", "date"];
const resultWorlds = worlds.sort((a, b) => a.length - b.length);
console.log(resultWorlds)

// Проверка четности: Напишите функцию, которая проверяет, 
// есть ли в массиве хотя бы одно четное число
const numbers = [1, 3, 5, 7, 6];
const resultSome = numbers.some(num => num % 2 === 0)
console.log(resultSome)

// Подсчет суммы: Найдите сумму всех чисел в массиве с помощью reduce
const numbersReduse = [10, 20, 30, 40];
const resultReduse = numbersReduse.reduce((acc, cur) => acc + cur, 0);
console.log(resultReduse)

// Проверка всех чисел: Убедитесь что все числа в массиве положительные
const numbersEvery = [10, -20, 30, 40]; // любые обьекты могут быть
const resultEvery = numbersEvery.every(num => num > 0)
console.log(resultEvery)

// Переворот массива: Переверните массив
const arr = [1, 2, 3, 4, 5]; 
const resultRevers = arr.reverse()
console.log(resultRevers)

// 1 Переворот массива: Переверните массив (исходный массив не изменялся)
const arr1 = [1, 2, 3, 4, 5]; 
const resultRevers1 = arr1.toReversed()
console.log(resultRevers1)

// 2 Переворот массива: Переверните массив (исходный массив не изменялся)
const arr2 = [1, 2, 3, 4, 5]; 
const resultRevers2 = [...arr2].reverse() // не мутирует так как создали купию
console.log(resultRevers2)

// [].filter((item) => item !== 0)

Array.prototype.myFilter = function (cb) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            result.push(this[i])
        }
    }
    return result
}

const test = [1, 2, 3, 4, 5, 6];
console.log(test.myFilter((item) => item % 2 === 0))

// find() находит элемент в массиве
Array.prototype.myFind = function (cb) { 
  for (let i = 0; i < this.length; i++) {
      let result = cb(this[i], i, this)
      if(result) return this[i]
  }
  return undefined
}

console.log([1, 2, 3].find((item) => item === 3))
// console.log([1, 2, 3].find((item) => item === 4)) undefined

Array.prototype.myConcat = function (...args) {
  const result = [...this];
  for (let i = 0; i < args.length; i++) {
      if (Array.isArray(args[i])) {
          result.push(...args[i])
      } else {
          result.push(args[i])
      }
  }
  return result
}

console.log(["A"].concat(["B", "D"], "C"))
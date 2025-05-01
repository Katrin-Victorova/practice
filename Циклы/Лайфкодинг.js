// Перевернуть слово

function reverseString(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
      reversed = reversed + string[i]
  }

  return reversed;
}

console.log(reverseString("world")) // dlrow

// Найти максимальное число в массиве
const findMaxNum = (arr) => { 
  let maxNum = arr[0];

  for (let i = 1; i < arr.length; i++){
      if (arr[i] > maxNum) {
          maxNum = arr[i]
      } 
  }
  return maxNum
}

console.log(findMaxNum([1, 2, 5])); //5

// Количество слов не циклы

// function countWords(str) { 
//   return str.trim().split( /\s+/).length;
// }

// console.log(countWords("The quick brown for")) //4
// console.log(countWords("Hello woeld")) //2

// Количество слов

function countWords(str) { 
  let letterLength = 0;
  let countWorld = 0;
  const strTrim = str.trim();
  for (let i = 0; i < strTrim.length; i++) {
      if (str[i] !== " ") {
          letterLength += 1
          if (letterLength === 1) countWorld += 1
      } else {
          letterLength = 0
      }
  }
  return countWorld
}

console.log(countWords("The quick brown for brown")) //5
console.log(countWords("Hello world")) //2

// Удаление дубликата с массива
function removeDuplicates(arr) { 
  const newArr = []
  for (let i = 0; i <= arr.length - 1; i++) {
      if (!newArr.includes(arr[i])) {
          newArr.push(arr[i])
      }
  }
  return newArr
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])) // 1,2,3,4,5
console.log(removeDuplicates([5, 5, 5, 5, 5])) // [5]

// Реализовать функции myMap,
// которая делает все тоже самое, что метод массива Map

function myMap(array, callback) { 
  let result = [];
  for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array))
  }
  return result
}

const arr = [1, 2, 3, 4, 5];

const mapperArr = myMap(arr, item => item * 2);
console.log(mapperArr); // [2, 4, 6, 8, 10]

// функция для подсчета суммы всех цифр в числе
function sumDigist(num) {
  // return String(num).split("").reduce((acc, val) => acc + +val, 0)
  let result = 0;
  while (num > 0) {
      result += num % 10;
      num = Math.floor(num /= 10);
  }
  return result
}

console.log(sumDigist(123)); //6
console.log(sumDigist(904)); //13
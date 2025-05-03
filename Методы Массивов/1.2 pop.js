// 1.2 pop()
// Удаляет последний элемент из массива
// Ничего не принимает
// Возвращает удаленный элемент
const users = ["Katrin", "Pete", "Robert"];
let newLength = users.push("Maks");

users.pop();
let removedElementWithPop = users.pop();
let last = [].pop();

console.log(users);
console.log(removedElementWithPop);
// Удобен для работы с последним массиво
// Изменяет оригинальный массив
// Если массив пустой, вернет undefined

// pop - удаляет с конца массива

function myPop(arr) {
  const lastItem = arr[arr.length - 1]
  arr.length = arr.length - 1;
  return lastItem;
}

const test = [1, 2, 3, 4, 5, 6];

console.log(myPop(test))
console.log(test)

// через прототипы
Array.prototype.mypop = function () {
  const lastItem = this[this.length - 1]
  this.length = this.length - 1
  return lastItem
}

console.log(test.mypop())
// 1.3 shift()
// Удаляет первый элемент из массива
// Ничего не принимает
// Возвращает удаленный элемент
const users = ["Katrin", "Pete", "Robert"];
let newLength = users.push("Maks");

let removedElementWithPop = users.shift();
let last = [].shift();

console.log(users);
console.log(removedElementWithPop);
// Изменяет оригинальный массив
// Более медленный, чем pop(), так как требуеться сдвинуть все остальное
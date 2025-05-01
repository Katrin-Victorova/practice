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
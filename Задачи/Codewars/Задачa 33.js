// Is the string uppuercase?
// проверка являеться ли строка большими буквами
function isUpperCase(str) {
    return str.toUpperCase() === str;
}

console.log(isUpperCase("c")) // false
console.log(isUpperCase("C")) // true
console.log(isUpperCase("hello I AM DONALD")) // false
console.log(isUpperCase("HELLO I AM DONALD")) // true

// нужно обычную функцию перевести в строковый прототип
String.prototype.isUpperCase = function () {
    return this.toUpperCase() === this.toString();
}
console.log("C".isUpperCase())
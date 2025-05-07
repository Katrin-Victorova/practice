// 1.8 forEach()
// Выполняет указанную функцию один раз, для каждого элемента массива
// Принимает функцию обратного вызова (callback)
// которая имеет до 3-х параметров, thisArg:
// currentValue: текущий элемент массива
// index (опционально) индекст тукущего элемента
// array (опционально) сам массив
// array.forEach(callback(element, index, array), thisArg);
const numbers = [1, 2, 3];
numbers.forEach((num, index) => {
    console.log(`Элеент ${num} находиться на позиции ${index}`);
});
// Ничего не возвращает (undefined)
// Прост в использовании для перебора массива
// Читаемый и удобный синтаксис
// Нельзя выйти из цикла (в отличие от for или for..of)
// Не подходит для сложных операций, трубующиз возврата нового массива
const myArray = [1, 2, 3]
console.log(myArray)

myArray.forEach((el) => console.log(el * 2)) 
// не изменяет оригинальный массив
console.log(myArray)
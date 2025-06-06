// 3.0 flatMap() 
// Комбинирует действия мотодов map и flat(с глубиной 1): преобразует элементы массива,
// а затем "сглаживает" вложенный результат
// Принимает:
// Обязательная функция callback(element, index, array)
// element - текущий элемент массива
// index - индекст текущего элемента
// array - сам массив
// Возвращает новый массив
// Удобен для работы с вложенными структурами
// Глубина сглаживания всегда равна 1
const arr = [1, 2, 3];
const result = arr.flatMap(num => [num, num * 2]);
console.log(result); //[ 1, 2, 2, 4, 3, 6 ]
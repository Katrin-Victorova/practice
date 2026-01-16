// Что выведет ?
console.log([2] + [1] - [2]); // приведение массива к примитивам

// Lifehack #1
const emptyArray = Array.from({ length: 10 }); // заглушка

// Lifehack #2
const someArray = [1, 2, 2, 2, 7, 4, 2, 1, 4, 7, 44, 5, 1, 2, 89, 9, 8];
const withoutDoublicates = [...new Set(someArray)]; // new массив без дубликатов

// Lifehack #3
// […array.slice(0, index - 1), …array.slice(index)]
const excludeElement = [...someArray.slice(0, 4), ...someArray.slice(5)];
// быстрое удаление элемента из массива

// Lifehack #4 получение последнего элемента
const lastElement1 = someArray.slice(-1)[0]; // короче
const lastElement2 = someArray[someArray.length - 1]; // быстрее

// Lifehack #5
someArray.length = 5; // Обрезать массив

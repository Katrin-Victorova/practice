// 2.7 join()
// Обьединяет все элементы массива в строку, разделяя их указанным резделителем
// Принимает необязательный разделитель (separator) - строка, которая будет вставлена между элементами массива
// По умолчанию - запятая ","
const numbers = [1, 2, 3, 4];
const result = numbers.join();
console.log(result);

const worlds = ["apple", "banana", "cherry"];
const worldsResult = worlds.join(" - ");
console.log(worldsResult);
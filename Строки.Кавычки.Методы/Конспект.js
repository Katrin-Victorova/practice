const str = "Hello, World!";
console.log(str[0]); // 'H' (первый символ строки)
console.log(str[7]); // 'W' (восьмой символ строки)
// ​​​​string​​​​ — строка, к которой вы хотите получить доступ.
// ​​​​index​​​​ — индекс символа, который вы хотите получить. Индексация начинается с 0.

console.log(str.charAt(str.length - 1)); // '!' (последний символ строки)
// С использованием slice()
console.log(str.slice(-1)); // '!' (последний символ строки)

// Методы строк
console.log(str.length); //13 Возвращает количество символов в строке.

console.log(str.toUpperCase()); // 'HELLO, WORLD!'
console.log(str.toLowerCase()); // 'hello, world!'
// Методы для преобразования всех символов строки в верхний или нижний регистр соответственно.

console.log(str.trim()); //Удаляет пробелы .с начала и конца строки.

console.log(str.charAt(1)); // 'e'
//Возвращает символ, расположенный по указанному индексу.

console.log(str.substring(7, 5)); // 'World'
console.log(str.substring(-6, 5)); // 'World'
// Возвращает подстроку, начиная с start и длиной length.
// Возвращает подстроку от индекса start до индекса end (не включая end).
const result = str.slice(7, 12); // "World"
console.log(str.slice(-6, -1)); // "World"
// Похож на substring(), но позволяет использовать отрицательные индексы для отсчёта с конца строки.

console.log(str.indexOf("World")); // 7
console.log(str.indexOf("JavaScript")); // -1
// Находит индекс первого вхождения подстроки. Возвращает -1, если подстрока не найдена.
const ster = "Hello, World!";
const index = ster.indexOf("o");
console.log(index); // 4
// Поиск символа
const star = "Hello, World! Hello again!";
const indexs = star.indexOf("Hello", 10);
console.log(indexs); // 13
// Поиск подстроки, начиная с указанного индекса
const etr = "Hello, World!";
const indeex = etr.indexOf("H", -5);
console.log(indeex); // 0 (отрицательный индекс рассматривается как 0)
//  Поиск с отрицательным начальным индексом

console.log(str.lastIndexOf("Hello")); // 14
// Находит индекс последнего вхождения подстроки.
const strs = "Hello, World!";
const rindexs = strs.lastIndexOf("o");
console.log(rindexs); // 8
// Поиск последнего вхождения символа

//Синтаксис string.includes(searchString, position)
console.log(str.includes("World")); // true
console.log(str.includes("world")); // false (регистрозависимый)
console.log(str.includes("World", 7)); // true (поиск начинается с индекса 7)
// Проверяет, содержит ли строка указанную подстроку. Возвращает true или false.

console.log(str.startsWith('Hello')) //true
console.log(str.endsWith("World!")) //true
// startsWith(searchString) и endsWith(searchString)
// Проверяют, начинается ли строка с searchString и заканчивается ли на searchString, соответственно.

console.log(str.replace("World", "JavaScript")); // 'Hello, JavaScript!'
// Заменяет первое вхождение search на replaceWith.

console.log(str.split(",")); //// ['apple', 'banana', 'cherry']
// Разбивает строку на массив подстрок, используя separator в качестве разделителя.
const sentence = "Hello, world! This is a sentence.";

const words = sentence.split(' ');
console.log(words);
// Output: ["Hello,", "world!", "This", "is", "a", "sentence."]

const chars = sentence.split('');
console.log(chars);
// Output: ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d", "!", " ", "T", "h", "i", "s", " ", "i", "s", " ", "a", " ", "s", "e", "n", "t", "e", "n", "c", "e", "."]

const parts = sentence.split(' ', 3);
console.log(parts); 
// Output: ["Hello,", "world!", "This"]

const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(', ', str2)); // 'Hello, World'
// Объединяет несколько строк в одну.

const rev = "Hello ";
const repeatedStr = rev.repeat(3);
console.log(repeatedStr); // "Hello Hello Hello "
// Метод repeat() возвращает новую строку, которая состоит из повторяющихся копий исходной строки.
// Если параметр ​​​​count​​​​ не является числом, он будет преобразован в число с помощью алгоритма конвертации числовых значений.
// Если ​​​​count​​​​ равно бесконечности или больше максимально возможного числа повторений, метод ​​​​repeat()​​​​ может вызвать переполнение памяти.
// Если ​​​​count​​​​ отрицательное, метод ​​​​repeat()​​​​ вызовет исключение ​​​​RangeError​​​​.

// Примеры сравнения строк
console.log("apple" < "banana"); // true, так как "a" (код 97) меньше, чем "b" (код 98)
console.log("banana" < "banana"); // false, строки идентичны
console.log("banana" < "Apple"); // false, "b" (код 98) больше, чем "A" (код 65)
console.log("apple" < "apples"); // true, "apple" короче, чем "apples"

// \n — начало новой строки;
// \t — табуляция, аналогично нажатию кнопки Tab.
// \', \", \`	Кавычки
// \\	Обратный слеш
// \t	Знак табуляции
// 1 - число отрицательное или нет
const num = -5; // дано число

if (num < 0) {
	console.log('Число отрицательное');
} else if (num > 0) {
	console.log('Число положительное');
} else {
	console.log('Число равно нулю');
}

// 2 - Дана строка. Выведите в консоль длину этой строки.
const str1 = 'Привет!'; // дана строка

console.log(str.length); // выводим длину строки

// 3 - Дана строка. Выведите в консоль последний символ строки.
const str = 'JavaScript'; // дана строка

const lastIndex = str.length - 1; // индекс последнего символа
const lastChar = str[lastIndex]; // берём символ по индексу

console.log(lastChar); // выведет 't'

// 4 - Дано число. Проверьте, четное оно или нет.
const num1 = 12; // дано число

if (num % 2 === 0) {
	console.log('Число чётное');
} else {
	console.log('Число нечётное');
}

// 5 - Даны два слова. Проверьте, что первые буквы этих слов совпадают.
const world1 = 'киса';
const world2 = 'кран';

const first1 = world1[1].toLowerCase();
const first2 = world2[1].toLowerCase();

if (first1 === first2) {
	console.log('Первые буквы совпадают');
} else {
	console.log('Первые буквы не совпадают');
}

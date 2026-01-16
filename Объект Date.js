const d = new Date();
console.log(d);
console.dir(d); // Object

const d1 = new Date('2024-01-01');
console.log(d1);

// как задать время-дату
const d2 = new Date('2024 05 09 12:44:40'); // 2024/05/09 и 2024-05-09
const d3 = new Date('May 9, 2024 12:44:40'); // 2024 May 9
const d4 = new Date(2024, 2, 9, 13, 45, 54);
// Sat Mar 09 2024 13:45:54 GMT+0300 (Москва, стандартное время)

const d5 = new Date(1766652262); // от 1 января 1970 года Unix time
console.log(d5);

const d22 = new Date(1766652262);

// базовые методы
console.log(d22.toString());
console.log(d22.toDateString()); // простой вывод даты
console.log(d22.toUTCString());
console.log(Date.parse('Jan 30, 2025')); // 1738184400000 - Unix time

const d32 = new Date(1714989123000);

// методы получение даты и времени
console.log(d32.getFullYear());
console.log(d32.getMonth()); // месяц от 0 - 11

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
console.log(months[d32.getMonth()]); // January
console.log(d32.getDate()); // 1 - 31
console.log(d32.getDay()); // 0 - 6 день, (0 - воскресение)
console.log(d32.getHours());
console.log(d32.getMinutes());
console.log(d32.getSeconds());
console.log(d32.getMilliseconds());

console.log(d32.getTime()); // 1714989123000

let diff = d32.getTimezoneOffset(); // -180 смещение
console.log(diff);

// Обьекты Date можно сравнивать (потому что сравниванием время)
console.log(d2 > d4);

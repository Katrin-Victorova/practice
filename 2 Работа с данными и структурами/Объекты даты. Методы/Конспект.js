// Объект Date в JavaScript используется для работы с датой и временем. 
// Он предоставляет множество методов для получения, установки 
// и манипуляции временными значениями. Даты можно использовать 
// для создания таймстампов, расчёта разницы между датами, 
// а также для более точного измерения времени.

// Чтобы создать объект Date с текущей датой и временем, 
// достаточно вызвать конструктор без параметров:
let now = new Date();
console.log(now); // текущие дата и время

// Временной меткой (таймстампом) является количество миллисекунд, 
// прошедших с 1 января 1970 года (начало эпохи UNIX).
let epoch = new Date(0); // 1 января 1970, UTC+0
console.log(epoch); // Thu Jan 01 1970 03:00:00 GMT+0300 (MSK)

let nextDay = new Date(24 * 3600 * 1000); // 2 января 1970
console.log(nextDay); // Fri Jan 02 1970 03:00:00 GMT+0300 (MSK)

// Для дат до 1 января 1970 года таймстамп будет отрицательным:
let beforeEpoch = new Date(-24 * 3600 * 1000); // 31 декабря 1969 года
console.log(beforeEpoch); // Wed Dec 31 1969 03:00:00 GMT+0300 (MSK)

// Если передать в конструктор Date строку с датой, то объект 
// будет создан на основе этой строки. Формат даты должен 
// быть таким: YYYY-MM-DDTHH:mm:ss.sssZ
let dateFromString = new Date("2023-08-19T10:24:00.000Z");
console.log(dateFromString); // Sat Aug 19 2023 13:24:00 GMT+0300 (MSK)
// Этот формат позволяет указать как дату, так и время. Если указано 
// только YYYY-MM-DD, то время будет по умолчанию установлено на полночь.

// Можно создать объект даты, задав конкретные значения для года, месяца, дня и времени.
// Год должен быть четырёхзначным (например, ​​​​2024​​​​).
// Месяц начинается с 0 для января и заканчивается 11 для декабря.
// День месяца (опционально) указывается начиная с 1.

// Пример создания даты с компонентами:
let customDate = new Date(2024, 0, 31); // 31 января 2024
console.log(customDate); // Wed Jan 31 2024 00:00:00 GMT+0300 (MSK)

// Можно также указать время (часы, минуты, секунды и миллисекунды):
let fullDate = new Date(2024, 0, 31, 23, 59, 59, 999);
console.log(fullDate); // Wed Jan 31 2024 23:59:59 GMT+0300 (MSK)

// После создания объекта Date можно получить его компоненты с помощью различных методов:
let year = now.getFullYear();
console.log(year); // Например, 2024 (год)

let month = now.getMonth();
console.log(month); // Например, 0 (январь) (месяц 0-11)

let dayOfMonth = now.getDate();
console.log(dayOfMonth); // Например, 31 (день месяца 1-31)

let dayOfWeek = now.getDay();
console.log(dayOfWeek); // Например, 3 (среда) (день недели 0-6, 0-воскресение)

// Часы, минуты, секунды и миллисекунды
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let milliseconds = now.getMilliseconds();
console.log(hours, minutes, seconds, milliseconds); // Например, 14, 23, 15, 987

// Методы получения компонентов даты также имеют версии для получения значений 
// в формате UTC (временная зона по Гринвичу). Например, getUTCFullYear(), 
// getUTCHours(), и т.д.

// Чтобы изменить дату или время, объект Date предоставляет 
// методы для установки компонентов:
let date = new Date();
date.setFullYear(2023);
console.log(date); // Дата с изменённым годом

date.setMonth(11); // декабрь

date.setDate(25); // день месяца

date.setHours(15); // часы
date.setMinutes(30); // минуты
date.setSeconds(45); // секунды
date.setMilliseconds(123); // милисекунды

// Все методы установки имеют аналоги для 
// работы с UTC. Например, setUTCHours(), setUTCMinutes().

// Автоисправление даты

// Если задать значения, которые выходят за пределы допустимых, 
// JavaScript автоматически скорректирует дату. 
// Например, 32 января будет преобразовано в 1 февраля:
let correctedDate = new Date(2023, 0, 32); // 32 января 2023 года
console.log(correctedDate); // Fri Feb 01 2023 00:00:00 GMT+0300 (MSK)

// Таймстампы и измерение времени
// Чтобы получить количество миллисекунд, прошедших с 1 января 1970 года, 
// можно использовать метод getTime():
let timestamp = now.getTime();
console.log(timestamp); // Например, 1672531200000

// Таймстампы можно вычитать друг из друга для получения разницы в миллисекундах:
let start = new Date();
for (let i = 0; i < 1000000; i++) {} // Некоторая операция
let end = new Date();
console.log(`Операция заняла ${end - start} миллисекунд.`);

// Метод Date.now()
// Для получения текущего таймстампа без создания 
// объекта Date, можно использовать метод Date.now():
let currentTimestamp = Date.now();
console.log(currentTimestamp); // Например, 1672531200000
// Этот метод работает быстрее, чем создание 
// объекта Date с последующим вызовом getTime().

// Метод Date.parse() позволяет разобрать строку 
// с датой и преобразовать её в таймстамп:
let parsedTimestamp = Date.parse("2023-08-19T10:24:00.000Z");
console.log(parsedTimestamp); // Например, 1692433440000
// Этот метод поддерживает формат строки YYYY-MM-DDTHH:mm:ss.sssZ.

// Разность дат
// Даты можно вычитать, что позволяет легко вычислить разницу в миллисекундах:
let date1 = new Date(2023, 0, 1);
let date2 = new Date(2024, 0, 1);
let difference = date2 - date1;
console.log(difference); // Количество миллисекунд между датами

// Можно перевести разницу в дни:
let daysDifference = difference / (1000 * 60 * 60 * 24); // Переводим из миллисекунд в дни
console.log(daysDifference); // Количество дней между датами

// Преобразование дат в строки
// Для преобразования объекта Date в строку используется несколько методов:

// toString() — возвращает строку в текстовом формате:
console.log(now.toString()); // Например, "Tue Aug 19 2023 16:24:00 GMT+0300 (MSK)"
// toISOString() — возвращает дату в формате ISO 8601:
console.log(now.toISOString()); // Например, "2023-08-19T13:24:00.000Z"
// toDateString() — возвращает только дату:
console.log(now.toDateString()); // Например, "Tue Aug 19 2023"
// toTimeString() — возвращает только время:
console.log(now.toTimeString()); // Например, "16:24:00 GMT+0300 (MSK)"

// Получение компонентов даты и времени:
// let date = new Date();
console.log(date.getFullYear()); // Год
console.log(date.getMonth());    // Месяц (0-индексированный)
console.log(date.getDate());     // День месяца
console.log(date.getHours());    // Часы
console.log(date.getMinutes());  // Минуты
console.log(date.getSeconds());  // Секунды
console.log(date.getMilliseconds()); // Миллисекунды
console.log(date.getDay());      // День недели (0 - воскресенье)

// Установка компонентов даты и времени:
// let date = new Date();
date.setFullYear(2023);
date.setMonth(0); // Январь (0-индексированный)
date.setDate(1);
date.setHours(12);
date.setMinutes(30);
date.setSeconds(0);
date.setMilliseconds(0);
console.log(date); // Обновленная дата

// Форматирование даты и времени:
// let date = new Date();
console.log(date.toDateString()); // Краткое представление даты
console.log(date.toTimeString()); // Краткое представление времени
console.log(date.toLocaleDateString()); // Локализованная дата
console.log(date.toLocaleTimeString()); // Локализованное время
console.log(date.toISOString()); // Дата и время в формате ISO 8601

//Библиотеки для работы с Date

// Moment.js
// Одной из самых известных и широко используемых библиотек 
// для работы с датами и временем в JavaScript. Deprecated
const moment = require('moment');
let nowe = moment();
console.log(nowe.format('YYYY-MM-DD HH:mm:ss')); // 2024-06-14 10:30:45

// date-fns
// Легковесная библиотека, предоставляющая множество функций для работы с датами. 
// Она модульная, что позволяет импортировать только те функции, которые вам нужны.
const { format, addDays } = require('date-fns');
let noow = new Date();
let futureDate = addDays(noow, 10);
console.log(format(futureDate, 'yyyy-MM-dd HH:mm:ss')); // 2024-06-24 10:30:45

//  Luxon
// Современная библиотека для работы с датами и временем, 
// созданная одним из авторов Moment.js. Она ориентирована 
// на использование современных возможностей JavaScript.
const { DateTime } = require('luxon');
let nows = DateTime.local();
console.log(nows.toFormat('yyyy-MM-dd HH:mm:ss')); // 2024-06-14 10:30:45
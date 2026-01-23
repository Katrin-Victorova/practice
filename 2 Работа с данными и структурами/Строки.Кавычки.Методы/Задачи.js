// 1 проверка на подстроку
function containsSubstring(str, substr) {
	return str.includes(substr); // который проверяет наличие подстроки с учетом регистра
}
console.log(containsSubstring('Hello, World!', 'World')); // true
console.log(containsSubstring('Hello, World!', 'world')); // false
// Чувствителен к регистру (поэтому 'World' и 'world' дают разные результаты).

// 2 поиск и замена str - строка search - подстрока replaceWith - подстроку
function replaceFirstOccurrence(str, search, replaceWith) {
	return str.replace(search, replaceWith);
}
console.log(replaceFirstOccurrence('Hello, World!', 'World', 'JavaScript')); // 'Hello, JavaScript!'
console.log(
	replaceFirstOccurrence('Hello, World! World!', 'World', 'JavaScript')
); // 'Hello, JavaScript! World!'

// 3 извлечение подстроки
function getSubstring(str, start, end) {
	return str.slice(start, end);
}
console.log(getSubstring('Hello, World!', 7, 12)); // 'World'
console.log(getSubstring('Hello, World!', 0, 5)); // 'Hello'

// 4 обьединение строк и должно получиться так 'Hello World from JavaScript'
function joinStrings(strings) {
	return strings.join(' '); // метод, который объединяет все элементы массива в одну строку
}
console.log(joinStrings(['Hello', 'World', 'from', 'JavaScript'])); // 'Hello World from JavaScript'

// 5 преобразование регистра
function convertCase(str) {
	if (str.includes('lowercase')) {
		return str.toLowerCase();
	} else if (str.includes('uppercase')) {
		return str.toUpperCase();
	}
	return str; // // если нет ключевых слов
}
console.log(convertCase('This should be lowercase')); // 'this should be lowercase'
console.log(convertCase('This should be uppercase')); // 'THIS SHOULD BE UPPERCASE'

// 6 удаление пробелом
function trimSpaces(str) {
	return str.trim();
}
console.log(trimSpaces('   Hello, World!   ')); // 'Hello, World!'

// 7 поиск символа
function findCharIndex(str, char) {
	return str.indexOf(char); // Возвращает индекс первого совпадения. Если совпадений нет, возвращает - 1
}
console.log(findCharIndex('Hello, World!', 'W')); // 7
console.log(findCharIndex('Hello, World!', 'z')); // -1

// 8 Сравнение строк
function compareStrings(str1, str2) {
	return str1 === str2;
}
console.log(compareStrings('Hello', 'Hello')); // true
console.log(compareStrings('Hello', 'hello')); // false

// Альтернатива с методом localeCompare()
function compareStrings(str1, str2) {
	return str1.localeCompare(str2) === 0;
} // Полезен для сложных сравнений с учетом локализации (например, для букв с диакритиками)

// 9 извлечение символов
function getLastCharacter(str) {
	return str.length > 0 ? str[str.length - 1] : null;
}
console.log(getLastCharacter('Hello')); // 'o'
console.log(getLastCharacter('')); // null

// Проверка длины строки: str.length > 0 определяет, есть ли в строке символы
// Доступ к последнему символу:
// str[str.length - 1] — синтаксис как в массивах(строка — итерируемый объект)
// Для строки 'Hello'(длина 5) индекс последнего символа: 5 - 1 = 4 → 'o'
// Возврат null для пустой строки: Если длина 0, возвращаем null

// с видео
const value = prompt('Введите ваше имя:');

const clearValue = value.trim().toLocaleLowerCase();

if (clearValue.length === 0) {
	alert('Ошибка');
}

if (clearValue.includes('админ')) {
	alert('Ошибка, имя занято');
}

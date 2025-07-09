// Если хочешь убрать пустые элементы (чтобы только слова):
function splitToWords(str) {
	return str.split(' ').filter(Boolean);
}

console.log(splitToWords('  Learn   to code  '));
// ['Learn', 'to', 'code']

// 1. Извлечение последнего символа строки
// Возвращает последний символ строки. Если строка пустая — вернуть null.
function getLastCharacter(str) {
	if (str.length === 0) return null;
	// return str.charAt (str.length - 1)
	return str[str.length - 1];
}

console.log(getLastCharacter('Hello')); // 'o'
console.log(getLastCharacter('')); // null

// 2. Преобразование регистра
// Если строка содержит слово 'lowercase', вернуть всю строку в нижнем регистре.
// Если 'uppercase' — в верхнем регистре.
function convertCase(str) {
	if (str.includes('lowercase')) {
		return str.toLowerCase();
	} else if (str.includes('uppercase')) {
		return str.toUpperCase();
	} else {
		return str;
	}
}

console.log(convertCase('This should be lowercase')); // 'this should be lowercase'
console.log(convertCase('This should be uppercase')); // 'THIS SHOULD BE UPPERCASE'

// 3. Удаление пробелов по краям
// Возвращает строку без начальных и конечных пробелов.
function trimSpaces(str) {
	return str.trim();
}

console.log(trimSpaces('   Hello, World!   ')); // 'Hello, World!'

// 4. Поиск символа
// Находит индекс первого вхождения символа char в строке str.
// Если символ не найден — вернуть -1.
function findCharIndex(str, char) {
	return str.indexOf(char);
}

console.log(findCharIndex('Hello, World!', 'W')); // 7
console.log(findCharIndex('Hello, World!', 'z')); // -1

// 5. Сравнение строк
// Возвращает true, если строки равны (с учетом регистра), иначе — false.
function compareStrings(str1, str2) {
	return str1 === str2;
}

console.log(compareStrings('Hello', 'Hello')); // true
console.log(compareStrings('Hello', 'hello')); // false

// 6. Проверка на подстроку
// Проверяет, содержится ли подстрока substr в строке str.
// Вернуть true или false.
function containsSubstring(str, substr) {
	return str.includes(substr);
}

console.log(containsSubstring('Hello, World!', 'World')); // true
console.log(containsSubstring('Hello, World!', 'world')); // false

// 7. Поиск и замена (первое вхождение)
// Заменяет первое вхождение подстроки search на replaceWith в строке str.
function replaceFirstOccurrence(str, search, replaceWith) {
	return str.replace(search, replaceWith);
}

console.log(replaceFirstOccurrence('Hello, World!', 'World', 'JavaScript')); // 'Hello, JavaScript!'
console.log(
	replaceFirstOccurrence('Hello, World! World!', 'World', 'JavaScript')
);
// 'Hello, JavaScript! World!'

// 8. Извлечение подстроки
// Возвращает подстроку из str, начиная с индекса start до end (не включая end).
function getSubstring(str, start, end) {
	// return str.slice(start, end)
	return str.substring(start, end);
}

console.log(getSubstring('Hello, World!', 7, 12)); // 'World'
console.log(getSubstring('Hello, World!', 0, 5)); // 'Hello'

// 9. Объединение строк
// Принимает массив строк и объединяет их через пробел в одну строку.
function joinStrings(strings) {
	return strings.join(' ');
}

console.log(joinStrings(['Hello', 'World', 'from', 'JavaScript']));
// 'Hello World from JavaScript'

// 10.Разделить слова запятыми
function splitToWords(str) {
	return str.split(' ');
}

console.log(splitToWords('Hello, world! I love JavaScript'));
// ['Hello,', 'world!', 'I', 'love', 'JavaScript']

console.log(splitToWords('  Learn   to code  '));
// ['', '', 'Learn', '', '', 'to', 'code', '', '']

// 1: Деление на ноль
function divide(a, b) {
	try {
		// 1) Проверяем опасное условие ДО деления
		if (b === 0) {
			// 2) Создаём и "бросаем" ошибку
			throw new Error('Cannot divide by zero');
		}

		// 3) Если всё ок — делим
		const result = a / b;
		console.log(result); // по условию нужно вывести результат
	} catch (error) {
		// 4) Перехватываем и выводим сообщение ошибки
		console.log(error.message);
	} finally {
		// 5) Выполнится всегда
		console.log('Operation completed');
	}
}

divide(10, 2);
divide(10, 0);
// Почему проверка до деления?
// Потому что в JS 10 / 0 не выбросит ошибку само (будет Infinity). Поэтому ошибку создаём сами.

// 2: Валидация JSON
function parseJSON(jsonString) {
	try {
		// JSON.parse может сам выбросить SyntaxError
		const obj = JSON.parse(jsonString);
		return obj; // если распарсилось — возвращаем объект
	} catch (error) {
		// по условию возвращаем конкретное сообщение
		return 'Invalid JSON format';
	} finally {
		console.log('Parsing completed');
	}
}

console.log(parseJSON('{ "name": "John", "age": 30 }'));
console.log(parseJSON('{name: John, age: 30}'));
// 📌 Тут важный момент: finally выполнится даже если мы return сделали.

// 3: Длина строки + ошибка для не-строки
// Здесь по тексту: “если вместо строки передан null/undefined — выбрасывай ошибку”
// И ещё: “если str не строка — выбрось ‘Input is not a string’”
// То есть любое не-строка → ошибка.
function getStringLength(str) {
	try {
		// Проверяем тип
		if (typeof str !== 'string') {
			throw new Error('Input is not a string');
		}

		const length = str.length;
		console.log(length); // по примеру — вывести длину
		return length; // и можно вернуть, это удобно
	} catch (error) {
		console.log(error.message);
		return null; // чтобы функция была “без падений”
	} finally {
		console.log('String length checked');
	}
}

getStringLength('Hello');
getStringLength(null);

// 4: Квадратный корень + запрет на отрицательное
function sqrt(x) {
	try {
		// Если отрицательное — делаем это ошибкой
		if (x < 0) {
			throw new Error('Cannot calculate square root of a negative number');
		}

		const result = Math.sqrt(x);
		console.log(result);
		return result;
	} catch (error) {
		console.log(error.message);
		return null;
	} finally {
		console.log('Square root calculation completed');
	}
}

sqrt(9);
sqrt(-9);

// 5: Банкомат (balance снаружи)
let balance = 500;

function withdraw(amount) {
	try {
		// Проверяем, хватает ли денег
		if (amount > balance) {
			throw new Error('Insufficient funds');
		}

		// Списываем
		balance -= amount;

		// Выводим оставшийся баланс (по примеру)
		console.log(balance);
		return balance;
	} catch (error) {
		console.log(error.message);
		return null;
	} finally {
		console.log('Transaction completed');
	}
}

withdraw(300);
withdraw(600);

// Чаще всего в throw передают объект одного из встроенных типов ошибок:
// Error — универсальная ошибка (подходит для большинства ситуаций)
// SyntaxError — ошибка синтаксиса
// TypeError — ошибка типа данных
// ReferenceError — обращение к несуществующей переменной
throw new Error('Что-то пошло не так');

// Когда тип данных не тот:
function sum(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new TypeError('Аргументы должны быть числами'); // Потому что ошибка связана с типами, а не просто «что-то не так».
	}
	return a + b;
}

// Когда используется переменная, которой не существует:
throw new ReferenceError('Переменная user не определена');
// 📌 Обычно такие ошибки бросает сам JS, но иногда можно бросать вручную в сложной логике.

// 🔹 SyntaxError - Почти всегда создаётся движком JS автоматически. Редко используется вручную.

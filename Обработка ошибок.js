// Поймали ошибку - try / catch / finally - — защитный шлем кода
// Оператор throw - для написания ошибок

try {
	// опасный код
} catch (error) {
	// если ошибка возникла
}

console.log('до');

// Пример №1 — без try/catch
const user = null;
console.log(user.name); // 💥 ошибка

console.log('после'); // ❌ не выполнится

// Пример №2 — с try/catch
console.log('до');

try {
	const user = null;
	console.log(user.name); // ошибка
} catch (error) {
	console.log('Ошибка поймана!');
}

console.log('после'); // ✅ выполнится
// try/catch — это не лечение ошибки, а контроль над ситуацией

// catch (error) { // тип ошибки
//   console.log(error.name)
//   console.log(error.message) // текст ошибки и где произошла
// }

// 🚨 throw — создать ошибку самому
// Чтобы контролировать бизнес-логику, а не ждать, пока JS упадёт сам
function checkAge(age) {
	if (age < 18) {
		throw new Error('Доступ запрещён'); // «Останови выполнение и брось ошибку»
	}

	return 'Доступ разрешён';
}

try {
	console.log(checkAge(16));
} catch (error) {
	console.log(error.message);
}
// 🧱 Собственные ошибки (custom errors)
// Чтобы различать типы ошибок, а не всё ловить одной кучей
class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = 'ValidationError';
	}
}

function validateUser(user) {
	if (!user.name) {
		throw new ValidationError('Нет имени');
	}
}

try {
	validateUser({});
} catch (error) {
	if (error instanceof ValidationError) {
		console.log('Ошибка валидации:', error.message);
	} else {
		console.log('Другая ошибка');
	}
}

// ⏳ finally — выполнится всегда
// Используется для:
// закрытия модалок
// скрытия лоадеров
// очистки ресурсов

try {
	console.log('работаем');
} catch {
	console.log('ошибка');
} finally {
	console.log('выполнится всегда');
}

// ⚡ try/catch и async / await
// try/catch ловит ошибки await
async function loadData() {
	try {
		const res = await fetch('/api');
		const data = await res.json();
		return data;
	} catch (error) {
		console.log('Ошибка загрузки');
	}
}

//. Правильно
try {
	await fetch('/api');
} catch {}

// ✅ Когда НУЖНО try/catch
// ✔ работа с API
// ✔ парсинг JSON
// ✔ доступ к данным пользователя
// ✔ async/await
// ✔ бизнес-валидация

// ❌ НЕ нужен:
// обычные if
// логика без падений

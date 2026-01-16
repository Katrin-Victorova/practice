/**
 * 1) “Обёртка задержки”: delay(ms)
 * Задача: напиши функцию delay(ms), которая возвращает промис и резолвится через ms.

 * Как думать: “промис = коробка, которая закончится позже”. Чтобы “позже” — используем setTimeout.
 */
function delay(ms) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(); // сигнал: "готово"
		}, ms);
	});
}
// function timer(delay) {
// 	let timer;
// 	return new Promise((resolve, _) => {
// 		timer = setTimeout(() => resolve(), delay);
// 	}).finally(() => clearTimeout(timer));
// }

// проверка:
delay(500).then(() => console.log('Прошло 500ms'));
//  каждый раз когда создаем таймер - должны его удалить чтобы память не кушал
// выполнил действие - очистил

/**
 * 2) “Вернуть значение позже”: delayValue(ms, value)
 * Задача: delayValue(300, "hi") должен вернуть промис, который через 300мс резолвится значением "hi".

 * Как думать: resolve(value) кладёт значение в промис.
 */
function delayValue(ms, value) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(value);
		}, ms);
	});
}

// проверка:
delayValue(300, 'hi').then(res => console.log(res));

/**
 * 3) “Отработка ошибки”: checkAge(age)
 * Задача: функция возвращает промис:
 * если age >= 18 → resolve("Доступ разрешён")
 * иначе → reject("Доступ запрещён")

 * Как думать: reject = промис “упал”, и это ловится через .catch().
 */
function checkAge(age) {
	return new Promise((resolve, reject) => {
		if (age >= 18) resolve('Доступ разрешён');
		else reject('Доступ запрещён');
	});
}

// проверка:
checkAge(20)
	.then(msg => console.log('OK:', msg))
	.catch(err => console.log('ERR:', err));

checkAge(15)
	.then(msg => console.log('OK:', msg))
	.catch(err => console.log('ERR:', err));

/**
 * 4) “Цепочка then”: по шагам преобразовать число
 * Задача: есть Promise.resolve(3). Сделай цепочку, чтобы получилось:
 * 3 → умножить на 2 → прибавить 10 → вывести результат

 * Как думать: каждый .then() получает результат прошлого шага и возвращает новый.
 */
Promise.resolve(3)
	.then(n => n * 2) // 6
	.then(n => n + 10) // 16
	.then(result => console.log('result:', result));

/**
 * 5) “Последовательно (важно!)”: выполнить async-операции одну за одной
 * Задача: есть функция fakeRequest(name, ms) — она “делает запрос” и возвращает промис.
 * Нужно выполнить строго по порядку: A потом B потом C (не параллельно).
 */
function fakeRequest(name, ms) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(`✅ ${name} done`);
		}, ms);
	});
}

// TODO: выполнить A -> B -> C последовательно

// Как думать: “последовательно” = следующий стартует только внутри .then() предыдущего.
fakeRequest('A', 300)
	.then(resA => {
		console.log(resA);
		return fakeRequest('B', 200); // обязательно return!
	})
	.then(resB => {
		console.log(resB);
		return fakeRequest('C', 100);
	})
	.then(resC => {
		console.log(resC);
		console.log('Все запросы завершены по порядку');
	});
// Ключ: если не сделать return, цепочка “не дождётся” B/C.

/**
 * 6) “Параллельно + разрулить ошибки”: Promise.allSettled
 * Задача: есть 3 “запроса”, один из них может упасть. Нужно:
 * запустить все параллельно
 * собрать все результаты
 * вывести успешные отдельно, ошибки отдельно
 */
function sometimesFails(name, ms, shouldFail) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldFail) reject(`❌ ${name} failed`);
			else resolve(`✅ ${name} ok`);
		}, ms);
	});
}

const p1 = sometimesFails('A', 200, false);
const p2 = sometimesFails('B', 300, true);
const p3 = sometimesFails('C', 100, false);

// TODO: собрать результаты так, чтобы падение одного не ломало всё

// Как думать:
// Promise.all падает, если хоть один reject
// Promise.allSettled никогда не падает и даёт массив статусов
Promise.allSettled([p1, p2, p3]).then(results => {
	const ok = [];
	const errors = [];

	for (const r of results) {
		if (r.status === 'fulfilled') ok.push(r.value);
		else errors.push(r.reason);
	}

	console.log('Успешно:', ok);
	console.log('Ошибки:', errors);
});

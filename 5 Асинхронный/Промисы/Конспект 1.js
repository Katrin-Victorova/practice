// Колбэки → Promise → цепочки → async/await

/* 
JS выполняет код “сверху вниз”, но некоторые операции занимают время:
сетевые запросы, таймеры, чтение файлов.
Чтобы не “заморозить” программу, мы:
- либо передаём “что делать потом” функцией (callback),
- либо используем Promise (объект “обещание результата”),
- либо пишем async/await (синтаксический сахар над Promise).

Аналогия:
Ты заказала кофе.
- callback: “когда будет готово — позови меня (вызови функцию)”
- promise: “вот тебе талончик-обещание: будет готово → заберёшь”
- async/await: “пишем как будто ждём у стойки, но касса не блокируется”

============================================================================
1) Колбэки (callbacks)
----------------------------------------------------------------------------
Колбэк = функция, которую передают куда-то и ожидают, что её вызовут позже.

Пример “смысл”:
loadScript("lib.js", () => { ...код после загрузки... })

Проблема: “callback hell” (ад из вложенности)
Когда есть цепочка: сделать A → потом B → потом C,
получается много вложенных функций.

Схема “как становится больно”:

A(() => {
  B(() => {
    C(() => {
      D(() => { ... })
    })
  })
})

Минусы колбэков:
- сложнее читать (вложенность)
- сложнее ловить ошибки (нужно помнить где try/catch, где onError)
- легко случайно вызвать колбэк дважды или не вызвать вообще

Но! Колбэки всё ещё важны:
- события (click, input)
- setTimeout / setInterval
- любые API, которые “вызывают тебя обратно”
*/

/*
2) Promise — что это такое “под капотом”
Promise — объект, который представляет результат асинхронной операции:
результат будет “потом” (или уже есть).

У промиса есть состояния:
- pending    (ожидание)
- fulfilled  (успех)
- rejected   (ошибка)

ВАЖНО (learn):
new Promise(executor) — executor запускается СРАЗУ, синхронно,
и получает (resolve, reject).

То есть:
- “создать промис” ≠ “поставить в очередь”
- executor выполняется немедленно при создании */

const p = new Promise((resolve, reject) => {
	// 1) этот код выполнится СРАЗУ при new Promise(...)
	// 2) когда работа закончится — вызываем resolve(value) или reject(error)
	setTimeout(() => resolve('done'), 1000);
});

/* 
3) then / catch / finally — как “подписаться” на результат

p.then(onFulfilled, onRejected)
- onFulfilled(value) выполнится, если успех
- onRejected(error) выполнится, если ошибка

p.catch(onRejected) — то же самое, что then(null, onRejected)

p.finally(onDone) — выполнится в любом случае (и успех, и ошибка),
обычно для “уборки”: скрыть лоадер, закрыть соединение и т.д. */

p.then(value => {
	console.log('успех:', value);
})
	.catch(err => {
		console.log('ошибка:', err);
	})
	.finally(() => {
		console.log('всегда в конце');
	});

/* 4) Цепочки промисов (Promise chaining) — ключевая механика
Главное правило цепочки (learn):
- .then() возвращает НОВЫЙ promise
- если из then вернуть значение → оно станет результатом следующего then
- если вернуть promise → следующий then подождёт его
- если бросить ошибку (throw) или вернуть reject → прыгнем в ближайший catch

Это и решает “callback hell”: вместо вложенности — “паровозик” из then. */

Promise.resolve(1)
	.then(n => {
		// вернули обычное значение → оно станет входом следующего then
		return n + 1; // 2
	})
	.then(n => {
		// вернули promise → следующий then будет ждать
		return new Promise(resolve => setTimeout(() => resolve(n + 1), 500)); // 3
	})
	.then(n => {
		console.log('итог:', n); // 3
	})
	.catch(e => {
		console.log('перехват ошибки:', e);
	});

/* 5) Ошибки в цепочках — почему catch “поймает всё”
Идея (learn): если промис в цепочке упал (rejected),
управление переходит к ближайшему обработчику ошибок (.catch).

Важно:
- try/catch НЕ ловит ошибки “в будущем” (в async-части)
- зато .catch ловит rejected в цепочке */

Promise.resolve()
	.then(() => {
		throw new Error('упали тут'); // это превратит промис в rejected
	})
	.then(() => {
		console.log('сюда не зайдём');
	})
	.catch(e => {
		console.log('поймали:', e.message); // "упали тут"
	});

/* 6) async/await — “как синхронно”, но на промисах
Из Doka: асинхронные функции — это функции, которые возвращают промисы.
Из learn: async гарантирует, что функция вернёт promise.
await можно использовать только внутри async-функции.
await “останавливает” выполнение этой функции до результата промиса,
НО не блокирует весь JS (просто функция продолжит позже). */

async function getData() {
	// async функция всегда возвращает Promise
	// return 1;  -> вернёт Promise fulfilled(1)

	try {
		const value = await Promise.resolve(42); // ждём промис
		return value + 1; // вернётся как fulfilled(43)
	} catch (e) {
		// если внутри await прилетела ошибка (rejected) — попадём сюда
		throw e; // пробросили дальше
	} finally {
		// аналог promise.finally
	}
}

getData().then(console.log).catch(console.error);

/* 7) Мини-таблица: что выбрать и когда

| Подход        | Когда норм                           | Главный минус            |
|--------------|--------------------------------------|--------------------------|
| callback     | события, простые одноразовые “потом”  | вложенность, ошибки      |
| Promise      | последовательности, параллель, цепочки| надо понимать then/return|
| async/await  | читаемый код “как синхронный”         | всё равно промисы внутри | */

/* 8) “Золотые правила” (запомнить)
1) new Promise(executor) запускает executor СРАЗУ.
2) then() ВСЕГДА возвращает новый promise. 
3) return value в then → value пойдёт дальше.
4) return promise в then → цепочка подождёт.
5) throw / reject → прыжок в ближайший catch.
6) async всегда возвращает promise. 
7) await — “пауза” только внутри async-функции, не блокировка всего JS. */

/* ----------------------------------------------------------------------------
9) Мини-шпаргалка “как переписать колбэк → промис → async/await” */

function withCallback(cb) {
	setTimeout(() => cb(null, 'ok'), 300); // условно: cb(error, data)
}

// 1) callback-style
withCallback((err, data) => {
	if (err) return console.error(err);
	console.log('callback:', data);
});

// 2) promise-style
function withPromise() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('ok'), 300);
	});
}

withPromise()
	.then(data => console.log('promise:', data))
	.catch(console.error);

// 3) async/await-style
(async () => {
	try {
		const data = await withPromise();
		console.log('await:', data);
	} catch (e) {
		console.error(e);
	}
})();

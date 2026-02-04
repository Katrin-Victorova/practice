// Метод fetch в JavaScript

// Метод `fetch` — это встроенный в JavaScript интерфейс для выполнения HTTP-запросов к удалённым ресурсам (например, API).
// Он используется для получения или отправки данных между клиентом и сервером.

// `fetch` возвращает `Promise`, который:
// - переходит в состояние `fulfilled` после получения ответа от сервера
// - переходит в состояние `rejected` в случае ошибки сети

// Базовый синтаксис
// Общий вид вызова метода: fetch(url, [options])
// - `url` — адрес ресурса, к которому выполняется запрос
// - `options` — необязательный объект с параметрами запроса (метод, заголовки, тело и т. д.)
// Если объект `options` не указан, по умолчанию используется метод `GET`

// Пример 1. Запрос с методом GET
fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json()) // преобразование ответа в формат JSON
	.then(data => console.log(data)) // обработка полученных данных
	.catch(error => console.error('Ошибка запроса:', error));

// Пояснение:
// 1. Метод `fetch` выполняет запрос по указанному адресу
// 2. Метод `response.json()` возвращает Promise, который преобразует тело ответа в объект JavaScript
// 3. Данные выводятся в консоль
// 4. Метод `.catch()` обрабатывает возможные сетевые ошибки

// Пример 2. Запрос POST (отправка данных)
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json', // указываем тип данных
	},
	body: JSON.stringify({
		title: 'Новая задача',
		description: 'Описание задачи',
	}),
})
	.then(response => response.json())
	.then(data => console.log('Создано:', data))
	.catch(error => console.error('Ошибка:', error));

// Пояснение:
// - Параметр `method` определяет HTTP-метод (POST)
// - В `headers` задаётся формат передаваемых данных
// - В `body` передаётся JSON-строка, созданная функцией `JSON.stringify()`
// - Сервер возвращает созданный объект, который можно обработать далее

// Пример 3. Запрос PUT (обновление данных)
fetch('https://jsonplaceholder.typicode.com/posts/1', {
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		id: 1,
		title: 'Обновлённая задача',
		completed: true,
	}),
})
	.then(response => response.json())
	.then(data => console.log('Обновлено:', data))
	.catch(error => console.error('Ошибка обновления:', error));

// 	Пояснение:
// - Используется метод `PUT`, чтобы полностью заменить существующий ресурс
// - Указывается `id` обновляемого ресурса в URL
// - Ответ сервера содержит обновлённые данные

// Пример 4. Запрос PATCH (частичное обновление)
fetch('https://jsonplaceholder.typicode.com/posts/1', {
	method: 'PATCH',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		completed: true,
	}),
})
	.then(response => response.json())
	.then(data => console.log('Изменено:', data))
	.catch(error => console.error('Ошибка изменения:', error));

// 	Пояснение:
// - Метод `PATCH` изменяет только указанные поля объекта
// - Остальные поля ресурса не затрагиваются

// Пример 5. Запрос DELETE (удаление данных)
fetch('https://jsonplaceholder.typicode.com/posts/1', {
	method: 'DELETE',
})
	.then(response => {
		if (response.ok) {
			console.log('Ресурс удалён');
		} else {
			console.error('Ошибка при удалении');
		}
	})

	.catch(error => console.error('Ошибка сети:', error));
// Пояснение:
// - Если статус ответа находится в диапазоне 200–299, свойство `response.ok` равно `true`
// - Удалённый объект обычно не возвращается в теле ответа

// Работа с async / await
async function loadPosts() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const posts = await response.json();
		console.log('Посты:', posts);
	} catch (error) {
		console.error('Ошибка загрузки:', error);
	}
}

loadPosts();
// Пояснение:
// - Ключевое слово `await` приостанавливает выполнение функции до получения результата запроса
// - Ошибки обрабатываются через блок `try / catch`
// - Код читается линейно, что упрощает логику

// Проверка статуса ответа
fetch('https://jsonplaceholder.typicode.com/unknown')
	.then(response => {
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`);
		}
		return response.json();
	})
	.then(data => console.log(data))
	.catch(error => console.error('Ошибка:', error.message));

// Пояснение:
// - Свойство `response.ok` используется для проверки успешности ответа
// - При статусе, отличном от 200–299, генерируется ошибка с кодом состояния

// Частые ошибки и особенности

// 1. Отсутствие `return` после `response.json()`
//    Без `return` данные не передаются в следующий `.then()`

// 2. Необработка ошибок сети
//    Метод `fetch` не выбрасывает исключение при кодах 404 или 500 — только при сбое соединения

// 3. Отсутствие заголовков `Content-Type`
//    Сервер может отклонить запрос без явного указания типа данных

// 4. Игнорирование асинхронности
//    Результат запроса нельзя использовать вне `.then()` или без `await`, так как он возвращается асинхронно

// Итог - Метод `fetch` предоставляет базовый способ выполнения HTTP-запросов в JavaScript.

// Он поддерживает все основные методы:
// - GET
// - POST
// - PUT
// - PATCH
// - DELETE

// Работает на основе `Promise` и легко интегрируется с `async / await`.
// Понимание синтаксиса `fetch` и структуры запросов является основой для взаимодействия с API и построения клиент-серверных приложений.

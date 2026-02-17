/* Всё браузерное окружение */
console.log(window);

/* Основной JavaScript */
console.log(window.Math);
console.log(window.Object.keys({ name: 'Александр', age: 28 }));
console.log(window.Number('123'));
console.log(window.Boolean(0));

/* BOM (Browser Object Model) */
console.log(window.navigator); // инфа о браузере
console.log(window.screen); // инфа об экране
console.log(window.location); // инфа об URL
console.log(window.history); // инфа об истории текущей сессии
console.log(window.frames);
console.log(window.fetch);
console.log(window.XMLHttpRequest);

/* Сохранить данные в localStorage */
window.localStorage.setItem('id', JSON.stringify({ id: 123 }));

const id = JSON.parse(
	/* Получить данные из localStorage */
	window.localStorage.getItem('key-name'),
);

/* Отправка на сервер GET-запроса и получение ответа */
window
	.fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => console.log('Пользователи:', users));

/* DOM (Document Object Model) */
console.log(window.document); //dir - буквально обьект с большим количеством свойств

// менеджер задач 3 с get

// Как читать такие задачи: “переводчик с человеческого на код”
// Когда видишь задачу, ты ищешь 4 вещи:
// 1) Что на входе?
// параметры функции (например startDate, endDate, isCompleted)
// или глобальные данные (tasks, completedTasks)

// 2) Что на выходе?
// вернуть массив? строку? объект? ничего?
// важно: “возвращает” ≠ “изменяет”
// map/filter обычно возвращают новый массив
// а “обновите массив tasks” значит перезаписать tasks = ...

// 3) Какое условие отбора/преобразования?
// map → “взять каждый элемент и превратить во что-то”
// filter → “оставить только те элементы, которые подходят”
// forEach → “пройти и что-то вывести/сделать, не создавая новый массив”
// find → “найти один элемент”
// findIndex → “найти индекс”

// 4) Граничные случаи
// индекс вне массива
// пустой массив
// у задачи нет completedDate (пока не завершена)
// даты строкой → надо сравнивать как Date

// Пример одной задачи
const task = {
	title: 'Сделать ДЗ',
	description: 'map/filter практика',
	createdDate: '2025-12-17', // строка-дата
	isCompleted: false,
	completedDate: null, // пока не завершена
};

let tasks = []; // активные задачи
let completedTasks = []; // завершённые

// 1: “вернуть массив описаний всех задач” + использовать map().
function getTaskDescriptions(tasks) {
	// tasks мы передаём аргументом — так функция “чище” и проще тестировать
	return tasks.map(task => {
		return task.description; // берём только description
	});
}

// 2: “фильтрует задачи длиной более 10 символов” + filter()
// “Проверьте длину title или description” → выберем, например, description(или можно title).
function getLongTasks(tasks) {
	return tasks.filter(task => {
		// условие: длина description > 10
		return task.description > 10 || task.title > 10; // Если у вас по условию можно “title ИЛИ description”,
	});
}

// 3: getTasksByDateRange(startDate, endDate, isCompleted = false)
// “выбор задач по дате: проверять, что createdDate или completedDate попадает в диапазон.
// Если isCompleted === true — вернуть только завершённые”
// Строки сравнивать опасно, поэтому делаем new Date(...).

// ПланЖ
// Превратить startDate / endDate в Date
// Отфильтровать tasks
// Для каждой задачи выбрать “какую дату сравниваем”:
// если isCompleted === true → сравниваем completedDate и берём только task.isCompleted === true
// иначе → сравниваем createdDate(или можно тоже оба, но в ТЗ “или”)

function getTasksByDateRange(tasks, startDate, endDate, isCompleted = false) {
	const start = new Date(startDate);
	const end = new Date(endDate);

	return tasks.filter(task => {
		if (isCompleted === true) {
			// нужны только завершённые
			if (task.isCompleted !== true) return false;

			// completedDate должен быть и попадать в диапазон
			if (!task.completedDate) return false;

			const completed = new Date(task.completedDate);
			return completed >= start && completed <= end;
		}

		// иначе берём по createdDate (для всех задач)
		const created = new Date(task.createdDate);
		return created >= start && created <= end;
	});
}

// 4: clearShortTasks() “удаляет задачи длиной менее 5 символов” + filter() + “обновите массив tasks новым массивом”
// Ключ: filter не удаляет, он создаёт новый массив.
// Поэтому мы делаем: tasks = tasks.filter(...).

// Я сделаю как функцию, которая меняет внешний массив и возвращает обновлённый:
function clearShortTasks() {
	// оставляем задачи, у которых title (или description) длиной >= 5
	tasks = tasks.filter(task => {
		return task.title.length >= 5;
	});

	return tasks; // удобно для проверки
}
// Если в условии именно “длина задачи” = длина title — ок.Если надо description, поменяй.

// 5: бновление title задачи по индексу
// ТЗ: передать index и newTitle, изменить tasks[index].title
function updateTaskTitle(index, newTitle) {
	if (index < 0 || index >= tasks.length) {
		throw new Error('Неверный index: такой задачи нет');
	}

	tasks[index].title = newTitle;
}

// 6: completeTask(index) с методами массивов
// ТЗ: “найти и изменить задачу по индексу, поставить isCompleted = true и completedDate = текущая дата,
// при необходимости переместить в completedTasks”

// Самый понятный способ: взять задачу по индексу, обновить поля, вырезать из tasks и положить в completedTasks
// Для “методов массивов” тут идеально подходит splice()(он удаляет по индексу).
function completeTask(index) {
	if (index < 0 || index >= tasks.length) {
		throw new Error('Неверный index: такой задачи нет');
	}

	// 1) вырезаем задачу из массива tasks
	// splice возвращает массив удалённых элементов
	const [task] = tasks.splice(index, 1);

	// 2) обновляем свойства
	task.isCompleted = true;

	// текущая дата в формате YYYY-MM-DD
	task.completedDate = new Date().toISOString().slice(0, 10);

	// 3) переносим в completedTasks
	completedTasks.push(task);

	return task; // вернём завершённую задачу для удобства
}
// Почему splice удобно? Потому что одновременно “нашёл по индексу” и “удалил”.

// 7: showTasks() с forEach()
// ТЗ: “перебрать tasks методом forEach и выводить все свойства каждой задачи”
function showTasks(tasks) {
	tasks.forEach((task, index) => {
		console.log('-----');
		console.log(`Задача #${index}`);
		console.log('title:', task.title);
		console.log('description:', task.description);
		console.log('createdDate:', task.createdDate);
		console.log('isCompleted:', task.isCompleted);
		console.log('completedDate:', task.completedDate);
	});
}

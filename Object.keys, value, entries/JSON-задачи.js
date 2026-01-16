// 1: Парсинг и сериализация

// Дано (JSON-строка)
// {
//   "name": "Alice",
//   "age": 30,
//   "hobbies": ["reading", "biking", "cooking"]
// }

// Шаг 1️⃣ JSON → JS-объект (парсинг)
const jsonString = `{
  "name": "Alice",
  "age": 30,
  "hobbies": ["reading", "biking", "cooking"]
}`;

// JSON.parse превращает СТРОКУ в JS-объект
const user = JSON.parse(jsonString);
// создаёт новый объект в памяти

user.age = 31; // меняем возраст - теперь user — обычный объект, работаем как всегда
user.hobbies.push('programming'); // добавляем hobbies — массив → используем .push()

const updatedJson = JSON.stringify(user); // Обратно в JSON (сериализация)

console.log(updatedJson);
// Мы сделали полный цикл:
// JSON строка → объект → изменили → JSON строка

// 2: Почему функция пропала
const person = {
	name: 'Bob',
	age: 25,
	greet: function () {
		console.log('Hello!');
	},
	address: {
		city: 'New York',
		zip: '10001',
	},
};

const json = JSON.stringify(person); // Сериализуем
console.log(json);

// {
//   "name": "Bob",
//   "age": 25,
//   "address": {
//     "city": "New York",
//     "zip": "10001"
//   }
// } // функция greet исчез (JSON — это данные, а не поведение)

// Функции:
// не данные
// не сериализуемы
// не имеют текстового эквивалента в JSON
// 📌 Поэтому JSON.stringify:
// просто игнорирует функции
// без ошибки, тихо

// 3: Глубокая копия через JSON
const book = {
	title: 'JavaScript: The Good Parts',
	author: 'Douglas Crockford',
	details: {
		publisher: "O'Reilly Media",
		pages: 176,
	},
	tags: ['JavaScript', 'Programming', 'Web Development'],
};

const bookCopy = JSON.parse(JSON.stringify(book));
// parse создаёт новые объекты и массивы
// stringify превращает ВСЁ в текст
// ссылки не сохраняются

bookCopy.title = 'JavaScript: The Definitive Guide'; // Меняем копию
bookCopy.details.pages = 1096;

// Проверяем независимость
console.log(book.title); // старая
console.log(bookCopy.title); // новая

console.log(book.details.pages); // 176
console.log(bookCopy.details.pages); // 1096

// ⚠️ Ограничение способа
// JSON-копирование:
// ❌ теряет функции
// ❌ теряет undefined, Symbol, Date

// 4: Фильтрация полей - replacer решает: какие поля попадут в JSON какие выкинуть
const user = {
	id: 1,
	username: 'johndoe',
	password: 'supersecretpassword',
	email: 'johndoe@example.com',
};

// Replacer-функция
const json1 = JSON.stringify(user, (key, value) => {
	// stringify проходит по каждому ключу
	if (key === 'password') {
		return undefined; // поле не попадёт в JSON
		// если вернуть undefined → поле удаляется
	}
	return value;
});

console.log(json);

// Replacer-массив - чаще используют для API
const json2 = JSON.stringify(user, ['id', 'username', 'email']);

console.log(json);

// 3
//Задача: Написать функцию findItemById
//которая принимает id и возвращает объект с этим id, независимо от уровня вложенности.
const items = [
	{
		id: 1,
		name: 'item1',
		children: [
			{
				id: 2,
				name: 'item2',
				children: [{ id: 3, name: 'item3', children: [] }],
			},
		],
	},
	{
		id: 4,
		name: 'item4',
		children: [],
	},
];

// findItemById(3, items); //{ id: 3, name: 'item3', children: [] }
// findItemById(5, items); //'Item not found'

// решение 1
const findItemById = (id, arr) => {
	const firstLevelElement = arr.find(elem => elem.id === id);
	if (firstLevelElement) return firstLevelElement;

	const children = arr.flatMap(elem => elem.children);
	if (!children.length) return 'Item not found';

	return findItemById(id, children);
};
console.log(findItemById(4, items));

// решение 2 - тут цикл + стек
// const findItemById = (items, id) => {
//   const stack = [...items];

//   while (stack.length) {
//     const item = stack.pop();

//     if (item.id === id) {
//       return item;
//     }

//     if (item.children && item.children.length > 0) {
//       stack.push(...item.children); // Добавляем потомков в стек
//     }
//   }

//   return null;
// };

// console.log(findItemById(items, 4));

// 1
// 👉 Нужно написать функцию extractPostTitles,
// которая вернёт массив всех title всех постов всех пользователей
// ожидаемый результат -  extractPostTitles(users); ['Hello World', 'React is great', 'My journey with Node.js']
const users = [
	{
		id: 1,
		name: 'Alice',
		posts: [
			{ id: 101, title: 'Hello World' },
			{ id: 102, title: 'React is great' },
		],
	},
	{
		id: 2,
		name: 'Bob',
		posts: [{ id: 201, title: 'My journey with Node.js' }],
	},
];
// если много элементов
function extractPostTitles(data) {
	return data.flatMap(elem => {
		return elem.posts.map(item => item.title);
	});
	// если много данных в постах, то этот вариант предпочтительнее
	// const result = data.map(elem => elem.posts).flat().map(item => item.title)
	// return result
}

console.log(extractPostTitles(users));

// 2
// //Найти максимальное значение в глубоко вложенной структуре
const data = {
	a: 1,
	b: {
		c: 3,
		d: {
			e: 5,
			f: 10,
		},
	},
	g: 2,
};

// решение через накопление всех значений
const resValues = [];

const rec = nestedObj => {
	const values = Object.values(nestedObj);

	values.forEach(elem => {
		if (typeof elem === 'object' && elem !== null) {
			rec(elem);
		} else {
			resValues.push(elem);
		}
	});
};

rec(obj);
return Math.max(...resValues);

// к задаче 2 гбт и оно не самое лучше из-за Infinity
// function findMax(obj) {
// 	// 1) Заводим "текущий максимум" как самое маленькое число
// 	let max = -Infinity;

// 	// 2) Берём все значения объекта (не ключи, а именно значения)
// 	for (const value of Object.values(obj)) {
// 		// 3) Если значение — число, сравниваем с max
// 		if (typeof value === 'number') {
// 			if (value > max) max = value;
// 		}

// 		// 4) Если значение — объект (вложенная "коробка"), идём внутрь рекурсией
// 		if (value && typeof value === 'object') {
// 			const innerMax = findMax(value); // рекурсивный шаг
// 			if (innerMax > max) max = innerMax;
// 		}
// 	}

// 5) Возвращаем максимум, найденный на этом уровне
// return max;
// }

// Схема
// findMax(data)
//   ├─ число 1 → max=1
//   ├─ findMax(b)
//   │    ├─ число 3 → max=3
//   │    └─ findMax(d)
//   │         ├─ 5  → max=5
//   │         └─ 10 → max=10  → return 10
//   │    max=max(3,10)=10 → return 10
//   └─ число 2 → max остаётся 10
// return 10

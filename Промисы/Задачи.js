/*
  Реализуй promiseAllLimit(tasks, limit), который выполняет 
  промисы с ограничением на параллельность (limit одновременных задач). 
*/

export async function promiseAllLimit(tasks, limit) {}

// решение
const successfulPromise = new Promise(resolve => {
	setTimeout(() => resolve('done'), 300);
});

function timeoutRace(promise, ms) {
	const timeoutProm = new Promise(resolve => {
		setTimeout(() => {
			resolve('timeout');
		}, ms);
	});

	return Promise.race([promise, timeoutProm]);
}

timeoutRace(successfulPromise, 400)
	.then(res => console.log(res))
	.catch(err => console.log(err));

/* 
  Функция retryWithBackoff(fn, retries, delay) должна повторять вызов fn с 
  экспоненциальной задержкой (delay * 2^attempt), 
  пока fn не выполнится успешно или пока не исчерпаны попытки.
*/

export async function retryWithBackoff(fn, retries = 3, delay = 100) {}

/*
  Напиши функцию, которая принимает промис и таймаут, и возвращает:
   - результат промиса, если он завершится вовремя;
   - иначе — строку "timeout".
*/

export function timeoutRace(promise, ms) {}

/* Есть массив промисов, каждый из которых разрешается в числовое значение.Необходимо:
    -Дождаться выполнения всех промисов в массиве
    -Получить их результаты
    -Вычислить сумму всех полученных значений 
*/
// решение
const promiseArray = [
	Promise.resolve(10),
	Promise.resolve(20),
	Promise.resolve(30),
	Promise.reject(5),
];

function sumPromise(promises) {
	return Promise.allSettled(promises).then(data =>
		data.reduce((acc, promise) => {
			// console.log(promise)
			if (promise.value) {
				acc = acc + promise.value;
			}
			return acc;
		}, 0)
	);
}

sumPromise(promiseArray).then(console.log); // 60

//Promise.customAny

/* async function queue() {
    console.log(1);

    setTimeout(() => console.log(2), 0);

    const targetNode = document.createElement('div');
    document.body.appendChild(targetNode);

    const observer = new MutationObserver(() => {
        console.log(6);
        Promise.resolve().then(() => console.log(7));
    });

    observer.observe(targetNode, { attributes: true });

    let a = new Promise((resolve) => {
        console.log(3);
        resolve();
    });

    a.then(() => {
        console.log(5);
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => console.log(9));

        targetNode.setAttribute('data-test', 'value');
    });

    console.log(4);

    requestAnimationFrame(() => {
        console.log(8);
    });

    await a;
}

queue();
console.log(10); */

/*
у нас есть набор билетов вида:
[
{from: 'London', to: "Moscow"},
{from: 'NY', to: "London"},
{from: 'Moscow', to: "SPb"},
...
]

Из этих билетов можно построить единственный, неразрывный маршрут.
Петель и повторов в маршруте нет.
Нужно написать программу, которая возвращает эти же объекты билетов в порядке следования маршрута.
Начало маршрута известно
*/

function getRoute(tickets = [], start) {
	//code
}

console.clear();
console.log(
	getRoute(
		[
			{ from: 'London', to: 'Moscow' },
			{ from: 'NY', to: 'London' },
			{ from: 'Moscow', to: 'SPb' },
		],
		'NY'
	)
);

/*
Дан массив ссылок: ['url1', 'url2', ...] и лимит одновременных запросов (limit)
Необходимо реализовать функцию, которая опросит урлы в том порядке, в котором они идут в массиве, и вызовет callback c массивом ответов
['url1_answer', 'url2_answer', ...] так, чтобы в любой момент времени выполнялось не более limit
запросов (как только любой из них завершился, сразу же отправляется следующий)
Т.е. нужно реализовать шину с шириной равной limit.

Требования:
- Порядок в массиве ответов должен совпадать с порядком в массиве ссылок
Дополнительно:
- Функция должна обладать мемоизацией (один и тот же урл не опрашивать дважды)

Для опроса можно использовать fetch
Ошибки обрабатывать не нужно
*/
//O(n) - время
//O(n)+O(k) - память

function parallelLimit(links, limit, callback) {
	//code
}

const db = { link1: '1', link2: '2', link3: '3', link7: '7' };
const links = [
	'link1',
	'link2',
	'link1',
	'link3',
	'link1',
	'link2',
	'link2',
	'link7',
];
const expected = [1, 2, 1, 3, 1, 2, 2, 7];

// declare function fetch(url: string): Promise<string>;
function fetch(url) {
	console.log(`fetching: ${url}`);
	const response = db[url];

	if (response === undefined) {
		throw new Error('No such url');
	}

	return new Promise(resolve => {
		const timeout = Math.random() * 100 + 20;
		setTimeout(() => resolve(response), timeout);
	});
}

function test(results) {
	if (!Array.isArray(results) || results.toString() !== expected.toString()) {
		console.error(`Expected: ${expected.toString()}`);
		console.error(`Received: ${results.toString()}`);
		return;
	}

	console.log('Test passed');
}

parallelLimit(links, 3, test);

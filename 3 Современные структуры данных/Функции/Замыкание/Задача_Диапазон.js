/**
 * Сделай функцию makeRange(start), которая возвращает функцию.
 * Внутри этой функции храни начальное значение и при каждом вызове
 * увеличивай его на 5 и возвращай.
 */

function makeRange(start) {
	let current = start;
	return function () {
		current = current + 5;
		return current;
	};
}

const range = makeRange(10);
console.log(range()); // 15
console.log(range()); // 20
console.log(range()); // 25
/**
 * Ты кладёшь в копилку 10 рублей.
 * Каждый раз, когда ты приходишь, ты докладываешь ещё по 5 рублей и смотришь, сколько стало
 * Копилка — это замыкание: только твоя функция может её открыть и поменять сумму.
 */

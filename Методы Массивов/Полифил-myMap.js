// Экспортируем функцию (обычно так делают в учебных полифилах или библиотеках)
module.exports = function () {
	// 1️⃣ Проверяем: если myMap ещё НЕ существует
	// (чтобы не перезаписать нативный метод или чужой полифил)
	if (!Array.prototype.myMap) {
		// 2️⃣ Добавляем метод myMap в прототип массива
		Array.prototype.myMap = function (callback) {
			// this — это массив, на котором вызвали myMap
			// пример: [1,2,3].myMap(...)

			// 3️⃣ Проверка: myMap должен вызываться на массиве (или строке)
			if (!(this instanceof Array || this instanceof String)) {
				throw new TypeError('Array.prototype.myMap was called on wrong type');
			}

			// 4️⃣ Проверка: аргумент callback ОБЯЗАН быть функцией
			if (typeof callback !== 'function') {
				throw new TypeError(
					`Array.prototype.myMap ${callback} is not a function.`
				);
			}

			// 5️⃣ Создаём новый массив — именно его map возвращает
			const result = [];

			// 6️⃣ Перебираем массив вручную
			// i — индекс
			// this.length — длина массива
			for (let i = 0; i < this.length; i++) {
				// 7️⃣ Вызываем callback для каждого элемента
				// callback получает:
				// 1) текущий элемент
				// 2) индекс
				// 3) сам массив
				const mappedValue = callback(this[i], i, this);

				// 8️⃣ Кладём результат callback в новый массив
				result.push(mappedValue);
			}

			// 9️⃣ Возвращаем НОВЫЙ массив
			return result;
		};
	}
};

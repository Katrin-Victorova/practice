// Перебор элементов массива
const fruits = ['apple', 'banana', 'orange'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Индекс: ${i}, Элемент: ${fruits[i]}`);
// }

fruits.forEach((fruit, index) => {
	console.log(`Индекс: ${index} Элемент: ${fruit}`);
});

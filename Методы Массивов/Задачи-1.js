// нужно написать функцию которая удаляет первый и последний элемент массива
// чтобы не мутировать элемент, если в функции мы принимаем массив или обьект,
// то лучше всегда создать копию, и вернуть (const result = [...arr])
// это обязательства функционального програмирования
// removeFirstAndLast([1, 2, 3, 4])// [2,3]

function removeFirstAndLast(arr) {

  const result = [...arr];
  result.pop()
  result.shift()
  return result;
}

console.log(removeFirstAndLast([1, 2, 3, 4]))

// Используя метод map, напишите функцию doubleElements, 
// где каждый элемент из переданного аргументом массива будет увеличен в 2 раза
// doubleElements([1, 2, 3]) // [2, 4, 6]

function doubleElements(arr) { 
  return arr.map(num => num * 2)
}

console.log(doubleElements([1, 2, 3]))

// Напишите функцию multipleAndAdd которая принимает массив чисел, множитель и число,
// умножает каждый элемент массива на множитель используя map, затем добавляет 
// новый элемент в конец массива, используя push
// multipleAndAdd([1, 2, 3], 10, 16)

function multipleAndAdd(arr, multiplayer, element) {
  const nerArr = arr.map((element) => element * multiplayer)
  nerArr.push(element)
  return nerArr
}

console.log("result", multipleAndAdd([1, 2, 3], 10, 16)); // [ 10, 20, 30, 16 ]
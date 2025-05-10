// #25 - Take the First N Elements
// Создать функцию которая принимает массив и число, и возвращает массив из первых элементов из этого массива
function take (array, n) {
  return array.slice(0, n);
}

// const take = (array, n) => array.slice(0, n);

console.log(take([0, 1, 2, 3, 4]))
// развернуть последовательность чисел
// к нам приходит целое число, а мы должны вернуть массив
// наполнить можно с помощью цикла
const reverseSeq = (n) => {
  const arr = [];
  for(let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};
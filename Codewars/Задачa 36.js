// Count by X
// нужно сделать массив из чисел входящих в интервал в 2 (еще и шаг) и сделать 5 раз
// countBy(1, 10) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// countBy(2, 5) = [2, 4, 6, 8, 10]
function countBy (x, n) {
  const r = [];
  let times = n;
  for(let i = x; times > 0; i+= x) {
    r.push(i);
    times--;
  }
  return r;
}

console.log(countBy(2, 5))

// вариант 2
// function countBy(x, n) {
//     const z = [];
//     for (let i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }

// вариант 3
// function countBy(x, n) {
//     const z = [];
//     while (z.length < n) z.push(x * (z.length + 1))
//     return z;
// }
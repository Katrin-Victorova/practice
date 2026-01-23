// Посчитать сколько чистых страниц нужно для однокласников
// function paperwork (n, m) {
//   return n * m
// }
// const paperwork = (n, m) => n * m < 0 ? 0 : n * m;
// если n * m будет меньше 0, тогда мы вернем 0 иначе вернем n * m

const paperwork = (n, m) => (n < 0 || m < 0) ? 0 : n * m;
// все тесты прошли с таким решением

console.log(paperwork(5, 5))
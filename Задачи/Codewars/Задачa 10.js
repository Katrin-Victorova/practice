// конвертировать число в массив в другом порядке
function digitize(n) {
  return n.toString().split('').reverse().map(Number); // чейнинг прием (как цепочка присоединяеться)
};
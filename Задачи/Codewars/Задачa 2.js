// найти средне арифмитическое в массив, округленное вниз
// до ближайшего целого числа
function getAverage(marks) {
  return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length); // встроенная функция
};

function getAverage2(maks) {
  let acc = 0;
  maks.forEach(el => acc += el); // более короткий синтаксис
  return Math.floor(acc / maks.length);
};
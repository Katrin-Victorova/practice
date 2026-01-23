// вернуть тип суммы аргументов
function typeOfSum(a, b) {
  return typeof(a + b);
};

// посчитать количество нечетных чисел до n
// сделать цикл для проверки четное / нечетное (линейная сложность)
// трюк 1 3 5   7 как вывести? нужно поделить на 2 и округлить до ближайшего целого вниз --> 3.9
function oddCount(n){
  return Math.floor(n/2);
};

// повторить строку
function repeatStr(n, s) {
  return s.repeat(n);
};

// приходит массив и число (в массиве оценки учеников в классе) а отдельное 5 отдельного ученика
// посчитать лучшая ли его оценка чем средняя по классу
// нужно поделить среднее арефмитическое в массиве
// затем сравнить с его меньше или больше 5 и если больше то вернуть true или иначе false

function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((acc, item) => acc + item, 0) / classPoints.length < yourPoints;
};
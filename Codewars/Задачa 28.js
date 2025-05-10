// Find Maximum and Minimum Values of a List
// в списке (массив) пишем 2 функции
// самый короткий
const min = (list) => {
  return Math.min(...list);
}

const max = (list) => {
  return Math.max(...list);
}

console.log(min([ -52, 56, 30, 29, -54, 0, -110]))
console.log(max([ 42, 54, 65, 87, 0,]), 0)
console.log(max([5]), 5)

// нужно сделать функцию которая найдет самое мак и мин число в МАССИВЕ
// этот вариант лучше через цикл
const minFun = (list) => {
  let m = [0];
  for(let i = 1; i < list.length; i++) {
    if (list[i] < m) m = list[i];
  }
  return m;
}

const maxFun = (list) => {
  let m = [0];
  for(let i = 1; i < list.length; i++) {
    if (list[i] > m) m = list[i];
  }
  return m;
}
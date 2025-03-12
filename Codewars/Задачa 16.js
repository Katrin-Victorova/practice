// function any(arr, fun) {
//   return arr.some(fun)
// }

const any = (arr, fun) => arr.some(fun);

// есть футбольная команда и закончила чемпионат
// написать функции которая принимает массив и возращает результат
function points(games) {
  let count = 0;
  games.forEach(item =>{
    if(item[0] > item[2]) count += 3;
    if(item[0] === item[2]) count += 1;
  })
  return count;
}
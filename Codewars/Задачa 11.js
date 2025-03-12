// развернуть строку (solution('world') == 'dlorw')
function solution(str) {
  return str.split('').reverse().join('');
}

// много действий с одной и той же строкой

// цикл чтобы пройтись один раз
function solution(strr) {
  let s = '';
  for(let i = strr.length - 1; i >= 0; i--) {
    s += strr[i];
  }
}
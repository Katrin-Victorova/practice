// таблица умножения
function multiTable(number) {
  let res = '';
  for(let i =1; i <= 10; i++) {
  res += `${i} * ${n} = ${i * n}`;
  if(i < 10) res += '\n';
  }
  return res;
}
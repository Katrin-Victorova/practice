// Sum The Strings - сумма строк
const sumString = (a, b) => {
  return (Number(a) + Number(b)).toString();
}

// const sumString = (a, b) => (+a + +b).toString();


console.log(sumString("4", "5")) // 9
console.log(sumString("34", "5")) // 39
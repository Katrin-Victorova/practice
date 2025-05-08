// isReallyNaN
// если это NaN нужно возвращать true or false
const isReallyNaN = (val) => {
  return Number.isNaN(val);
};

// const isReallyNaN = (val) => Number.isNaN(val);
// const isReallyNaN = Number.isNaN;

console.log(isReallyNaN(37) === false)
console.log(isReallyNaN("37") === false)
console.log(isReallyNaN(NaN) === true)
console.log(isReallyNaN(undefined) === false)
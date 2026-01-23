// To square(root) or not square(root)
// квадратный корень
// [4, 3, 9, 7, 2, 1] -> [2, 9, 3, 49, 4, 1]

function squareOrSquareRoot(array) {
    return array.map(el => {
        if (Number.isInteger(Math.sqrt(el))) {
            return Math.sqrt(el);
        }
        return el ** 2; // Math.pow(el, 2)
    });
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))


// стрелочная компактная с тернарным оператором
const squareOrSquareRoot1 = array => 
  array.map( el => Number.isInteger(Math.sqrt(el))
  ? Math.sqrt(el)
  : el ** 2
        );

console.log(squareOrSquareRoot1([4, 3, 9, 7, 2, 1]))
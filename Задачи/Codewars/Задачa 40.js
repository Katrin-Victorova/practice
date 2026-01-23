// Sum of the first nth term of Series
// вычеслять по формуле 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/ 16
function SeriesSum(n) {
    if(!n) return "0.00"
    let sum = 1; j = 4;
    for (let i = 1; i < n; i++) { 
        sum += 1 / j;
        j += 3;
    }
    return sum.toFixed(2);
}


// решение 2
function SeriesSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += 1 / (1 + i * 3)
    }
    return sum.toFixed(2)
}

console.log(SeriesSum(1)) //1 00
console.log(SeriesSum(2)) //1 25
console.log(SeriesSum(3)) //1 39
console.log(SeriesSum(4)) //1 49
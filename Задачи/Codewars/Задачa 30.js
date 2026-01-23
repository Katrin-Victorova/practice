// Sum without highest and lowest number - массивы
// сделать сумму элементов в массиве, исключая самое маленькое и самое большое число

// [6, 2, 1, 8, 10] = 16
// [1, 1, 11, 2, 3] = 6

function sumArray(array) {
    if (!array || array.length < 2) return 0;

    let min = array[0], max = array[0], sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) min = array[i];
        if (array[i] > max) max = array[i];
        sum += array[i];
    }
    return sum - min - max;
}

console.log(sumArray([6, 2, 1, 8, 10])) //16
console.log(sumArray([1, 1, 11, 2, 3])) //6

// решение 2 он компактый, но мы сортируем, потом удаляем первый и последний и только потом сумируем все значения
// sumArray2 = (arr) => arr ? arr.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0 

// решение 3 близко к первому
function aSumArray(ar) {
    if (!ar || ar.length <= 2) return 0;
    let min, max, result;
    result = 0;
    min = max = ar[0];

    ar.forEach(function (element) {
        result += element;
        min > element ? min = element : max < element ? max = element : element;
    });

    return result - max - min;
}
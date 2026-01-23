// Flatten and sort an array
// массив сделать плоским и отсортеровать в порядке возростания
// Js сортирует по алфавиту держать в уме
// given [[3,2,1],[4,6,5],[],[9,7,8]] -> 1-9

function flattenAndSort(array) {
    let res = [];
    array.forEach(el => {
        if (Number.isInteger(el)) {
            res.push(el)
        } else if (Array.isArray(el) && el.length) {
            res = [...res, ...el];
        }
    })
    return res.sort((a, b) => a - b)
}

console.log(flattenAndSort([[3,2,1],[4,6,5],[],[9,7,8]]))


// просто развернули массив (нету глубокого разворота) для первого уровня супер решение
// function flattenAndSort(array) {
//     return [].concat(...array).sort((a, b) => a - b);
// }


// function flattenAndSort(array) {
//     return flatten(array).sort((a, b) => a - b);

//     function flatten(array) {
//         return array.reduce(function (acc, el) {
//             return acc.concat(Array.isArray(el) ? flatten(el) : el);
//         }, []); // рекурсивное решение и делаем массив плоским
//     }
// }

// function flattenAndSort(a) {
//     return JSON.parse(JSON.stringify([].concat(...a))).sort((a, b) => a - b);
// } уже перебор
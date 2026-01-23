// методы Set
const st01 = new Set([11, 22, 33, 44, 55]);
const st02 = new Set([44, 55, 66, 77, 88]);

// Set.prototype.union = function (otherSet) {
//     // создаём новый Set, копируем в него текущий
//     const result = new Set(this)

//     // добавляем все элементы из другого Set
//     for (const value of otherSet) {
//         result.add(value) // add не добавит дубликат
//     }

//     return result
// }

const st03 = st01.union(st02); // «Возьми всё из первого + всё из второго, но без повторов»
console.log(st03);

// Set.prototype.difference = function (otherSet) {
//     const result = new Set()

//     for (const value of this) {
//         // если элемента нет во втором Set
//         if (!otherSet.has(value)) {
//             result.add(value)
//         }
//     }

//     return result
// }

const st04 = st01.difference(st02); // «Оставь элементы, которые есть в первом, но НЕТ во втором»
console.log(st04);

// Set.prototype.intersection = function (otherSet) {
//     const result = new Set()

//     for (const value of this) {
//         // если элемент есть в обоих Set
//         if (otherSet.has(value)) {
//             result.add(value)
//         }
//     }

//     return result
// }

const st05 = st01.intersection(st02); // «Оставь только то, что есть и там, и там»
console.log(st05);

// Set.prototype.symmetricDifference = function (otherSet) {
//     const result = new Set()

//     for (const value of this) {
//         if (!otherSet.has(value)) {
//             result.add(value)
//         }
//     }

//     for (const value of otherSet) {
//         if (!this.has(value)) {
//             result.add(value)
//         }
//     }

//     return result
// }

const st06 = st01.symmetricDifference(st02); // «Оставь то, что есть ТОЛЬКО в одном из Set»
console.log(st06);

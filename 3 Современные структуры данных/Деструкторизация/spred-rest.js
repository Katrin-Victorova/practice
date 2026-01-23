// spred ...
let s1 = [22, 33, 44];
let s2 = [55, ...s1, 66];

console.log(s2);

// 1 копия
let s3 = [...s1];
console.log(s3);

// 2 конкатенация
let a = [88, 77];
let b = [100, 200];
let s4 = [...b, ...a];
console.log(s4);

// 3 unShift()
let s5 = [999, ...a];
console.log(s5);

// 4  -> в массив
let p = document.querySelectorAll('p');
p = [...p];
let res = p.map(item => item.textContent);
console.log(res);

// 5 удаление дублей
let s6 = [2, 3, 23, 32, 2, 3, 2, 34, 4];
let s7 = [...new Set(s6)];
console.log(s7);

// 6 строка
let s8 = 'ababa';
let s9 = [...s8];
console.log(s9);

// 7 объекты
let b1 = { name: 'test1', param1: 15 };
let b2 = { name: 'test2', param2: 22 };
let resObj = { ...b1 };
console.log(resObj);

// 8 объединяем объекты
let resObj2 = { ...b1, ...b2 }; // важен порядок
console.log(resObj2);

// "добавление" свойство !
let b3 = { ...b1, bike: true };
console.log(b3);

// rest ... - парамент или аргумент говорят
// собирает в массив
function f1(a, ...b) {
	console.log(a);
	console.log(b);
}

f1(1, 2);
f1(1, 2, 3, 4, 5);
f1(1, 2, [3, 4], 9, [22, 33], true);

// пример с переменной
let [s10, ...s11] = [100, 200, 300, 400];
console.log(s11); // [200, 300, 400]

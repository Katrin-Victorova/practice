//  Лайвкодинг - this

// строгий режим 'use string' чтобы не показывать глобальный объект
function f() {
  console.log(this);
}
f();
// что выведет? undefaned

(function () {
  console.log(this === window);
})();
// false если с 'use string'

// Каким будет вывод этого фрагмента кода?
function fun() {
  this.x = 5;
  console.log(this); // {x: 5}
}
var o = new fw();
console.log(o.x); // 5

var oa = {
  fen: function () {
    return this;
  }
}
console.log(o.fen()); // { fen: [Function: fen] }
// ссылаемся на наш обьект, this ссылаеться на обьект в котором эта функция есть

function func () {
  console.log(this) 
}
func.call(window); // window
func.call(func); // [Function: func] 
// call метод для привязки контекста

function cale() {
  console.log(this.toString());
}
cale.call(123) // 123 строка

function userF() {
  console.log(this);
};

let user = {
  g: userF.bind(null)
}

user.g(); // null 
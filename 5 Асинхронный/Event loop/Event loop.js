// Архитекрута браузера
// Data Perdidtence <- user interface -> UI backend
// Data Perdidtence <- browser engine ->
// rendering engine -> Networking -> JS interpreter -> UI backend

// Event loop - не являеться частью JS, движков таких как v8
// Цикл событий предоставляется СРЕДОЙ (браузер или node js)
// Choromion - v8 (браузер) node js - v8 = однако устройства цикла событий в них - РАЗНОЕ!!!
function log(value) {
	console.log(value);
}
log('start'); // 1

setTimeout(() => {
	// setTimeout - 2
	log('timeout'); // 4
}, 3000); // задачи из очереди выполняються только после вызова всех функций из стека

log('end'); // 3

// Как задачи попадают в очередь?

// движок Js решает:
// Куча (heap) и стек вызовов Call stack
// Работа с памятью (выделение и сбор мусора)
// Компиляция JS в машинный код
// Оптимизация (кеши, скрытые классы и прочее)

//

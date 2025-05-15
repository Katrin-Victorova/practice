// Колбэк-функция (callback) в JavaScript — это функция, которая передаётся в другую функцию в качестве аргумента и вызывается внутри неё после выполнения какой-либо операции (например, после завершения асинхронного действия).
setTimeout(() => console.log('Hello, World!'), 5000);

const helloWorkd = () => console.log('Hello, World!');
setTimeout(helloWorkd, 2000);

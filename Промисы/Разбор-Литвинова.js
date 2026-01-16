// Разбор Promise и создание собственной имплементации
const PENDING = 'pending';
const FULFILLED = 'fulfilled'; // resolve(value)
const REJECTED = 'rejected'; // reject(error)

// 1. Конструктор на вход которого переходит executor в свойствах которого две
// функции для успеха и ошибки, которые можно выполнить и изменить состояние.
// console.log(1)
const promise = new Promise((resolve, reject) => {
	// console.log(2)
	resolve('success');
});
console.log(3); // из потока ничего не ушло, потому что колбек вызываеться сразу и все выполняеться синхронно (по порядку)

console.log(promise);

// 2. Используются для отложенного кода
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 1000);
// });

// 3. Resolve, reject можно вызвать только один раз
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject('error'), 100);
//     setTimeout(() => resolve('success 2'), 200);
//     resolve('success');
// });

setTimeout(() => {
	console.log(promise);
}, 400);

// 4. Чтобы перехватить значение используется метод then
// const promise = new Promise((resolve, _reject) => {
//     setTimeout(() => resolve('success'), 100);
// }).then((value) => {
//     console.log(value)
// });

// 5. Чтобы перехватить ошибку также можно использовать метод then
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error('asdfas')), 1000);
// }).then((value) => {
//     console.log(value)
// }, (error) => {
//     console.log(11, error);
// });

// .catch() перехватить может хоть 10 .then()
// 6. Чтобы перехватить ошибку можно использовать метод catch
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error('asdfas')), 1000);
// }).catch((error) => {
//     console.log(error)
// });

// 6. Можно вызывать then сколь угодно раз на одном промисе и получить один и тот же результат
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 1000);
// })

promise.then(value => console.log(value));
promise.then(value => console.log(value));
promise.then(value => console.log(value));
promise.then(value => console.log(value));

// 7. Если вызвать then когда уже состояние было установлено, всё - равно получим значение.
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 1000);
// })

setTimeout(() => {
	promise.then(value => console.log(value));
	promise.then(value => console.log(value));
	promise.then(value => console.log(value));
	promise.then(value => console.log(value));
}, 2000);

// 8. Можно использовать цепочки промисов.
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 1000);
// }).then((value) => {
//     return value + ' first then';
// }).then((value) => {
//     return value + ' second then';
// }).then((value) => {
//     console.log(value)
// });

// 9. Можно возвращать в then новый промис и в then мы получить результат успеха.
// const promise = new MyPromise((resolve, reject) => {
//     resolve('success');
// }).then((value) => {
//     return new MyPromise((resolve, reject) => {
//         setTimeout(() => resolve(value + ' new promise'), 2000);
//     });
// }).then((value) => {
//     console.log(11, value);
// });

// 10. Можно перехватывать ошибки общим методом catch
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => reject('error'), 1000);
// }).catch((error) => {
//     console.log(error);
// })

// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => reject('error'), 1000);
// })

// .then((value) => {
//     console.log(1);
//     return value;
// }).then((value) => {
//     throw new Error('Error');
// }).then((value) => {
//     console.log(2);
//     return value;
// })

// .catch((error) => {
//     console.log(1, error);
//     return 'error was';
//     // поступит любая первая ошибка из прошлых then
// }).then((value) => {
//     console.log(2, value);
// })

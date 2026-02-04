let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (resolve) {
			resolve('Промис выполнился успешно');
		} else {
			reject(new Error('Упс'));
		}
	}, 1000);
});

promise
	.then(data => console.log(data))
	.catch(error => console.log(error))
	.finally(() => console.log('В любом случае'));

// неявный try и cath внутри функции

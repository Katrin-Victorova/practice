function request(delay, isRejected) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isRejected) {
				reject(`${delay} was rejected`);
			} else {
				resolve(`${delay} was resolved`);
			}
		}, delay * 1000);
	});
}

const data = [
	{
		value: 1,
		isRejected: false,
	},
	{
		value: 2,
		isRejected: false,
	},
	{
		value: 3,
		isRejected: false,
	},
];

const promises = data.map(({ value, isRejected }) => {
	return request(value, isRejected);
});

console.log(promises);

(async function () {
	for await (let data of promises) {
		console.log(data);
	}
})();

// Promise.all(promises).then(console.log).catch(console.error);
// Promise.allSettiled(promises).then(console.log).catch(console.error);
// Promise.race(promises).then(console.log).catch(console.error);
// Promise.any(promises).then(console.log).catch(console.error);

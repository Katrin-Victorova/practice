// Разбор методов Promise (all, allSettled, race, any), for await
function request(delay, isRegected) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isRegected) {
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
		isRegected: false,
	},
	{
		value: 2,
		isRegected: false,
	},
	{
		value: 3,
		isRegected: false,
	},
];

const promises = data.map(({ value, isRegected }) => {
	return request(value, isRegected);
});

console.log(promises);

Promise.all(promises).then(console.log).catch(console.error);

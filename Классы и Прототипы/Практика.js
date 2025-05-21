class Car {
	#name = '';

	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

const car = new Car('BMW');
console.log(car.getName()); // BMW

// car. закрыть доступ из вне (privat TS) #this.name

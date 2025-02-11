const logger = {
  keys() {
    console.log("Object.keys:", Object.keys(this))
  },
  keysAndValue() {
Object.keys(this).forEach((key) => {
  console.log("Key:", key)
  console.log("Value:", this[key])
})
  },
}

// const bound = logger.keys.bind({person})
// logger.keys.bind(person)()

// logger.keys.call(person, false, 44)
// logger.keys.apply(person, [false])

class Human {
  isHuman = true

  humanGreet() {
    console.log('greet from human')
  }
}

class Person extends Human {
  constructor(name, age) {
    super()
    this.name = name ?? 'Undefined name'
    this.age = age ?? 'Undefined age'
  }

  sayHello() {
    console.log('Hello from ',this.name)
  }
}

const person1 = new Person('Katrin', 29)
const person2 = new Person('Maks', 33)

person1.sayHello()
person2.sayHello()
console.log(person1)
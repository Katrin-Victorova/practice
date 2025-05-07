// как копировать обьект и избегать мутации обьекта

const person = {
  name: "Bob",
  age: 25
}

// Вариант 1 - ссылки сохроняються
const person1 = Object.assign({}, person)

// Вариант 2 - ссылки сохроняються
const person2 = { ...person }

// Вариант 3 - полностью новый объект,  ссылки на вложенные обьекты не сохроняються
const person3 = JSON.parse(JSON.stringify(person))

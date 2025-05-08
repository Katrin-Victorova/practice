// 1 Модули должны быть одноцелевые
// 2 Распологать все export инструкции внизу файла
// 3 Распологать все import инструкции сверху файла
// 4 По возможности использовать export default

// Модули позволяют структурировать код,
// избегать дублирование блоков кода

// export ... экспортируем часть модулей
// import ... импортировать и вызывать

// мы можем связывать
// const myName = () => {
//   console.log("Katrin")
// }

// export default myName

// еще пример
// const sum = (a, b) => a + b

// export default sum

// несколько экспортов
const one = 1
const two = 2

export {
  one,
  two
}

// есть импорт через as
// import {
//   one as oneRenamed,
//   two
// } from "./Конспект.js"

// терминал npx create-react-app my-app - создаст новое приложение
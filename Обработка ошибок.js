// Поймали ошибку

// try {
//   // выполнение блока кода
// } catch (error) {
//   // Этот блок выполняется в случае возникновения ошибок в блоке try
// }

const fnWithError = () => {
  throw new Error("Some error")
}

try{
  fnWithError() // обернули в try вызов функции
} catch (error) {
  console.error(error) // целая ошибка
  console.log(error.message) // текст об ошибке
}


console.log("Continue...")
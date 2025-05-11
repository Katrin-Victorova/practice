// ASYNC / AWAIT -специальный синтаксис для упрощения работы с промисами

// Асинхроннная функция
async function name(params) {} // всегда возвращает Промис


const asyncFn = async () => {
  return "Success!"
} // всегда возвращает Промис

asyncFn()
.then(value => console.log(value)) // увидим Success!
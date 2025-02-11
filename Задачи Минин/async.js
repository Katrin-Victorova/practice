// Event Loop

// const timeout = setTimeout(() => {
//   console.log('after 2 second')
// }, 2000)

// clearTimeout(timeout)

// let count = 0
// setInterval(() => {
//   console.log('tick', ++count)
// }, 1000)

// function delay(callback, time = 1000) {
//   setTimeout(callback, time)
// }
// delay(() => {
//   console.log('timeout')
// }, 2000)


// промисы
const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1,2,3])
  }, time) // асинхронность
  })
  return promise
}

delay(2500).then((data) => {
  console.log('Timeout', data)
  return data.map((x) => x ** 2)
}).then((data) => {
  console.log(data)
})

// .catch() ловит ошибки
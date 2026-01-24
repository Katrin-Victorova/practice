// Промисы позволяют обрататывать отложенные во времени события (объект)
// Промис - обещание предоставить результат позже (через какое-то время)
// Так-же может вернуть ошибку если результат предоставить невозможно

const muPromise = new Promise((resolve, reject) => { })

// получение результата промиса (then успех) (catch отклонение)
myPromise.then((value) => {}).catch((error) => {})

// получение данных с помощью fethc api
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => console.log(json))
.then(error => console.error(error))


fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => {
  console.log(response)
  return response.json()
}) // явно вернем промис
.then(json => console.log(json))
.then(error => console.error(error))
// Деструкторизация объектов
const userProfile1 = {
  name: "Katrin",
  commentsQty: 22,
  hasSignedAgreement: false,
}

const { name, commentsQty } = userProfile1
const { hasSignedAgreement } = userProfile1

console.log(name)
console.log(commentsQty)

// Деструкторизация массивов
// Важно учитывать порядок
const fruits = ["Apple", "Banana"]
const [fruitsOne, fruitsTwo] = fruits

console.log(fruitsOne)
console.log(fruitsTwo)

// Деструкторизация в функциях
const userProfile = {
  name: "Katrin",
  commentsQty: 22,
  hasSignedAgreement: false,
}

const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
      return `Ures ${name} has no comments`
  }
  return `Ures ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile))
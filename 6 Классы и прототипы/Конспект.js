// Классы позволяют создавать прототипы для объектов
// На основании прототипов создаются экземпляры (независимые)
// Эксземпляры могут иметь собственные свойства и методы
// Наследуют свойства и методы прототипов

// вся цепочка прототипов создается с помощью функций и объектов 
// (js не являеться изначально объектно ориентированным языком програмирования)

class Comment {
  constructor (text) {
    this.text = text
    this.votesQty = 0
  }
  upvote() {
    this.votesQty += 1
  }
}

// создание экземпляра (вызываеться функция)
const firsComment = new Comment("First comment")
console.log(firsComment)

// проверка принадлежности
firsComment instanceof Comment // true
firsComment instanceof Object // true

// вызов унаследованных методов
firsComment.upvote()
console.log(firsComment.votesQty) // 1
firsComment.upvote()
console.log(firsComment.votesQty) // 2
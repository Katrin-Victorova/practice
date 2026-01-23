// Опциональная цепочка — это способ безопасно обращаться к свойствам и методам объектов, которые могут не существовать. Безопасно — значит, что не будет ошибки, если свойство или метод отсутствует.

// ошибка
let user = {};
alert(user.address.street); // ❌ ОШИБКА: Cannot read property 'street' of undefined
// С опциональной цепочкой:
alert(user.address?.street); // ✅ undefined, НО ошибки нет!

// метод
let userAdmin = {
	admin() {
		alert('Я админ');
	},
};

let userGuest = {};

// userAdmin.admin?.()
userAdmin.admin?.(); // Вызовется метод admin -> "Я админ"
// userGuest.admin?.()
userGuest.admin?.(); // Метода admin нет, НО ошибки нет!

// свойство
let userKey = {};
console.log(userKey.address?.street); // undefined

// для методов
user.printAddress?.(); // вызовется только если printAddress существует

const emptyObject = null; // или { 1: 'Hello', 2: 'World' }
let index = 0;
const result = emptyObject?.[++index]; // Тут используется ?. — это значит, что если emptyObject не null и не undefined, то будет попытка взять свойство с ключом ++index. Если emptyObject равен null или undefined, то результат — undefined и правая часть (внутри скобок) НЕ вычисляется!
console.log(result, index); // undefined 0

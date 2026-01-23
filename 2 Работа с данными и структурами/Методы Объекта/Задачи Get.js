// 1: Безопасный доступ к вложенным свойствам
/*
    У вас есть объект user, который может иметь или не иметь вложенные свойства.
    Напишите функцию getStreet(user), которая возвращает улицу пользователя. 
    Если улица не указана, функция должна возвращать строку "Улица не указана".
 */
let user1 = { address: { street: 'Main Street' } };
let user2 = {}; // пользователь без адреса
function getStreet(user) {
	// if (user.address && user.address.street) {
	//     return user.address.street;
	// } else {
	//     return "Улица не указана";
	// }
	return user.address?.street || 'Улица не указана';
	// Современный способ — опциональная цепочка:
}
console.log(getStreet(user1)); // "Main Street"
console.log(getStreet(user2)); // "Улица не указана"

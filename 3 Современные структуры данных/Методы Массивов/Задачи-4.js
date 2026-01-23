// перебор студентов
const students = [
	{
		name: 'Kat',
		age: 22,
	},
	{
		name: 'Maks',
		age: 20,
	},
	{
		name: 'Len',
		age: 27,
	},
];

for (let index = 0; index < students.length; index++) {
	const student = students[index];
	console.log(student, index);
} // { name: 'Kat', age: 22 } 0; { name: 'Maks', age: 20 } 1; { name: 'Len', age: 27 } 2

const students12 = [
	{
		name: 'Kat',
		age: 22,
	},
	{
		name: 'Maks',
		age: 20,
	},
	{
		name: 'Len',
		age: 27,
	},
];

for (const student of students12) {
	student.isStudent = true;
} // более актуальная запись
// чучуть на небольшую значимость for of быстрее работает чем map, forEach

console.log(students12);

// тоже самое но только с map / forEach
students.map((student, index) => {
	student.isStudent = true;
	student.id = index + 1;
	return student;
}); // map

students.forEach((student, index) => {
	student.isStudent = true;
	student.id = index + 1;
	return student;
}); // forEach

// Квадраты и Кубы
const number = [1, 2, 3, 4, 5];

const squares = number.map(square);
const cubes = number.map(cube);

console.log(squares);
console.log(cubes);

function square(element) {
	return Math.pow(element, 2);
}

function cube(element) {
	return Math.pow(element, 3);
}

// Строки
const students = ['Spong', 'Patrick', 'Fase', 'Valeria'];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element) {
	return element.toUpperCase();
}

function lowerCase(element) {
	return element.toLowerCase();
}

// Даты
const dates = ['2024-1-10', '2025-2-20', '2026-3-30'];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
	const parts = element.split('-');
	return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

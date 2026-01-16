// Короткое замыкание и логическое присваивание
// Напишите функцию, которая принимает объект конфигурации и использует || для задания значений по умолчанию.
function createConfig(config) {
	const theme = config.theme || 'light';
	const language = config.language || 'ru';

	return {
		theme,
		language,
	};
}

// Используя &&, проверьте: существует ли пользователь и имеет ли он доступ к "Admin"
const user = {
	name: 'Lera',
	role: 'Admin',
};

const hasAccess = user && user.role === 'Admin';
console.log(hasAccess);

// Используя ||=, задайте значение по умолчанию, если свойство не определено
const settings = {};
settings.theme ||= 'dark';

console.log(settings.theme);

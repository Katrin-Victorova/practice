// Клиент-серверное взаимодействие
const loadPostFormElement = document.querySelector('.load-todo-form');
const postIdInputElement = document.querySelector('.todo-id');
const resultElement = document.querySelector('.result');

loadPostFormElement
	.addEventListener('submit', event => {
		event.preventDefault();

		fetch(`http://localhost:3000/post/${postIdInputElement.value}`)
			.then(response => {
				console.log('response:', response);

				if (!response.ok) {
					const errorMessage =
						response.status === 404
							? 'Пост по указанному идентификатору не найдена'
							: 'Что-то пошло не так :(';

					throw new Error(errorMessage);
				}

				return response.json();
			})
			.then(json => console.log(json));

		const { title, views } = json;

		resultElement.innerHTML = `
		<p${title}, просмотров: ${views}></p$>
		`;
	})
	.catch(error => {
		resultElement.innerHTML = error.message;
	});

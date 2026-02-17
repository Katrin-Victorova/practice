// видео https://www.youtube.com/watch?v=DuWyc76lYC4 (DOM) за час

// ------------------------------------------------------------------------------------------
//BOM
//Navigator - С помощью объекта navigator, мы можем получить информацию о самом браузере и операционной системе.

//Браузер
console.log(navigator.userAgent);

if (navigator.userAgent.includes('Chrome')) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes('Firefox')) {
	console.log('Браузер Firefox');
}

//Платформа
console.log(navigator.platform);

//Location - С помощью объекта location мы можем получить текущий URL или перенаправить браузер по новому адресу.

//Получаем URL
console.log(location.href);

//Меняем URL - location.href = "https://fls.guru";

//History - Объект history позволяет управлять историей браузера, передвигаться по посещенным ранее страницам.

history.back();
history.forward();

// DOM
// Навигация по документу
// Самые верхние элементы дерева доступны как свойства объекта document
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body; // получаем объект

// Первый и последний дочерний элементы
const firstChildNode = bodyElement.firstChild;
const lastChaldNode = bodyElement.lastChild;

// Коллекция childNodes содержит список всех детей, включая текстовые узлы
const childNodes = bodyElement.childNodes;

// Для проверки наличия дочерних узлов существует также специальная функция
console.log(bodyElement.hasChildNodes());

/*
Как мы уже видели,
childNodes похож на массив. На самом деле это не массив,
а коллекция -- особый перебираемый объект -- псевдомассив.

Отличия от массивов:
1.Для перебора коллекции мы можем использовать for..of:
2.Методы массивов не будут работать, потому что
коллекция - это не массив
*/

// Перебор коллекции
for (let node of childNodes) {
	console.log(node); // покажет все узлы из коллекции
}

// "Живые" коллекции
/*
Почти все DOM-коллекции, за небольшим исключением, "живые".
Другими словами, они отражают текущее состояние DOM.
Если мы сохраним ссылку на body.childNodes и добавим/удалим
узлы в DOM, то они появятся в сохранённой коллекции автоматически.
Еще вернемся к этому позже.
*/

//Только для чтения
/*
DOM-коллекции, и даже более -- все навигационные свойства,
перечисленные далее, доступны только для чтения.
Мы не можем заменить один дочерний узел на другой,
просто написав childNodes[i] = .....
Для изменения DOM требуются другие методы.
*/

// Соседние и родительские узлы
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = body.Element.parentNode;

/*
Навигационные свойства, описанные выше, относятся
ко всем узлам в документе.
В частности, в childNodes находятся и текстовые узлы и
узлы-элементы и узлы-комментарии, если они есть.
*/

// Получаем коллекцию всех дочерних узлов
const childNodes1 = bodyElement.childNodes;

/*
Но для большинства задач текстовые узлы и
узлы-комментарии нам не нужны. Мы хотим манипулировать
узлами-элементами, которые представляют собой теги и
формируют структуру страницы.
*/

// Получаем коллекцию всех дочерних элементов
const bodyChildren = bodyElement.children;

// Первый и последний дочерние элементы
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;

// Соседние и родительский элементы
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

// Поиск произвольного элемента
// ele.querySelectorAll(CSS)

// Самый универсальный метод поиска, он возвращает все элементы внутри elem, удовлетворяющие донному CSS-селектору.
// Этот метод действительно мещный, потому что можно использовать любой CSS-селектор

// Поиск по селектору класса
const elemOne = document.querySelectorAll('.lesson_list');

// Поиск по селектору тега
const elemTwo = document.querySelectorAll('li');

// Поиск по смешаному селектору тега и класса
const elemThree = document.querySelectorAll('li.lesson_list');

// Поиск по тегу первого уровня вложенности
const elemFour = document.querySelectorAll('.lesson_list>li');

// Поиск по нескольким классам
const elemFive = document.querySelectorAll('.lesson_list, .lesson_text');

// Поиск по вложенным классам
const elemSix = document.querySelectorAll('.lesson_list .lesson_text');

// Поиск по ID
const elemSeven = document.querySelectorAll('#listItem');

// Поиск по атрибуту
const elemEight = document.querySelectorAll('[data-item]');

// Поиск по атрибуту со значением
const elemNine = document.querySelectorAll('[data-item="85"]');

// Искать можно не только в document
const subList = document.querySelectorAll('.lesson__sub-list');
const subItems = subList[0].querySelectorAll('li');
console.log(subItems);

// Неожиданный результат поиска
const listItems = subList[0].querySelectorAll(
	'.lesson__list .lesson__item-sub-list',
);

/*
В данном примере,
когда мы выбрали ".lesson__list .lesson__item-sub-list"
в контексте <ul> с классом "lesson__sub-list", элемент с классом
".lesson__item-sub-list" был всё равно найден, хотя
.lesson__list не является потомком элемента в котором происходил
поиск (".lesson__sub-list").

По умолчанию, querySelectorAll() проверяет только последний
элемент без учёта контекста.
*/

// Возвращает первый элемент внутри elem, соответствующий данному CSS-селектору
const lessonList = document.querySelector('.lesson__list');

// Если у элемента есть атрибут id, то мы можем получить его вызовом document.getElementById(id), где бы он ни находился.
const elem = document.getElementById('listItem');

/*
1. id - уникален
2. Поиск только внутри document.
*/

//getElementsBy* - ВНИМАНИЕ - getElementsBy... а не getElementBy...

// elem.getElementsByTagName(tag) ищет элементы с данным тегом и возвращает их коллекцию.
// Передав "*" вместо тега, можно получить всех потомков.
const elems = document.getElementsByTagName('li');

// elem.getElementsByClassName(className) возвращает элементы, которые имеют данный CSS - класс.
const elemss = document.getElementsByClassName('lesson__item-list');

// document.getElementsByName(name) возвращает элементы
// с заданным атрибутом name. Очень редко используется. Поиск только внутри document.
const elemsss = document.getElementsByName('list');
console.log(elems);

/*
Метод поиска              | Ищет по...            | Возвращает              | Ищет внутри элемента? | Живая коллекция?
---------------------------------------------------------------------------------------------------------------
querySelector             | Любой CSS-selector    | Один объект             | Да                    | Нет
querySelectorAll          | Любой CSS-selector    | Коллекцию объектов      | Да                    | Нет
getElementById            | id                    | Один объект             | Нет                   | Нет
getElementsByTagName      | тег или *             | Коллекцию объектов      | Да                    | Да
getElementsByClassName    | имя класса            | Коллекцию объектов      | Да                    | Да
getElementsByName         | name                  | Коллекцию объектов      | Нет                   | Да
*/

// Поиск произвольного элемента - closest

/* Метод elem.closest(css) ищет ближайшего предка, который соответствует CSS - селектору. Сам элемент также включается в поиск.
Предки элемента это родитель, родитель родителя, его родитель и так далее. Вместе они образуют цепочку иерархии от элемента до вершины.

Другими словами, метод closest поднимается вверх от элемента и проверяет каждого из родителей. Если он соответствует селектору,
поиск прекращается. Метод возвращает либо предка, либо null, если такой элемент не найден.

Напомню свойство parentElement возвращает только
непосредственного родителя элемента */

const elem2 = document.querySelector('.lesson__item-sub-list');
const parentList = elem.closest('.lesson__list');

// Очень полезный метод, часто используется для проверки на существование
// того или иного родителя, либо для измененияродителя конкретного элемента

// Поиск произвольного элемента - Проверка matches

// ничего не ищет, а проверяет, удовлетворяет ли
// элемент CSS-селектору, и возвращает true или false.

const elems1 = document.querySelectorAll('.lesson__item-list');

for (let elem of elems) {
	if (elem.matches('[class$="lesson__item-list_red"]')) {
		console.log('Красный');
	} else if (elem.matches('[class$="lesson__item-list_blue"]')) {
		console.log('Синий');
	}
}

// Изменение документа:
// Содержимое элемента innerHTML

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;
//console.log(textElementContent);

// Получаем содержимое объекта "как есть" вместе с HTML, а также сам элемент
const textElementContent1 = textElement.outerHTML;

// Получаем объект
const textElement1 = document.querySelector('.lesson__text');
const textElementContent2 = textElement.textContent;
// Полезная возможность textContent - записывать текст "безопасным способом".

// Перезаписываем содержимое объекта
textElement.innerHTML = 'Живи, а работай в свободное время!';

// Дописываем содержимое объекта
textElement.innerHTML = `
<p>${textElementContent}</p>
<p>Живи, а работай в <span class="yellow">свободное</span> время!</p>
`;
// console.log(textElement.innerHTML);

// Создание элементов и узлов.

// Создание нового элемента (тега)
const newElement = document.createElement('div');

// Наполняем новый элемент
newElement.innerHTML =
	'Живи, а работай в <span class="yellow">свободное</span> время!';

// Создание нового текстового узла
const newText = document.createTextNode('Привет!');

// Созданные объекты находятся в константах, но не являются частью документа

// Вставляем новый элемент...
// ...перед объектом - textElement.before(newElement);
// ...после объекта - textElement.after(newElement);
// ...внутрь и в начало объекта - textElement.prepend(newElement);
// ...внутрь и в конец объекта - textElement.append(newElement);

// Методы вставки

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Создание нового элемента (тега)
const newElement = document.createElement('div');

// Наполняем новый элемент
newElement.innerHTML =
	'Живи, а работай в <span class="yellow">свободное</span> время!';

// Вставка нескольких фрагментов сразу
textElement.append(newElement, 'Привет!');

// Можно вставлять строку textElement.append('Живи, а работай в <span class="yellow">свободное</span> время!');

// Другими словами, строки вставляются безопасным способом, как делает это textContent. Поэтому эти методы могут
// использоваться только для вставки DOM-узлов или текстовых фрагментов. А что, если мы хотим вставить
// HTML именно "как HTML", со всеми тегами и прочим, как это делает innerHTML?

// Вставляем текст, HTML, элемент
/*
textElement.insertAdjacentHTML(
	'afterend',
	`<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`
);
*/

// "beforebegin" — вставить html непосредственно перед textElement,
// "afterbegin"  — вставить html в начало textElement,
// "beforeend"   — вставить html в конец textElement,
// "afterend"    — вставить html непосредственно после textElement.

// Методы вставки
/*
Дополнительно существуют
insertAdjacentText и insertAdjacentElement
*/

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Вставляем текст
textElement.insertAdjacentText(
	'beforeend',
	'Живи, а работай в <span class="yellow">свободное</span> время!',
);

// Создание нового элемента (тега)
const newElement = document.createElement('div');

// Наполняем новый элемент
newElement.innerHTML =
	'Живи, а работай в <span class="yellow">свободное</span> время!';

// Вставляем элемент
textElement.insertAdjacentElement('beforeend', newElement);

/* На практике часто используется только insertAdjacentHTML.
Потому что для элементов и текста у нас есть методы append/prepend/before/after 
— их быстрее написать,и они могут вставлять как узлы, так и текст. */

// Перенос элемента

/* Мы можем вставлять не только новые узлы, но и переносить существующие.
Все методы вставки автоматически удаляют узлы со старых мест. */

// Получаем объект
const lessonBlock = document.querySelector('.lesson');

// Получаем объект
const title = document.querySelector('h3');

// Переносим title в конец блока lessonBlock
lessonBlock.append(title);

// Клонирование узлов cloneNode
// Если нужен не перенос, а именно копия элемента

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Клонирование без дочерних элементов
const cloneTextElement = textElement.cloneNode();

// Глубокое клонирование вместе с содержимым
//const cloneTextElement = textElement.cloneNode(true);

const lessonBlock1 = document.querySelector('.lesson');
lessonBlock.append(cloneTextElement);

// Удаление узлов

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Удаляем объект
textElement.remove();

// ------------------------------------------------------------------------------------------
// Стили и классы

// Управление классами
// Свойства className и classList

// Изменение класса является одним из наиболее часто используемых действий в JavaScript.

// Свойство className

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Получаем имена классов
const elementClassNames = element.className;
console.log(elementClassNames);

// Перезаписываем имя класса
element.className = 'red';

// Управление классами
// Свойства className и classList

// Свойство classList
// Специальный объект с методами для добавления/удаления одного класса.

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Добавить класс
element.classList.add('active');

// Удалить класс
element.classList.remove('active');

// Добавить класс, если его нет, а если есть удалить.
element.classList.toggle('active');

// Проверка наличия класса, возвращает true/false.
element.classList.contains('active');

//classList является перебираемым, поэтому можно
//перечислить все классы при помощи for..of
for (let className of element.classList) {
	console.log(className);
}
// Управление стилями

// element.style

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Задаем стиль с помощью CSS свойства
element.style.color = 'red';

// Для свойства из нескольких слов используется camelCase:
// margin-bottom
element.style.marginBottom = '30px';

// z-index
element.style.zIndex = '10';
// и т.д. Каждое свойство пишется отдельно

// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.marginBottom);

// Сброс стиля
element.style.marginBottom = '';

// Полная перезапись стилей - style.cssText

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

element.style.cssText = `
	margin-bottom: 30px;
	color: red;
`;

// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.fontSize);

// Стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);

// Вычисленные стили getComputedStyle(element, [pseudo])

// Стиль псевдоэлемента
const elementBeforeStyle = getComputedStyle(element, '::before');
console.log(elementBeforeStyle.backgroundColor);

// Чтобы получить конкретное значение
// Следует писать точное (полное) свойство

// Получаем точное значение
console.log(elementStyle.paddingLeft);

// Получаем не предсказуемую запись
console.log(elementStyle.padding); // В FF <empty string>

// Лайфхаки

// Получаем число
const paddingLeft = parseInt(elementStyle.paddingLeft);
console.log(paddingLeft);

// Помним про единицы измерения
element.style.marginLeft = '20px';

// Как мы уже поняли, из JS мы можем управлять как классами так и стилями объекта.

// Управлять классами - более приоритетный вариант по сравнению со стилями.

// Манипулировать свойством style следует только в том случае, если классы нам помочь не могут.
// Например, при изменении координат объекта на лету.

// Одним словом, если мы можем возложить решение той или иной задачи на плечи CSS
// путем манипуляции с классами, то так и следует сделать!

// ------------------------------------------------------------------------------------------
// Атрибуты и свойства

/*
У разных DOM-элементов могут быть разные свойства.
Например, у тега <a>, есть свойства, связанные со ссылками,
а у тега <input> — свойства, связанные с полем ввода и т.д.

В HTML у тегов могут быть атрибуты.
Когда браузер парсит HTML, чтобы создать
DOM-объекты для тегов, он распознаёт стандартные
атрибуты и создаёт DOM-свойства для них.

Каждый DOM-узел принадлежит соответствующему встроенному классу.
*/

const link = document.querySelector('.lesson__link');
const input = document.querySelector('.lesson__input');

console.log(link.href);
console.log(input.href);

//console.log(input.value);
//console.log(link.value);

// Получить список доступных свойств
//console.dir(link);

// Произвольные атрибуты

// Получаем элемент
const lessonText = document.querySelector('.lesson__text');

// Проверяем наличие атрибута
lessonText.hasAttribute('name');

// Получаем значение атрибута
lessonText.getAttribute('name');

// Устанавливаем значение атрибута
lessonText.setAttribute('name', 'value');

// Удаляем атрибут
lessonText.removeAttribute('name');

// Пример
// Устанавливаем значение атрибута
lessonText.setAttribute('some-attribute', 'some-value');

// Проверяем наличие атрибута
if (lessonText.hasAttribute('some-attribute')) {
	console.log('some-attribute существует!');
}

// Синхронизация между атрибутами и свойствами

// Мы можем обратиться к тому или иному свойству через методы доступа к атрибутам.
// Когда стандартный атрибут изменяется, соответствующее свойство автоматически обновляется.
// Это работает и в обратную сторону (за некоторыми исключениями).

// Получаем элемент
const input1 = document.querySelector('.lesson__input');

input.setAttribute('id', '123');
console.log(input.id);

input.id = '321';
console.log(input.getAttribute('id'));

// Нестандартные атрибуты, dataset
// Мы уже использовали произвольные атрибуты, но это рискованно.
// Все атрибуты, начинающиеся с префикса «data-», зарезервированы для использования программистами.
// Они доступны в свойстве dataset.

// Получаем data-атрибут
console.log(lessonText.dataset.size);

// Перезаписываем data-атрибут
//lessonText.dataset.size = "5810";
//console.log(lessonText.dataset.size);

// Полезные свойства

// Получаем тег элемента
console.log(link.tagName);

// Скрыть/показать элемент
console.log(link.hidden);
//link.hidden = true;

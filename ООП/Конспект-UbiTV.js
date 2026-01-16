// Объектно-Ориентированное Программирование

// S.O.L.I.D. ---------------- Каталог паттернов проектирования
/* =========================== Порождающие ===========================
   Русское название          | Английское название
   ---------------------------------------------------------------
   Фабричный метод           | Factory Method
   Абстрактная фабрика       | Abstract Factory
   Строитель                 | Builder
   Прототип                  | Prototype
   Одиночка                  | Singleton
   ==================================================================

   =========================== Структурные ===========================
   Адаптер                   | Adapter
   Мост                      | Bridge
   Компоновщик               | Composite
   Декоратор                 | Decorator
   Фасад                     | Facade
   Легковес                  | Flyweight
   ==================================================================

   ========================== Поведенческие ==========================
   Цепочка обязанностей      | Chain of Responsibility
   Команда                   | Command
   Итератор                  | Iterator
   Посредник                 | Mediator
   Снимок                    | Memento
   Наблюдатель               | Observer
   Состояние                 | State
   Стратегия                 | Strategy
   Шаблонный метод           | Template Method
   Посетитель                | Visitor
   ==================================================================
*/

// подобный подход называеться процедурным
// const width = 5
// const height = 10

// function calcRectArea(width, height) {
//     return width * height;
// }

// console.log(calcRectArea(width, height)) // площать прямоугольника

// класс - Человек
// класс - описание характеристик, а обьект конкретный экземпляр - каждая характеристика имеет значение

/**
 * Свойства:
 * Имя
 * Возраст
 * Вес
 * Рост
 */

/**
 * Методы:
 * Ходить
 * Писать код
 * Рисовать
 * Говорить */

// class Rectangle {
//     private_width; // скрытая часть
//     private_height; // скрытая часть

//     constructor(w, h) {
//         this._width = w;
//         this._height = h;
//     }

//     calcArea() {
//         return this._width * this._height;
//     }

//     get width() { // просто вернем ширину обьекта
//         return this._width
//     }
//     set width(value) { // новое значение либо доп действия
//         if (value <= 0) { // значение не может быть отрицательным
//             this._width = 1;
//         } else {
//         this._width = value
//     }

//     }

//     calcPrimeter() {
//     return (this._height + this._width) * 2
//     }
// }

// const rest = new Rectangle(4, 8)
// rest.width = -2

// console.log(rest.calcArea()) // площать прямоугольника

// ООП - 3 основные концепции
// Инкапсуляция
// Наследование
// Полиморфизм

// Инкапсуляция и сокрытие
// скрытая часть - на что мы повлияеть не можем private
// Качать кровь
// Обрабатывать информацию

// class User {
//     private_username;
//     private_password;
//     private_id;

//     constructor(username, password) {
//         this._username = username;
//         this._password = password;
//         this._id = generateRandomId();
//     }

//     get username() {
//         return this._username;
//     }

//     set username(value) {
//         this._username = value;
//     }

//     get password() {
//         return this._password;
//     }

//     set password(value) {
//         this._password = value;
//     }

//     get id() {
//         return this._id;
//     }

//     // set id(value) { удаляем так как id у нас статичный и изменяться не может
//     //     this._id = value;
//     // }
// }

// const user = new User('Katrin', 'Marvel');
// user.username = 5;

// свойства изменять не можем, но можем их получать
// class Database { // база данных
//     private_url;
//     private_port;
//     private_username;
//     private_password;
//     private_tables;

//     constructor(url, port, username, password) {
//         this._url = url;
//         this._port = port;
//         this._username = username;
//         this._password = password;
//         this._tables = [] // напрямую изменить массив мы не можем
//     }

//     // public createNewTable(table) { // взаимодействуем с массивом
//     //     this._tables.push(table);
//     // }

//     // public clearTables() { // удалить таблицы и затем вызвать метод
//     //     this._tables = []
//     // }

//     get url() {
//         return this._url;
//     }

//     set url(value) {
//         this._url = value;
//     }

//     get port() {
//         return this._port;
//     }

//     set port(value) {
//         this._port = value;
//     }
//     get username() {
//         return this._username;
//     }

//     set username(value) {
//         this._username = value;
//     }

//     get password() {
//         return this._password;
//     }

//     set password(value) {
//         this._password = value;
//     }

//     get tables() {
//         return this._tables;
//     }

// }

// const db = new Databasee(1, 2, 3, 4)
// db.createNewTable({name: 'roles'})
// db.createNewTable({ name: 'users' })
// db.clearTables() // в этом и кроеться основная суть инкопсуляции и сокрытия

// Наследование
// Класс - Человек -> Класс - Работник - ИНН, СНИЛС, Серия, Номер -> Класс - Разработчик - Язык Пр. Уровень, Команда
// расширает класс Человека
// class Person {
//     private_firstName;
//     private_lastName;
//     private_age;

//     constructor(firstName, lastName, age) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._age = age;
//     }

//     // public greeting() {
//     //     console.log(`Привет я человек и меня зовут ${this._firstName}`)
//     // }

//     // public get fullName() {
//     //     return `Фамилия - ${this._lastName} Имя - ${this._firstName}`
//     // }

//     get firstName() {
//         return this._firstName;
//     }

//     set firstName(value) {
//         this._firstName = value;
//     }

//     get lastName() {
//         return this._lastName;
//     }

//     set lastName(value) {
//         this._lastName = value;
//     }

//     get age() {
//         return this._age;
//     }

//     set age(value) { // немного изменяем
//         if (value < 0) {
//             this._age = 0
//         } else {
//             this._age = value;
//         }
//     }
// }

// class Employee extends Person { // расширим уже существуеющий класс
//     private_inn;
//     private_number;
//     private_snils;

//     constructor(firstName, lastName, age, inn, number, snils) {
//         super(firstName, lastName, age);
//         this._inn = inn;
//         this._number = number;
//         this._snils = snils;
//     }

//     greeting() { // переопределить метод чтобы приветсвие было разным
//     onsole.log(`Привет я работник и меня зовут ${this._firstName}`)
//     }
// }

// const Employee1 = new Employee('Katrin', 'TV', 22, 24933234, 1234678, NDS13123)
// consloe.log(Employee1)

// class Developer extends Employee{
//     privat_level;

//     constructor(firstName, lastName, age, inn, number, snils, level) {
//         super(firstName, lastName, age, inn, number, snils);
//         this._level = level;
//         this._language = language
//     }

//     greeting() { // переопределить метод чтобы приветсвие было разным
//         onsole.log(`Привет я разработчик и меня зовут ${this._firstName}`)
//     }
// }

// const ulbiTv = new Developer('Katrin', 'TV', 22, 24933234, 1234678, NDS13123, 'Senior', 'JavaScript')
// const employee = new Employee('Maks', 'TV', 22, 234, 78, NDS1243,)
// const person = new Person('Person', 'TV', 22)

// ulbiTv.greeting()
// employee.greeting()
// person.greeting()

// const personLis: Person[] = [ulbiTv, employee, person]

// function massGreeting(Person[]) {
//     for (let i = 0; i < person.length; i++) { // итерируемся по массиву, у нас 3 разных типа но функция работает одинакового со всеми
//         const person = person[i];
//         person.greeting()
//     }
// }
// massGreeting(personLis)

// console.log(ulbiTv.fullName)

// Полиморфизм - имеет много форм
// 1 тип - Параметрический (истинный) - 2 тип - ad-hoc (мнимый)
// мы реализовали функции где в комнате все друг друга смогли приветсвовать
// у нас много форм но работаем мы с ними по сути одинакого

// 2 тип ad-hoc - приведение типов - янвно преобразовываем к родительскому
// class Calculator {
//     add(a: number, b: number): number {
//         return a + b
//     }
//     add(a: string, b: string): string {
//         return a + b
//     }
// }
// add(5, 5) -> result = 10;
// add('5', '5') -> result = '55';

// Взаимодействие между классами
// Агрегация и Композиция
// Класс - Автомобиль
// Двигатель и 4 колеса не могут существовать отдельно (составные части автомобиля)
// - в этом и есть основное отличие
// <- елочка освежитель передаеться от куда-то из вне (может существовать где угодно)

// Композиция
// Класс - Автомобиль
// Двигатель и 4 колеса не могут существовать отдельно (составные части автомобиля)

// class Engine {
//     drive() {
//         console.log('Двигатель работает')
//     }
// }

// class Wheel {
//     drive() {
//         console.log('колеса едут')
//     }
// }

// class Freshener { // освежиель
// }

// class Flat { // квартира в которой будем использовать освежитель
//     freshener: Freshener;

//     constructor(freshener) {
//         this.freshener = freshener;
//     }
// }

// class Car { // создаються внутри конструктора класса CAR! а не в не
//     engine: Engine;
//     wheels: Wheel[];
//     freshener: Freshener;

//     constructor(freshener) {
//         // Агрегация
//         this.freshener = freshener;
//         //Композиция
//         this.engine = new Engine() // двигатель
//         this.wheels = []
//         this.wheels.push(new Wheel()) // колеса
//         this.wheels.push(new Wheel())
//         this.wheels.push(new Wheel())
//         this.wheels.push(new Wheel())
//     }

//     // делегирование
//     drive() {
//         this.engine.drive();
//         for (let i = 0; i < this.wheels.length; i++) {
//             this.wheels[i].drive()
//         }
//     }
// }

// Абстрактные классы и интерфесы

// Интерфейсы

// interface Client {
//     connect(url: stringh)void;
//     read(): stringh;
//     write(date: string): void;
// }

// из Интерфейса не сделать обьект
// const client = new Client()

// Абстрактный класс
// abstract class Client {
//     connect(url: string): void {
//         // здесь логика
//     }
//     abstract read(): string;
//     abstract wrine(data: string): void;
// }

// Можно обьявлять абстрактные методы - будут аналогом методов в интерфесы (не будет реализации)
// Можно создавать обычные методы с какой-то логикой
// И класс который будет реализован от Абстрактного, унаследует от себя все обычные методы
// и так же должен будет реализовавыть методы Абстрактные (тоесть в них должна быть какая-то логика)

// Интерфейсы на практике встречаються чаще
// позволяют писать более гибкий код, достигать более гибкого полиморфизма
// и в целом систему необходимо проектировать на уровне Интерфейсов
// interface Reader {
//     read(url);
// }

// interface Writer {
//     write(data);
// }

// class FileClient implements Reader, Writer {
//     read(url) {
//         // логика
//     }
//     write(data) {
//         // логика
//     }
// }

// class User {
//     username: string;
//     age: number;
// }

// interface Repository { // 4 метода - так называемый крут
//     create: () => void; // чтение
//     get: () => void; // получение
//     delete: () => void;
//     update: () => void; // обновление
// }
// interface Repository<T> { // делаем джинерик обопщение, в данном случае тип T что-то общее
//     create: (obj: T) => T;
//     get: () => T;
//     delete: (obj: T) => T;
//     update: (obj: T) => T;
// }

// class UserRepo implements Repository <User> {
//     create(obj: User): User {
//         return undefined
//     }
//     get(): User {
//         return undefined
//     }
//     delete(obj: User): User {
//         return undefined
//     }
//     update(obj: User): User {
//         return undefined
//     }
// }

// Внедрение зависимостей
// слой 1 - Работа с базой данных

// слой 2 - Бизнес-логика

// interface UserRepo {
//     getUsers: () => User[];
//     // delete, create
// }

// class UserMongoDBRepo implements UserRepo {
//     getUsers(): User[] {
//         console.log('Используем подключение к могно и получаем пользователей')
//         return [{age: 15, username: 'Пользователь из МОНГО ДБ'}];
//     }
// }

// class UserService {
//     userRepo: UserRepo;

//     constructor(userRepo: UserRepo) { // принимает от куда-то из вне
//         this.userRepo = userRepo;
//     }

//     filterUserByAge(age: number) {
//         // лучше делать фильтрацию на уровне базы данных, но на данный момент сойдет
//         const users = this.userRepo.getUsers()
//         //...какая то логика по фильтрации
//         console.log(users);
//     }
// }

// const userService = new UserService(new UserMongoDBRepo())
// userService.filterUserByAge(11)

// singleton паттерн проектирования
// class Database {
//     url: number;
//     private static instance: Database;

//     constructor() {
//         this.url = Math.random();
//     }
// }

// const db1 = new Database()
// const db2 = new Database()

// console.log(db1.url)
// console.log(db2.url)

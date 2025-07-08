// 3 июля + лайфкодинг

const nums = [1, 2, 3, 4];
const fruits = ['apple', 'banana'];

// const index = 1
// console.log(fruits[index])

for (let i = 0; i <= 1; i++) {
	// console.log(fruits[i])
	logFruit(fruits[i]);
}

function logFruit(fruit) {
	console.log(fruit);
}

const players = [
	{ id: 1, name: 'Лионель Месси', teamId: 1, countryId: 1, goals: 30 },
	{ id: 2, name: 'Криштиану Роналду', teamId: 2, countryId: 2, goals: 25 },
	{ id: 3, name: 'Неймар', teamId: 3, countryId: 3, goals: 20 },
	{ id: 4, name: 'Килиан Мбаппе', teamId: 3, countryId: 4, goals: 22 },
	{ id: 5, name: 'Златан Ибрагимович', teamId: 4, countryId: 5, goals: 15 },
];

// map - вывести только все голы (значение)
const result = players.map(players => players.goals);
// console.log(result)

// filter - вернуть голы у кого больше > 20
const goalsMoreThanTwenty = players.filter(players => players.goals > 20);
// console.log(goalsMoreThanTwenty)

// sort - у кого больше голов забито (убывание)
const sortedGoals = players.sort((a, b) => b.goals - a.goals);
// console.log(sortedGoals)

// find - найти игрока с командой 4
const teamId4 = players.find(p => p.teamId === 4);
// console.log(teamId4)

// reduce группируем по странам = {1: []} ???
const playersByCountries = players.reduce((acc, player) => {
	if (acc.hasOwnProperty(player.countryId)) acc[player.countryId].push(player);
	else acc[player.countryId] = [player];
	return acc;
}, []);
// console.log(playersByCountries)

// some - есть ли у нас игрок из команды 3 ?
const isPlayerFromTeam3 = players.some(p => p.teamId === 3);
// console.log(isPlayerFromTeam3)

// every - все ли игроки из страны 2
const isAllevertCountry2 = players.every(p => p.countryId === 2);
// console.log(isAllevertCountry2)

// вывести 3х крутых футболистов
const sortedGoals2 = players.sort((a, b) => b.goals - a.goals);
// console.log(sortedGoals2.slice(0, 3))

// splice - вырезать из нашего массива игрока из команды 3
const index = players.findIndex(el => el.teamId === 3);
players.splice(index, 1);
// console.log(players)

// удалить последнего игрока и добавить его в начало
const removedLastPlayer = players.pop();
const addPlayweToStart = players.unshift(removedLastPlayer);
// console.log(players)

// concat - половину элементов сначала переместить в конец [4, 5, 1, 2, 3]
const slicOfPlayers = players.slice(3);
const slicOfPlayers1 = players.slice(0, 3);
const changedListOfPlayers = slicOfPlayers.concat(slicOfPlayers1);
// console.log(changedListOfPlayers)

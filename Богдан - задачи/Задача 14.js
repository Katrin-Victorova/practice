// Строка заглавными буквами + оператор instanceof
const myFavoritSeason = 'summer';

console.log(myFavoritSeason instanceof String);
console.log(typeof myFavoritSeason);

const seasonToUpperCase = myFavoritSeason.toUpperCase();
console.log(seasonToUpperCase);

// экземпляр строки (есть доступ к всем методам)
const myString = new String('Katrin');
console.log(myString instanceof String);
console.log(typeof myString);
console.log(myString.toLocaleLowerCase());

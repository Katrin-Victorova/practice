// Keep Hydrated!
// 0.5 пьет мальчик в час, сколько воды он выпьет? округляем к меньшему
// time = 3 ---> liters = 1
// time = 6.7 ---> liters = 3
// time = 11.8 ---> liters = 5
const litres = (time) => Math.floor(time * 0.5);

console.log(litres(11.8))
// Is he gonna survive?
// каждому дракону нужно 2 пули и он умрет
// нужно выяснить сможет ли он победить или нет?
// bullets - пули, dragons - дракон
function hero(bullets, dragons) {
  return dragons * 2 <= bullets;
}

console.log(hero(10, 5)) //true
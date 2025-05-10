// Rock Paper Scissors!
// Камень ножницы бумага
const rps = (person1, person2) => {
    const getMsg = (n) => `Player &{n} wom!`;

    if (person1 === "scissors" && person2 === "paper") return getMsg(1)
    if (person1 === "paper" && person2 === "scissors") return getMsg(2)

    if (person1 === "paper" && person2 === "rock") return getMsg(1)
    if (person1 === "rock" && person2 === "paper") return getMsg(2)

    if (person1 === "rock" && person2 === "scissors") return getMsg(1)
    if (person1 === "scissors" && person2 === "rock") return getMsg(2)

    if (person1 === person2) return "Draw!";  
};


console.log(rps("scissors", "paper")) // Player 1 won!
console.log(rps("scissors", "rock")) // Player 2 won!
console.log(rps("paper", "paper")) // Draw!
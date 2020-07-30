
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
   const num = Math.floor(Math.random() * 10)
   return num;
}

const compareGuesses = (human, computer, secret) => {
    const humanGuess = Math.abs(human - secret)
    const compGuess = Math.abs(computer - secret)
    if (humanGuess < compGuess || humanGuess == compGuess){
        return true
    } else {
        return false
    }
}

const updateScore = (winner) => {
    if (winner == 'human'){
        humanScore = humanScore + 1;
    } else {
        computerScore = computerScore + 1;
    }
}

const advanceRound = () => {
    currentRoundNumber = currentRoundNumber + 1;
}

console.log(compareGuesses())
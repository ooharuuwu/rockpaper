

let humanScore = 0
let computerScore = 0

const list = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

function getHumanChoice() {
    let input = prompt("Rock! Papers! Scissors! ??")
    return input
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}


for(let i =0; i<5; i++) {
    const humanChoice = getHumanChoice().toLowerCase()  
    const computerChoice = list[getComputerChoice()]
    playRound(humanChoice, computerChoice)
    console.log(`Score: ${humanScore} | Computer: ${computerScore}`)
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`)
        computerScore++
    }   
    else if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`)
        humanScore++
    }   
    else if(humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`)
        humanScore++
    }   
    else if(humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`)
        computerScore++
    }   
    else if(humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`)
        humanScore++
    }   
    else if(humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`)
        computerScore++
    }   
    else {
        console.log("tie")
    }
}


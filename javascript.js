

let humanScore = 0
let computerScore = 0

const list = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

    
const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        const humanChoice = button.id
        const computerChoice = list[getComputerChoice()]
        playRound(humanChoice, computerChoice)

    })

})

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function playRound(humanChoice, computerChoice){
    let resulttext = ""

    if(humanChoice === "rock" && computerChoice === "paper") {
        resulttext =`You lose, ${computerChoice} beats ${humanChoice}!`
        computerScore++
    }   
    else if(humanChoice === "rock" && computerChoice === "scissors") {
        resulttext = `You win, ${humanChoice} beats ${computerChoice}!`
        humanScore++
    }   
    else if(humanChoice === "paper" && computerChoice === "rock") {
        resulttext = `You win, ${humanChoice} beats ${computerChoice}!`
        humanScore++
    }   
    else if(humanChoice === "paper" && computerChoice === "scissors") {
        resulttext = `You lose, ${computerChoice} beats ${humanChoice}!`
        computerScore++
    }   
    else if(humanChoice === "scissors" && computerChoice === "paper") {
        resulttext = `You win, ${humanChoice} beats ${computerChoice}!`
        humanScore++
    }   
    else if(humanChoice === "scissors" && computerChoice === "rock") {
        resulttext = `You lose, ${computerChoice} beats ${humanChoice}!`
        computerScore++
    }   
    else {
        resulttext = "It's a tie!";
    }

    const score = document.getElementById("score")
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`

    const message = document.getElementById("message")
    message.textContent = resulttext


    if (humanScore === 5 || computerScore === 5) {
        const msg = document.getElementById("message")
        if (humanScore === 5)
        {
            msg.textContent = "You won the game"
        }
        if (computerScore === 5)
        {
            msg.textContent = "Computer won the game"
        }
        buttons.forEach(button => button.disabled = true);
    }

}


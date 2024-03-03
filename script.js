function getComputerSelection(){
    let result = Math.floor(Math.random()*3)
    if(result === 0){
        return "rock"
    } else if(result === 1){
        return "paper"
    } else {
        return "scissors"
    }
}

const choices = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection){
    let computerSelection = getComputerSelection()

    if(playerSelection === computerSelection){
        return `Its TIE you botch chose ${playerSelection}`
    } else if(choices[playerSelection] === computerSelection){
        playerScore++
        return `You WON your ${playerSelection} beats computers ${computerSelection}`
    } else {
        computerScore++
        return `You lose! Your ${playerSelection} loses to computers ${computerSelection}`
    }
}


let rock = document.querySelector(".rock")
rock.addEventListener("click",function(e){
    let playerSelection = "rock"
    game(playerSelection)
})

let paper = document.querySelector(".paper").addEventListener("click", function(e){
    let playerSelection = "paper"
    game(playerSelection)
})

let scissors = document.querySelector(".scissors").addEventListener("click", function(e){
    let playerSelection = "scissors"
    game(playerSelection)
})

function game(result){
   let playGame =  playRound(result)
   document.querySelector(".result").innerHTML = ""
   let showResult = document.createElement("p")
   showResult.textContent = playGame
   document.querySelector(".result").appendChild(showResult)

   countScore()
   gameOver()


}


function countScore(){
    let startScore = document.createElement("p")
    startScore.textContent = `PlayerScore: ${playerScore} ComputerScore: ${computerScore}`
    startScore.id = "startScore"
    document.querySelector(".score").appendChild(startScore)

    if(startScore){
        let updateScore = document.querySelector(".score")
        updateScore.innerHTML = ""
        updateScore.textContent = `PlayerScore: ${playerScore} ComputerScore: ${computerScore}`
    } else if(!startScore){
        let startScore = document.createElement("p")
        startScore.textContent = `PlayerScore: ${playerScore} ComputerScore: ${computerScore}`
        startScore.id = "startScore"
        document.querySelector(".score").appendChild(startScore)
    }
}


function gameOver(){
    let text = `GAME OVER YOU `
    if(playerScore >= 5 || computerScore >= 5){
        document.querySelector(".result").innerHTML = ""
        document.querySelector(".game-over").innerHTML = ""
        if (playerScore > computerScore){
            let player = document.createElement("p")
            player.textContent = `${text} WIN!`
            document.querySelector(".game-over").appendChild(player)
        } else {
            let computer = document.createElement("p")
            computer.textContent = `${text} LOSE!`
            document.querySelector(".game-over").appendChild(computer)
        }
    
    }


}

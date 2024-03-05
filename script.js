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

let gameFlagOver = false


function playRound(playerSelection){
    let computerSelection = getComputerSelection()

        if(playerSelection === computerSelection){
            return `Its TIE you botch chose ${playerSelection}`
        } else if(choices[playerSelection] === computerSelection){
            playerScore++
            return `You WON! your ${playerSelection} beats computers ${computerSelection}`
        } else {
            computerScore++
            return `You LOSE! Your ${playerSelection} loses to computers ${computerSelection}`
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
   if(gameFlagOver === true){
    return
   }
   let showResult = document.createElement("p")
   showResult.textContent = playGame
   document.querySelector(".result").appendChild(showResult)
   countScore()
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
    gameOver()
}

function gameOver(){
    if(playerScore === 5 || computerScore === 5){
        gameFlagOver = true
        let showGameOver = document.createElement("h2")
        showGameOver.id = "showGameOver"
        showGameOver.textContent = "GAME OVER"
        document.querySelector(".game-over").appendChild(showGameOver)
        newGame()
    }
    
}

function newGame(){
    let newGameButton = document.createElement("button")
    newGameButton.id = "newGame"
    newGameButton.textContent = "START NEW GAME"
    document.querySelector(".game-over").appendChild(newGameButton)
    newGameButton.addEventListener("click", function(e){
        playerScore = 0
        computerScore = 0
        document.querySelector(".result").innerHTML =""
        document.querySelector(".game-over").innerHTML = ""
        document.querySelector(".score").innerHTML= ""
        gameFlagOver = false
    })

}


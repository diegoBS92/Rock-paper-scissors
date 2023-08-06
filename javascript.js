let buttonR = document.getElementsByClassName("button")
buttonR.addEventListener("click", (e)=> console.log(e))


// Complete logic of game inside this function
   // write a function getComputerChoice that return rock, paper or cissors
   let getComputerChoice = function(){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor((Math.random()*3))]
}
// write a function that play a single round (playRound) (Player vs PC) and return a string



let playRound = function() {
   
    const playerSelection = prompt('What its your choice?').toLowerCase()
    const computerSelection = getComputerChoice()
    console.log(playerSelection, computerSelection)

    if (playerSelection == computerSelection) return "Its a tie"
    else if(playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            return "You Win! Rock beats Scissors"
        }
         else {
            return "You Lose! Paper beats Rock"
         }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return "You Win! Paper beats Rock"
        }
         else {
            return "You Lose! Scissors beats Paper"
         }
    } else if (playerSelection == 'scissors') {
        if (computerSelection== 'paper') {
            return "You Win! Scissors beats Paper"
        }
         else {
            return "You Lose! Rock beats Scissors"
         }
        
    }
}

// write a function called game that uses playRound inside to play 5 rounds that keep track of the scores and report the winner
let game = function() {
    let scorePlayer = 0
    let scoreComputer = 0 
    for(let x = 0; x<5; x++){
        let result = playRound()
        if (result == "You Win! Rock beats Scissors"|| result == "You Win! Paper beats Rock" || result == "You Win! Scissors beats Paper") {scorePlayer++}
        else if (result == "You Lose! Paper beats Rock"|| result =="You Lose! Scissors beats Paper"|| result =="You Lose! Rock beats Scissors") scoreComputer++

    }
    if (scoreComputer==scorePlayer) {
        return "It's a Tie!"
    }
    else {
        return scorePlayer>scoreComputer ? `player wins! ${scorePlayer}vs${scoreComputer}`: `computer wins! ${scoreComputer}vs${scorePlayer}`}

}

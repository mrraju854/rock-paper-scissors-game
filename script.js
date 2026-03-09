let playerScore = 0
let computerScore = 0

const pScore = document.getElementById("playerScore")
const cScore = document.getElementById("computerScore")

const compSelect = document.getElementById("computerSelect")
const playerSelect = document.getElementById("playerSelect")

const message = document.getElementById("message")

function computerPlay(){

let arr=["rock","paper","scissors"]

return arr[Math.floor(Math.random()*3)]

}

function playRound(player,computer){

if(player===computer){
return "Draw!"
}

if(player==="rock" && computer==="scissors"){
return "Player won!"
}

if(player==="paper" && computer==="rock"){
return "Player won!"
}

if(player==="scissors" && computer==="paper"){
return "Player won!"
}

return "Computer won!"

}

function gameFlow(playerChoice){

let computerChoice = computerPlay()

let result = playRound(playerChoice,computerChoice)

playerSelect.innerHTML = `<i class="far fa-hand-${playerChoice}"></i>`

compSelect.innerHTML = `<i class="far fa-hand-${computerChoice}"></i>`

message.innerText=result

if(result==="Player won!"){

playerScore++

}

else if(result==="Computer won!"){

computerScore++

}

pScore.innerText=playerScore

cScore.innerText=computerScore

}

document.getElementById("rock").onclick=()=>gameFlow("rock")

document.getElementById("paper").onclick=()=>gameFlow("paper")

document.getElementById("scissors").onclick=()=>gameFlow("scissors")

document.getElementById("submit").onclick=()=>{

document.getElementById("start").style.display="none"

document.getElementById("boards").style.display="block"

document.getElementById("select").style.display="block"

}
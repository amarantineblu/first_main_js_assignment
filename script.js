// function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
const gameParameters = ['Paper', 'Rock', 'Scissors'] 
function computerPlay () {
	const pick = Math.floor(Math.random() * gameParameters.length);
	
    let play;
    switch (pick){
        case 1: 
        play = "rock";
        break;
        case 2: 
        play = "paper";
        break;
        case 3: 
        play = "scissors";      
    }
    return play;
}

//function to prompt user play
function userPlay(){
    let selection = true;
    let playerSelection = "";
    let round = 1;
    let selectAgain = "";
    while (selection) {
        playerSelection = prompt(
            `Round ${round} Please Select any of the Following: ${selectAgain} Rock, Paper or Scissors`).toLowerCase();
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
            selection = false;
            round++;
        } else {
            selection = true;
            selectAgain = "AGAIN! WRONG CHOICE!"
        }      
    }
    return playerSelection;
}

// function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "rock") ||
        (playerSelection ==  "paper" && computerSelection == "paper") || 
        (playerSelection == "scissors" && computerSelection == "scissors")) {
        return "win" 
    } else {
        return "lose" 
    } //end end if
} //function


// function to play a 5 round game that keeps score and reports a winner or loser
function gameDisplay() {
    let yourCount = 0;
    let computerCount = 0;
    for(let round = 0; round < 5; round++){
            let score = playRound(userPlay(), computerPlay()); 
            if (score == "win") {
                yourCount++;
                console.log(`You win! ${score} beats ${score}`);
            } else {
                computerCount++;
                console.log(`You Lose! ${score} beats ${score}`);
            } 
    }
    if (yourCount > computerCount) {
        console.log(`You win! Score: ${yourCount} to ${computerCount}`);
    } else {
        console.log(`You Lose! Score: ${yourCount} to ${computerCount}`);     
    }
}

gameDisplay(); //play game
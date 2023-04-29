// a javascript function to return Scissors, Rock and Paper;
function computerPlay(){
    // Combining Math.floor with Math.random to give us any 
    //random number from 1 - 3 when the page is loaded;
    const pick = Math.floor(Math.random() * 3 + 1);
    if (pick == 3 ){
        return("scissors"); //if the system picks the value 3, then the string "Scissors" is attached to it
    }else if (pick == 2){      
        return("rock"); //if the system picks the value 2, then the string "Rock" is attached to it
    }else {
        return("paper"); //if the system picks the value 1, then the string "Paper" is attached to it
    }
}
computerPlay(); //Calling the function computerPlay

// comparing the result of player and computer.
function playRound(playerSelection, computerSelection ){
    if (playerSelection == computerSelection){ // if player value is the same as computer value.
        return "win" //"You win!";
    } else { //If Player value isn't the same as computer value
        return "loose" //"You Lose!";
    }
}

function game(){ //the game function
	let playerScore = 0; //the computer score and the player score is set to zero
	let computerScore = 0;
	let gameCount = 0;
	for (i = 0; i < 5; i++){
		let round = i;
		playerSelection = prompt(`Round ${round + 1} Please Type Something: You Have to choose between "PAPER","ROCK","SCISSORS"`)
		.toUpperCase(); //you input something on the prompt
		computerSelection = computerPlay().toUpperCase(); //the computer selection is from the computer play
		score = playRound(playerSelection,computerSelection);
		if (score == "win"){
			playerScore++
			console.log(`You win ${playerSelection} beats ${computerSelection}`);
		}else{
			computerScore++
			console.log(`You loose ${computerSelection} beats ${playerSelection}`);
		}
	}

	if (playerScore > computerScore){
		console.log(`You win! Score: ${playerScore} : ${computerScore}`)//if playerscore is greater then you win
	} else if (playerScore == computerScore){
		console.log(`This is a draw ${playerScore} : ${computerScore}`); //if playerscore and computer score is equal, it is a draw
	}else {
		console.log(`You Loose! Score: ${computerScore} to ${playerScore}`);//if computer score is greater     
	}  																																		//than playerscore then you loose
}
game();

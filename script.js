// a javascript function to return Scissors, Rock and Paper;
function computerPlay(){
    // Combining Math.floor with Math.random to give us any 
    //random number from 1 - 3 when the page is loaded;
    const pick = Math.floor(Math.random() * 3 + 1);
    if (pick == 3 ){
    //if the system picks the value 3, then the string "Scissors" is attached to it
        return("scissors");   
    }else if (pick == 2){      
    //if the system picks the value 2, then the string "Rock" is attached to it
        return("rock");
    }else {
    //if the system picks the value 1, then the string "Paper" is attached to it
        return("paper");
    }
}
computerPlay(); //Calling the function computerPlay

// comparing the result of player and computer.
function playRound(playerSelection, computerSelection ){
    // if player value is the same as computer value.
    if (playerSelection == computerSelection){
        return "win" //"You win!";
    } else {
        //If Player value isn't the same as computer value
        return "loose" //"You Lose!";
    }
}

function game(){
    let playerScore = 0; 
    let computerScore = 0;

    for (i= 0; i < 5; i++){
        let playerSelection = prompt('Please Type Something').toUpperCase;
        computerSelection = computerPlay().toUpperCase;
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
        playerScore++;
        console.log(`You win! Score: ${playerScore} : ${computerScore}`)
    } else if (playerScore == computerScore){
        console.log(`This is a draw ${playerScore} : ${computerScore}`);
    }else {
        computerScore++;
        console.log(`You Loose! Score: ${computerScore} to ${playerScore}`)      
    }  
}

game();
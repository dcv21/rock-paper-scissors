const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
        return 'Rock';
        case 1:
        return 'Paper';
        case 2:
        return 'Scissors';
    }
}

const playRound = (playerSelection, computerSelection) => {
    console.log(`Your selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerSelection}`);
    if (playerSelection === computerSelection.toLowerCase()) {
        return 'It\'s a tie!';
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'Paper') {
            return 'You lose! Paper beats Rock.';
        } else {
            return 'You win! Rock beats Scissors.';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'Scissors') {
            return 'You lose! Scissors beats Paper.';
        } else {
            return 'You win! Paper beats Rock.';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'Rock') {
            return 'You lose! Rock beats Scissors.';
        } else {
            return 'You win! Scissors beats Paper.';
        }
    }
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        while (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
            playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        }
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        if (result.startsWith('You win')) {
            playerScore++;
        } else if (result.startsWith('You lose')) {
            computerScore++;
        }
        console.log(result);
    }
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (playerScore > computerScore) {
        return 'You win!';
    }
    else if (playerScore < computerScore) {
        return 'You lose!';
    }
    else if (playerScore === computerScore) {
        return 'It\'s a tie!';
    }
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.textContent;
        if (!['Rock', 'Paper', 'Scissors'].includes(playerSelection)) return;
        playRound(playerSelection);
    })
});

let playerScore = 0;
let computerScore = 0;

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

const playRound = (playerSelection) => {
    const div = document.querySelector('.result');
    const computerSelection = computerPlay();

    const result = `<p>Your selection: ${playerSelection}</p><p>Computer selection: ${computerSelection}</p>`;

    if (playerSelection === computerSelection) {
        div.innerHTML = result + '<p>It\'s a tie!</p>';
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            computerScore++;
            div.innerHTML = result + '<p>You lose! Paper beats Rock</p>';
        } else {
            playerScore++;
            div.innerHTML = result + '<p>You win! Rock beats Scissors</p>';
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            computerScore++;
            div.innerHTML = result + '<p>You lose! Scissors beats Paper</p>';
        } else {
            playerScore++;
            div.innerHTML = result + '<p>You win! Paper beats Rock</p>';
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerScore++;
            div.innerHTML = result + '<p>You lose! Rock beats Scissors</p>';
        } else {
            playerScore++;
            div.innerHTML = result + '<p>You win! Scissors beats Paper</p>';
        }
    }

    document.querySelector('.player-score').textContent = playerScore;
    document.querySelector('.computer-score').textContent = computerScore;

    if (playerScore === 5) {
        div.innerHTML = div.innerHTML + '<p>You won the game!</p>';
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        div.innerHTML = div.innerHTML + '<p>Computer won the game!</p>';
        playerScore = 0;
        computerScore = 0;
    }
}
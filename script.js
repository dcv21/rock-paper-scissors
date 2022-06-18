const main = () => {
    const scores = {
        playerScore: 0,
        computerScore: 0
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerSelection = button.textContent;
            if (!['Rock', 'Paper', 'Scissors'].includes(playerSelection)) return;
            playRound(playerSelection, scores);
        })
    });
}

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

const playRound = (playerSelection, scores) => {
    const div = document.querySelector('.result');
    const computerSelection = computerPlay();

    const result = `<p>Your selection: ${playerSelection}</p><p>Computer selection: ${computerSelection}</p>`;

    if (playerSelection === computerSelection) {
        div.innerHTML = result + '<p>It\'s a tie!</p>';
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            scores.computerScore++;
            div.innerHTML = result + '<p>You lose! Paper beats Rock</p>';
        } else {
            scores.playerScore++;
            div.innerHTML = result + '<p>You win! Rock beats Scissors</p>';
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            scores.computerScore++;
            div.innerHTML = result + '<p>You lose! Scissors beats Paper</p>';
        } else {
            scores.playerScore++;
            div.innerHTML = result + '<p>You win! Paper beats Rock</p>';
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            scores.computerScore++;
            div.innerHTML = result + '<p>You lose! Rock beats Scissors</p>';
        } else {
            scores.playerScore++;
            div.innerHTML = result + '<p>You win! Scissors beats Paper</p>';
        }
    }

    document.querySelector('.player-score').textContent = scores.playerScore;
    document.querySelector('.computer-score').textContent = scores.computerScore;

    if (scores.playerScore === 5) {
        div.innerHTML = div.innerHTML + '<p>You won the game!</p>';
        scores.playerScore = 0;
        scores.computerScore = 0;
    }
    else if (scores.computerScore === 5) {
        div.innerHTML = div.innerHTML + '<p>Computer won the game!</p>';
        scores.playerScore = 0;
        scores.computerScore = 0;
    }
}

window.addEventListener("DOMContentLoaded", main);
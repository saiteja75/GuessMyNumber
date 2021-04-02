'use strict';
const check = document.querySelector('.check');
const msg = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const reset = document.querySelector('.again');
let getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let playerScore = 20;
let highScore = 0;
let randomNumber = getRandomNumber(1, 20);
let resetData = function() {
    randomNumber = getRandomNumber(1, 20);
    number.textContent = '?';
    document.querySelector('.guess').value = '';
    msg.textContent = 'Start guessing';
    score.textContent = 20;
    playerScore = 20;
    document.body.style.background = '#222';
}
check.addEventListener('click', function() {
    let value = Number(document.querySelector('.guess').value);
    if (!value) {
        msg.textContent = 'Enter a Valid Value!'
    } else {
        if (value === randomNumber) {
            msg.textContent = 'Your guess is correct';
            number.textContent = String(randomNumber);
            if (playerScore > highScore) {
                highscore.textContent = playerScore;
            }
            document.body.style.background = '#60b347'
        } else {
            playerScore--;
            if (playerScore < 0) {
                msg.textContent = 'lost the game.Game starts again in few seconds or press again';
                number.textContent = randomNumber;
                document.body.style.background = 'red';
                setTimeout(function() {
                    resetData();
                }, 900);
            } else {
                if (value > randomNumber) {
                    msg.textContent = 'Too High';
                } else {
                    msg.textContent = 'Too Low';
                }
                score.textContent = playerScore;
            }
        }
    }
});

reset.addEventListener('click', resetData);
let coputerMove = '', playerMove = '', view = '';
const counter = JSON.parse(localStorage.getItem('data'))
||{
    Win: 0,
    Lose: 0,
    Tie: 0
};

const counterElement = document.querySelector('.js-counter');



counterElement.innerHTML = `Wins: ${counter.Win} , Lose: ${counter.Lose} ,  Tie: ${counter.Tie}`;

function resetScore(){
    counter.Win = 0;
    counter.Lose = 0;
    counter.Tie= 0;
    localStorage.setItem('data',JSON.stringify(counter));
    counterElement.innerHTML = `Wins: ${counter.Win} , Lose: ${counter.Lose} ,  Tie: ${counter.Tie}`;
}

function pickComputerMove() {

    const randomNumber = Math.random();
    let result = document.querySelector('.result');

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';

    }
    else if (randomNumber >= 2 / 3) {
        computerMove = 'scissors';
    }

    result.innerHTML = `You
        <img src="/DOM(doccumentObjectModel)/images/${playerMove}-emoji.png" class="icons you">
        <img src="/DOM(doccumentObjectModel)/images/${computerMove}-emoji.png"  class="icons computer"> 
        Computer`;

    counterElement.innerHTML = `Wins: ${counter.Win} , Lose: ${counter.Lose} ,  Tie: ${counter.Tie}`;

    localStorage.setItem('data',JSON.stringify(counter));

}
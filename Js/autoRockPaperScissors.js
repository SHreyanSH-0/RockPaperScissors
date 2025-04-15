let coputerMove = '', playerMove = '', view = '';
const counter = JSON.parse(localStorage.getItem('data'))
||{
    Win: 0,
    Lose: 0,
    Tie: 0
};

const counterElement = document.querySelector('.js-counter');

counterElement.innerHTML = `Wins: ${counter.Win} , Lose: ${counter.Lose} ,  Tie: ${counter.Tie}`;

let isAutoPlaying = false;
let intervalID;
function auto(){
    if(!isAutoPlaying){
        intervalID = setInterval(function(){
            const pm = pickComputerMove();
            console.log(pm);
            playGame(pm);
        },1000);
        isAutoPlaying = true;
    }
    else{
        isAutoPlaying = false;
        clearInterval(intervalID);
    }

}

function playGame(pc){
    pickComputerMove();
    playerMove = pc;
    if(playerMove==='rock'){
        if(computerMove==='rock'){
            document.querySelector('.view').innerHTML = 'TIE';
            counter.Tie++;
        }
        else if(computerMove==='paper'){
            document.querySelector('.view').innerHTML = 'YOU LOSE';
            counter.Lose++;
        }
        else{ 
            document.querySelector('.view').innerHTML = 'YOU WON!!';
            counter.Win++;
        }
    }
    else if(playerMove==='paper'){
        if(computerMove==='rock'){
            document.querySelector('.view').innerHTML = 'YOU WON!!';
            counter.Win++;
        }
        else if(computerMove==='paper'){
            document.querySelector('.view').innerHTML = 'TIE';
            counter.Tie++;
        }
        else {
            document.querySelector('.view').innerHTML = 'YOU LOSE';
            counter.Lose++;
        }
    }
    else{
        if(computerMove==='rock'){
            document.querySelector('.view').innerHTML = 'YOU LOSE';
            counter.Lose++;
        }
        else if(computerMove==='paper'){
            document.querySelector('.view').innerHTML = 'YOU WON!!';
            counter.Win++;
        }
        else {
            document.querySelector('.view').innerHTML = 'TIE';
            counter.Tie++;
        }
    }
    res(playerMove, computerMove);
}

function resetScore(){
    counter.Win = 0;
    counter.Lose = 0;
    counter.Tie= 0;
    localStorage.setItem('data',JSON.stringify(counter));
    counterElement.innerHTML = `Wins: ${counter.Win} , Lose: ${counter.Lose} ,  Tie: ${counter.Tie}`;
}

function pickComputerMove() {

    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';

    }
    else if (randomNumber >= 2 / 3) {
        computerMove = 'scissors';
    }
    return computerMove;
}

function res(playerMove, computerMove){
    let result = document.querySelector('.result');

    result.innerHTML = `You
        <img src="../DOM(doccumentObjectModel)/images/${playerMove}-emoji.png" class="icons you">
        <img src="../DOM(doccumentObjectModel)/images/${computerMove}-emoji.png"  class="icons computer"> 
        Computer`;

    counterElement.innerHTML = `Wins: ${counter.Win} , Lose: ${counter.Lose} ,  Tie: ${counter.Tie}`;

    localStorage.setItem('data',JSON.stringify(counter));
}
const coin = document.querySelector('.coin');
const btn = document.querySelectorAll('button');
const outputMsg = document.querySelector(".output");
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

const coins = ["TAILS", "HEADS"];

for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', tossCoin);
}

let scoreCard = [0,0];
let playerScore = 0;

function tossCoin(e) {
      let playerGuess =  e.target.innerText;
      let index = Math.floor(Math.random() * 2);
      coin.style.animation = "none";
      h3.innerHTML = `You have Selected ${playerGuess}`
      if (index) {
            setTimeout(function (){
                  coin.style.animation = "spin-heads 3s forwards";
            }, 100);
            scoreCard[0]++; 
      } 
      else {
            setTimeout(function (){
                  coin.style.animation = "spin-tails 3s forwards";
            }, 100);
            scoreCard[1]++
      }
      setTimeout(updateScore, 3000);
      setTimeout( function() {
            let message;
            if (coins[index] === playerGuess) {
               message = "Congratulations! You have Won😊";
               outputMsg.style.color = "#2a9d8f";
               playerScore++;
            } else  {
                  message = "You Loose😔";
                  outputMsg.style.color = "#e63946";
                  if (playerScore > 0 ) {
                        playerScore--;
                  }      
            }
            outputMsg.innerHTML = `<h1>${message}</h1>` 
            h4.innerHTML = `Player Score: ${playerScore}`
       }, 3000);
}


function updateScore() {
      document.querySelector("#head-score").textContent = `Heads: ${scoreCard[0]}`;
      document.querySelector("#tail-score").textContent = `Tails: ${scoreCard[1]}`;
}
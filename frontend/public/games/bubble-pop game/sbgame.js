
let bubbles = ['one', 'two', 'three', 'four', 'five'];
let windowWidth = window.innerWidth;
let body = document.body;
let windowHeight = window.innerHeight;
let scores = document.querySelectorAll('.score');
let noPop = 0;
let total = 50;
let currentBubble = 0;
let gameOver = false;
let shadow = document.querySelector('.shadow');
let startBtn = document.querySelector('.start-btn');
const audio = new Audio("pop.wav");

function createBubble() {
  let div = document.createElement('div');
  let rand = Math.floor(Math.random() * bubbles.length);
  div.className = 'bubble bubble-' + bubbles[rand];
  rand = Math.floor(Math.random() * (windowWidth - 150));
  div.style.left = rand + 'px';
  div.dataset.number = currentBubble;
  currentBubble++;
  document.body.appendChild(div);
  animateBubble(div);
}

function animateBubble(elem) {
  let position = 0;
  let random = Math.floor(Math.random() * 6 - 3);
  let interval = setInterval(frame, 12 - Math.floor(noPop / 10) + random);

  function frame() {
    if (
      position >= windowHeight + 150 &&
      document.querySelector('[data-number ="' + elem.dataset.number + '"]') !== null
    ) {
      // Bubble reached top without being popped — game over!
      clearInterval(interval);
      elem.remove();
      if (!gameOver && noPop < total) {
        gameOver = true;
        endGame(false);
      }
    } else if (!gameOver) {
      position++;
      elem.style.top = windowHeight - position + 'px';
    } else {
      clearInterval(interval);
    }
  }
}

function deleteBubble(elem) {
  if (gameOver) return;
  audio.play();
  elem.remove();
  noPop++;
  scoreUpdate();

  if (noPop === total) {
    // Player popped all bubbles 🎉
    gameOver = true;
    endGame(true);
  }
}

function scoreUpdate() {
  for (let i = 0; i < scores.length; i++) {
    scores[i].textContent = noPop;
  }
}

function endGame(won) {
  shadow.style.display = 'flex';
  if (won) {
    shadow.querySelector('.winner').style.display = 'block';
    shadow.querySelector('.loser').style.display = 'none';
  } else {
    shadow.querySelector('.loser').style.display = 'block';
    shadow.querySelector('.winner').style.display = 'none';
    shadow.querySelector('.loser .score').textContent = noPop;
  }
}

function startGame() {
  restartGame();
  let loop = setInterval(function () {
    if (!gameOver && noPop < total) {
      createBubble();
    } else {
      clearInterval(loop);
    }
  }, 800);
}

function restartGame() {
  let forRemoving = document.querySelectorAll('.bubble');
  for (let i = 0; i < forRemoving.length; i++) {
    forRemoving[i].remove();
  }
  gameOver = false;
  noPop = 0;
  currentBubble = 0;
  scoreUpdate();
  shadow.style.display = 'none';
  shadow.querySelector('.winner').style.display = 'none';
  shadow.querySelector('.loser').style.display = 'none';
}

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('bubble')) {
    deleteBubble(event.target);
  }
});

document.querySelector('.restart').addEventListener('click', function () {
  shadow.style.display = 'none';
  shadow.querySelector('.winner').style.display = 'none';
  shadow.querySelector('.loser').style.display = 'none';
  startGame();
});

document.querySelector('.cancel').addEventListener('click', function () {
  shadow.style.display = 'none';
});

startBtn.addEventListener('click', function () {
  startGame();
  document.querySelector('.main-game').style.display = 'none';
});

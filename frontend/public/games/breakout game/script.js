// const rulesButton = document.getElementById("rules-btn");
// const closeButton = document.getElementById("close-btn");
// const rules = document.getElementById("rules");
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// const color = getComputedStyle(document.documentElement).getPropertyValue(
//   "--button-color"
// );
// const secondaryColor = getComputedStyle(
//   document.documentElement
// ).getPropertyValue("--sidebar-color");
// let score = 0;
// const brickRowCount = 9;
// const brickColumnCount = 5;

// // Reference: https://stackoverflow.com/questions/34772957/how-to-make-canvas-responsive
// // https://stackoverflow.com/questions/39771732/drawing-to-responsive-canvas-that-is-100-width-and-height
// const heightRatio = 0.75;
// canvas.height = canvas.width * heightRatio;
// ctx.canvas.width = 800;
// ctx.canvas.height = ctx.canvas.width * heightRatio;

// // Elements
// const ball = {
//   x: canvas.width / 2,
//   y: canvas.height / 2,
//   size: 10,
//   speed: 4,
//   dx: 4,
//   dy: -4,
// };

// const paddle = {
//   x: canvas.width / 2 - 40,
//   y: canvas.height - 20,
//   w: 80,
//   h: 10,
//   speed: 8,
//   dx: 0,
// };

// const brickInfo = {
//   w: 70,
//   h: 20,
//   padding: 10,
//   offsetX: 45,
//   offsetY: 60,
//   visible: true,
// };

// const bricks = [];
// for (let i = 0; i < brickRowCount; i++) {
//   bricks[i] = [];
//   for (let j = 0; j < brickColumnCount; j++) {
//     const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
//     const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
//     bricks[i][j] = { x, y, ...brickInfo };
//   }
// }

// // Create Elements
// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
//   ctx.fillStyle = secondaryColor;
//   ctx.fill();
//   ctx.closePath();
// }

// function drawPaddle() {
//   ctx.beginPath();
//   ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
//   ctx.fillStyle = color;
//   ctx.fill();
//   ctx.closePath();
// }

// function drawScore() {
//   ctx.font = '20px "Balsamiq Sans"';
//   ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
// }

// function drawBricks() {
//   bricks.forEach((column) => {
//     column.forEach((brick) => {
//       ctx.beginPath();
//       ctx.rect(brick.x, brick.y, brick.w, brick.h);
//       ctx.fillStyle = brick.visible ? color : "transparent";
//       ctx.fill();
//       ctx.closePath();
//     });
//   });
// }

// function draw() {
//   // clear
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   // draw
//   drawBall();
//   drawPaddle();
//   drawScore();
//   drawBricks();
// }

// // Animate Elements
// function movePaddle() {
//   paddle.x += paddle.dx;
//   if (paddle.x + paddle.w > canvas.width) paddle.x = canvas.width - paddle.w;
//   if (paddle.x < 0) paddle.x = 0;
// }

// function moveBall() {
//   ball.x += ball.dx;
//   ball.y += ball.dy;
//   // wall collision
//   if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
//     // right and left
//     ball.dx *= -1;
//   }
//   if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
//     // top and bottom
//     ball.dy *= -1;
//   }
//   // paddle
//   if (
//     ball.x - ball.size > paddle.x &&
//     ball.x + ball.size < paddle.x + paddle.w &&
//     ball.y + ball.size > paddle.y
//   ) {
//     ball.dy = -ball.speed;
//   }
//   // bricks
//   bricks.forEach((column) => {
//     column.forEach((brick) => {
//       if (brick.visible) {
//         if (
//           ball.x - ball.size > brick.x && // left brick side check
//           ball.x + ball.size < brick.x + brick.w && // right brick side check
//           ball.y + ball.size > brick.y && // top brick side check
//           ball.y - ball.size < brick.y + brick.h // bottom brick side check
//         ) {
//           ball.dy *= -1;
//           brick.visible = false;
//           increaseScore();
//         }
//       }
//     });
//   });
//   // game over
//   if (ball.y + ball.size > canvas.height) {
//     showAllBricks();
//     score = 0;
//   }
// }

// function increaseScore() {
//   score++;
//   if (score % (brickRowCount * brickRowCount) === 0) {
//     // no remainder
//     showAllBricks();
//   }
// }

// function showAllBricks() {
//   bricks.forEach((column) => {
//     column.forEach((brick) => (brick.visible = true));
//   });
// }

// // Handle Key Events
// function keyDown(e) {
//   if (e.key === "Right" || e.key === "ArrowRight") paddle.dx = paddle.speed;
//   else if (e.key === "Left" || e.key === "ArrowLeft") paddle.dx = -paddle.speed;
// }

// function keyUp(e) {
//   if (
//     e.key === "Right" ||
//     e.key === "ArrowRight" ||
//     e.key === "Left" ||
//     e.key === "ArrowLeft"
//   ) {
//     paddle.dx = 0;
//   }
// }

// // Update Canvas
// function update() {
//   // update
//   movePaddle();
//   moveBall();
//   // draw
//   draw();
//   requestAnimationFrame(update);
// }

// // Event Listeners
// document.addEventListener("keydown", keyDown);
// document.addEventListener("keyup", keyUp);
// rulesButton.addEventListener("click", () => rules.classList.add("show"));
// closeButton.addEventListener("click", () => rules.classList.remove("show"));

// // Init
// update();
const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard({ target: clickedCard }) {
  // Prevent clicking same card twice or clicking while flipping
  if (clickedCard !== cardOne && !disableDeck) {
    clickedCard.classList.add("flip");

    if (!cardOne) {
      // first card clicked
      cardOne = clickedCard;
      return;
    }

    // second card clicked
    cardTwo = clickedCard;
    disableDeck = true;

    let cardOneImg = cardOne.querySelector(".back-view img").src;
    let cardTwoImg = cardTwo.querySelector(".back-view img").src;

    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    // ✅ matched pair
    matched++;

    // if all 8 pairs matched, reshuffle after short delay
    if (matched === 8) {
      setTimeout(() => shuffleCard(), 1000);
    }

    // disable clicking for matched cards
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);

    // reset selections
    cardOne = cardTwo = null;
    disableDeck = false;
  } else {
    // ❌ mismatch — add shake effect then flip back
    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
      cardOne.classList.remove("shake", "flip");
      cardTwo.classList.remove("shake", "flip");
      cardOne = cardTwo = null;
      disableDeck = false;
    }, 1200);
  }
}

function shuffleCard() {
  matched = 0;
  disableDeck = false;
  cardOne = cardTwo = null;

  // create pair array and shuffle it
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => Math.random() > 0.5 ? 1 : -1);

  cards.forEach((card, i) => {
    card.classList.remove("flip", "shake");
    const imgTag = card.querySelector(".back-view img");

    // ✅ make sure your images are stored here:
    // Folder path: /images/img-1.png, /images/img-2.png, ...
    imgTag.src = `images/img-${arr[i]}.png`;

    // re-enable clicking
    card.addEventListener("click", flipCard);
  });
}

// initialize
shuffleCard();
cards.forEach(card => card.addEventListener("click", flipCard));

// const quizData = [
//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "London", "Berlin", "Madrid"],
//     answer: "Paris",
//   },
//   {
//     question: "What is the largest planet in our solar system?",
//     options: ["Mars", "Saturn", "Jupiter", "Neptune"],
//     answer: "Jupiter",
//   },
//   {
//     question: "Which country won the FIFA World Cup in 2018?",
//     options: ["Brazil", "Germany", "France", "Argentina"],
//     answer: "France",
//   },
//   {
//     question: "What is the tallest mountain in the world?",
//     options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
//     answer: "Mount Everest",
//   },
//   {
//     question: "Which is the largest ocean on Earth?",
//     options: [
//       "Pacific Ocean",
//       "Indian Ocean",
//       "Atlantic Ocean",
//       "Arctic Ocean",
//     ],
//     answer: "Pacific Ocean",
//   },
//   {
//     question: "What is the chemical symbol for gold?",
//     options: ["Au", "Ag", "Cu", "Fe"],
//     answer: "Au",
//   },
//   {
//     question: "Who painted the Mona Lisa?",
//     options: [
//       "Pablo Picasso",
//       "Vincent van Gogh",
//       "Leonardo da Vinci",
//       "Michelangelo",
//     ],
//     answer: "Leonardo da Vinci",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["Mars", "Venus", "Mercury", "Uranus"],
//     answer: "Mars",
//   },
//   {
//     question: "What is the largest species of shark?",
//     options: [
//       "Great White Shark",
//       "Whale Shark",
//       "Tiger Shark",
//       "Hammerhead Shark",
//     ],
//     answer: "Whale Shark",
//   },
//   {
//     question: "Which animal is known as the King of the Jungle?",
//     options: ["Lion", "Tiger", "Elephant", "Giraffe"],
//     answer: "Lion",
//   },
//   {
//     question: "What is the capital of Japan?",
//     options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
//     answer: "Tokyo",
//   },
//   {
//     question: "Which element has the atomic number 1?",
//     options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
//     answer: "Hydrogen",
//   },
//   {
//     question: "Who wrote 'Romeo and Juliet'?",
//     options: [
//       "Charles Dickens",
//       "William Shakespeare",
//       "Mark Twain",
//       "Leo Tolstoy",
//     ],
//     answer: "William Shakespeare",
//   },
//   {
//     question: "What is the smallest country in the world?",
//     options: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
//     answer: "Vatican City",
//   },
//   {
//     question: "Which planet is known for its rings?",
//     options: ["Venus", "Saturn", "Jupiter", "Neptune"],
//     answer: "Saturn",
//   },
//   {
//     question: "Who discovered penicillin?",
//     options: [
//       "Marie Curie",
//       "Alexander Fleming",
//       "Louis Pasteur",
//       "Isaac Newton",
//     ],
//     answer: "Alexander Fleming",
//   },
//   {
//     question: "Which continent is the Sahara Desert located on?",
//     options: ["Asia", "Africa", "Australia", "Europe"],
//     answer: "Africa",
//   },
//   {
//     question: "What is the main ingredient in guacamole?",
//     options: ["Tomato", "Avocado", "Onion", "Pepper"],
//     answer: "Avocado",
//   },
//   {
//     question: "Which country is known as the Land of the Rising Sun?",
//     options: ["China", "South Korea", "Thailand", "Japan"],
//     answer: "Japan",
//   },
// { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
//   { question: "Who invented the light bulb?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "James Watt"], answer: "Thomas Edison" },
//   { question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
//   { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "UK", "Brazil", "Russia"], answer: "Brazil" },
//   { question: "Which vitamin is produced when a person is exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
//   { question: "Who is the author of 'Harry Potter' series?", options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"], answer: "J.K. Rowling" },
//   { question: "What is the hardest natural substance on Earth?", options: ["Diamond", "Gold", "Iron", "Platinum"], answer: "Diamond" },
//   { question: "Which ocean is the Bermuda Triangle located in?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"], answer: "Atlantic Ocean" },
//   { question: "What is the currency of Japan?", options: ["Yen", "Dollar", "Euro", "Rupee"], answer: "Yen" },
//   { question: "Which planet has the most moons?", options: ["Earth", "Mars", "Saturn", "Jupiter"], answer: "Jupiter" },
//   { question: "Which country is famous for the Great Wall?", options: ["China", "India", "Japan", "Egypt"], answer: "China" }
// ];


// const quizContainer = document.getElementById("quiz");
// const resultContainer = document.getElementById("result");
// const submitButton = document.getElementById("submit");
// const retryButton = document.getElementById("retry");
// const showAnswerButton = document.getElementById("showAnswer");

// let currentQuestion = 0;
// let score = 0;
// let incorrectAnswers = [];

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// function displayQuestion() {
//   const questionData = quizData[currentQuestion];

//   const questionElement = document.createElement("div");
//   questionElement.className = "question";
//   questionElement.innerHTML = `${currentQuestion + 1}.${questionData.question}`;

//   const optionsElement = document.createElement("div");
//   optionsElement.className = "options";

//   const shuffledOptions = [...questionData.options];
//   shuffleArray(shuffledOptions);

//   for (let i = 0; i < shuffledOptions.length; i++) {
//     const option = document.createElement("label");
//     option.className = "option";

//     const radio = document.createElement("input");
//     radio.type = "radio";
//     radio.name = "quiz";
//     radio.value = shuffledOptions[i];

//     const optionText = document.createTextNode(shuffledOptions[i]);

//     option.appendChild(radio);
//     option.appendChild(optionText);
//     optionsElement.appendChild(option);
//   }

//   quizContainer.innerHTML = "";
//   quizContainer.appendChild(questionElement);
//   quizContainer.appendChild(optionsElement);
// }

// function checkAnswer() {
//   const selectedOption = document.querySelector('input[name="quiz"]:checked');
//   if (selectedOption) {
//     const answer = selectedOption.value;
//     if (answer === quizData[currentQuestion].answer) {
//       score++;
//     } else {
//       incorrectAnswers.push({
//         question: quizData[currentQuestion].question,
//         incorrectAnswer: answer,
//         correctAnswer: quizData[currentQuestion].answer,
//       });
//     }
//     currentQuestion++;
//     selectedOption.checked = false;
//     if (currentQuestion < quizData.length) {
//       displayQuestion();
//     } else {
//       displayResult();
//     }
//   }
// }

// function displayResult() {
//   quizContainer.style.display = "none";
//   submitButton.style.display = "none";
//   retryButton.style.display = "inline-block";
//   showAnswerButton.style.display = "inline-block";
//   resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
// }

// function retryQuiz() {
//   currentQuestion = 0;
//   score = 0;
//   incorrectAnswers = [];
//   quizContainer.style.display = "block";
//   submitButton.style.display = "inline-block";
//   retryButton.style.display = "none";
//   showAnswerButton.style.display = "none";
//   resultContainer.innerHTML = "";
//   displayQuestion();
// }

// function showAnswer() {
//   quizContainer.style.display = "none";
//   submitButton.style.display = "none";
//   retryButton.style.display = "inline-block";
//   showAnswerButton.style.display = "none";

//   let incorrectAnswersHtml = "";
//   for (let i = 0; i < incorrectAnswers.length; i++) {
//     incorrectAnswersHtml += `
//         <p>
//           <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
//           <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
//           <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
//         </p>
//       `;
//   }

//   resultContainer.innerHTML = `
//       <p>You scored ${score} out of ${quizData.length}!</p>
//       <p>Incorrect Answers:</p>
//       ${incorrectAnswersHtml}
//     `;
// }

// submitButton.addEventListener("click", checkAnswer);
// retryButton.addEventListener("click", retryQuiz);
// showAnswerButton.addEventListener("click", showAnswer);

// displayQuestion();
const quizData = [
  { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
  { question: "What is the largest planet in our solar system?", options: ["Mars", "Saturn", "Jupiter", "Neptune"], answer: "Jupiter" },
  { question: "Which country won the FIFA World Cup in 2018?", options: ["Brazil", "Germany", "France", "Argentina"], answer: "France" },
  { question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"], answer: "Mount Everest" },
  { question: "Which is the largest ocean on Earth?", options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
  { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Cu", "Fe"], answer: "Au" },
  { question: "Who painted the Mona Lisa?", options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"], answer: "Leonardo da Vinci" },
  { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Mercury", "Uranus"], answer: "Mars" },
  { question: "What is the largest species of shark?", options: ["Great White Shark", "Whale Shark", "Tiger Shark", "Hammerhead Shark"], answer: "Whale Shark" },
  { question: "Which animal is known as the King of the Jungle?", options: ["Lion", "Tiger", "Elephant", "Giraffe"], answer: "Lion" },
  { question: "What is the capital of Japan?", options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"], answer: "Tokyo" },
  { question: "Which element has the atomic number 1?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], answer: "Hydrogen" },
  { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"], answer: "William Shakespeare" },
  { question: "What is the smallest country in the world?", options: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"], answer: "Vatican City" },
  { question: "Which planet is known for its rings?", options: ["Venus", "Saturn", "Jupiter", "Neptune"], answer: "Saturn" },
  { question: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"], answer: "Alexander Fleming" },
  { question: "Which continent is the Sahara Desert located on?", options: ["Asia", "Africa", "Australia", "Europe"], answer: "Africa" },
  { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Onion", "Pepper"], answer: "Avocado" },
  { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "South Korea", "Thailand", "Japan"], answer: "Japan" },
  { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
  { question: "Who invented the light bulb?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "James Watt"], answer: "Thomas Edison" },
  { question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
  { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "UK", "Brazil", "Russia"], answer: "Brazil" },
  { question: "Which vitamin is produced when a person is exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
  { question: "Who is the author of 'Harry Potter' series?", options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"], answer: "J.K. Rowling" },
  { question: "What is the hardest natural substance on Earth?", options: ["Diamond", "Gold", "Iron", "Platinum"], answer: "Diamond" },
  { question: "Which ocean is the Bermuda Triangle located in?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"], answer: "Atlantic Ocean" },
  { question: "What is the currency of Japan?", options: ["Yen", "Dollar", "Euro", "Rupee"], answer: "Yen" },
  { question: "Which planet has the most moons?", options: ["Earth", "Mars", "Saturn", "Jupiter"], answer: "Jupiter" },
  { question: "Which country is famous for the Great Wall?", options: ["China", "India", "Japan", "Egypt"], answer: "China" },
// Additional questions to add to quizData
{
  question: "Which is the largest desert in the world?",
  options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
  answer: "Antarctic Desert"
},
{
  question: "Which planet is known as the Morning Star?",
  options: ["Venus", "Mars", "Mercury", "Jupiter"],
  answer: "Venus"
},
{
  question: "Who is known as the Father of Computers?",
  options: ["Charles Babbage", "Alan Turing", "Tim Berners-Lee", "Steve Jobs"],
  answer: "Charles Babbage"
},
{
  question: "What is the boiling point of water at sea level?",
  options: ["90°C", "100°C", "120°C", "80°C"],
  answer: "100°C"
},
{
  question: "Which language has the most native speakers?",
  options: ["English", "Mandarin", "Spanish", "Hindi"],
  answer: "Mandarin"
},
{
  question: "Which country gifted the Statue of Liberty to the USA?",
  options: ["France", "UK", "Germany", "Italy"],
  answer: "France"
},
{
  question: "Which is the smallest planet in our solar system?",
  options: ["Mercury", "Mars", "Venus", "Pluto"],
  answer: "Mercury"
},
{
  question: "What is the hardest rock?",
  options: ["Granite", "Diamond", "Marble", "Quartz"],
  answer: "Diamond"
},
{
  question: "Who wrote 'The Odyssey'?",
  options: ["Homer", "Plato", "Aristotle", "Virgil"],
  answer: "Homer"
},
{
  question: "Which is the fastest land animal?",
  options: ["Cheetah", "Lion", "Tiger", "Leopard"],
  answer: "Cheetah"
},
{
  question: "Which organ purifies blood in the human body?",
  options: ["Liver", "Kidney", "Heart", "Lungs"],
  answer: "Kidney"
},
{
  question: "What is the main gas in Earth's atmosphere?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  answer: "Nitrogen"
},
{
  question: "Who discovered gravity?",
  options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
  answer: "Isaac Newton"
},
{
  question: "Which element is needed for strong bones?",
  options: ["Calcium", "Iron", "Potassium", "Magnesium"],
  answer: "Calcium"
},
{
  question: "Which is the largest mammal on Earth?",
  options: ["Elephant", "Blue Whale", "Hippopotamus", "Giraffe"],
  answer: "Blue Whale"
},
{
  question: "Which city hosted the 2008 Summer Olympics?",
  options: ["Beijing", "London", "Athens", "Sydney"],
  answer: "Beijing"
},
{
  question: "Which country is famous for the Taj Mahal?",
  options: ["India", "Pakistan", "Bangladesh", "Nepal"],
  answer: "India"
},
{
  question: "Which instrument has keys, pedals, and strings?",
  options: ["Guitar", "Piano", "Violin", "Flute"],
  answer: "Piano"
},
{
  question: "Which vitamin helps in blood clotting?",
  options: ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin C"],
  answer: "Vitamin K"
},
{
  question: "Which is the largest continent?",
  options: ["Africa", "Asia", "Europe", "North America"],
  answer: "Asia"
},
{
  question: "Who painted 'Starry Night'?",
  options: ["Vincent van Gogh", "Leonardo da Vinci", "Claude Monet", "Pablo Picasso"],
  answer: "Vincent van Gogh"
},
{
  question: "Which is the longest river in the world?",
  options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
  answer: "Nile"
},
{
  question: "Which is the smallest ocean in the world?",
  options: ["Atlantic", "Indian", "Arctic", "Pacific"],
  answer: "Arctic"
},
{
  question: "Which planet has a day shorter than its year?",
  options: ["Mercury", "Venus", "Mars", "Jupiter"],
  answer: "Mercury"
},
{
  question: "Who invented the telephone?",
  options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
  answer: "Alexander Graham Bell"
},
{
  question: "Which is the chemical symbol for water?",
  options: ["H2O", "CO2", "O2", "NaCl"],
  answer: "H2O"
},
{
  question: "Which natural disaster measures on the Richter scale?",
  options: ["Earthquake", "Tornado", "Hurricane", "Flood"],
  answer: "Earthquake"
},
{
  question: "Which is the largest volcano in the world?",
  options: ["Mauna Loa", "Mount Fuji", "Mount Kilimanjaro", "Mount Etna"],
  answer: "Mauna Loa"
},
{
  question: "Which animal is known for changing its color?",
  options: ["Chameleon", "Octopus", "Cuttlefish", "All of the above"],
  answer: "Chameleon"
},
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");
const retryButton = document.getElementById("retry");
const showAnswerButton = document.getElementById("showAnswer");

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
let quizQuestions = []; // 10 questions per quiz

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Initialize quiz with 10 random questions
function initQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  shuffleArray(quizData);
  quizQuestions = quizData.slice(0, 10); // pick first 10 questions randomly
  quizContainer.style.display = "block";
  submitButton.style.display = "inline-block";
  retryButton.style.display = "none";
  showAnswerButton.style.display = "none";
  resultContainer.innerHTML = "";
  displayQuestion();
}

function displayQuestion() {
  const questionData = quizQuestions[currentQuestion];

  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionElement.innerHTML = `${currentQuestion + 1}. ${questionData.question}`;

  const optionsElement = document.createElement("div");
  optionsElement.className = "options";

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  shuffledOptions.forEach(optionText => {
    const label = document.createElement("label");
    label.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.value = optionText;

    label.appendChild(radio);
    label.appendChild(document.createTextNode(optionText));
    optionsElement.appendChild(label);
  });

  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizQuestions[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizQuestions[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizQuestions[currentQuestion].answer
      });
    }
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  retryButton.style.display = "inline-block";
  showAnswerButton.style.display = "inline-block";
  resultContainer.innerHTML = `You scored ${score} out of ${quizQuestions.length}!`;
}

function retryQuiz() {
  initQuiz();
}

function showAnswer() {
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  retryButton.style.display = "inline-block";
  showAnswerButton.style.display = "none";

  let incorrectAnswersHtml = "";
  incorrectAnswers.forEach(item => {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${item.question}<br>
        <strong>Your Answer:</strong> ${item.incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${item.correctAnswer}
      </p>
    `;
  });

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizQuestions.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener("click", checkAnswer);
retryButton.addEventListener("click", retryQuiz);
showAnswerButton.addEventListener("click", showAnswer);

// Start quiz
initQuiz();

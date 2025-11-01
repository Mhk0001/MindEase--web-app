// const quoteText = document.querySelector('.quote'),
// authorName = document.querySelector('.author .name'),
// quoteBtn = document.querySelector("button"),
// soundBtn = document.querySelector('.sound'),
// copyBtn = document.querySelector('.copy'),
// twitterBtn = document.querySelector('.twitter');


// //random Quote function
// async function randomQuote(){

//   let url = "https://api.api-ninjas.com/v1/quotes?category=inspirational"
//   let apiKey = "dixIPrZDngYXwKjvCVbkPQ==vlsaPRX04v5G2p8i";
//   let response = await fetch(url, {
//     method: "GET",
//     headers: {
//       'X-Api-Key': apiKey
//     }
//   });

 
//   if(response.status == 200) {
//       response = await response.json();
//       console.log({updatedResponse: response});
//     } else {
//         alert("Something Went Wrong, Please refresh!");
//     }

//     console.log(response[0].quote);
//     quoteText.innerHTML = response[0].quote;
//     authorName.innerHTML = response[0].author;
//     quoteBtn.innerText = result.content;
//     quoteBtn.classList.remove("loading");
// }

// soundBtn.addEventListener("click", () =>{
//     let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
//     speechSynthesis.speak(utterance);
// })

// copyBtn.addEventListener("click", () =>{
//     let text = quoteText.innerText;
//     navigator.clipboard.writeText(text);
// });

// twitterBtn.addEventListener("click", ()=>{
//     let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
//     window.open(tweetUrl, "_blank");
// });


// quoteBtn.addEventListener("click",randomQuote);
// Select elements
const quoteText = document.querySelector('.quote'),
      authorName = document.querySelector('.author .name'),
      quoteBtn = document.querySelector("button"),
      soundBtn = document.querySelector('.sound'),
      copyBtn = document.querySelector('.copy'),
      twitterBtn = document.querySelector('.twitter');

// Array of quotes
const quotes = [
  { quote: "Never give up because you never know if the next try is going to be the one that works.", author: "Urs Oni Chan" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "You are stronger than you think.", author: "Unknown" },
  { quote: "Don't stop when you're tired. Stop when you're done.", author: "Marilyn Monroe" },
  { quote: "Little by little, one travels far.", author: "J.R.R. Tolkien" },
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  { quote: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { quote: "Don't wait for opportunity. Create it.", author: "Unknown" },
  { quote: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
  { quote: "You are capable of amazing things.", author: "Unknown" },
  { quote: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
  { quote: "Dream it. Wish it. Do it.", author: "Unknown" },
  { quote: "Work hard in silence, let success be your noise.", author: "Frank Ocean" },
  { quote: "Failure is another stepping stone to greatness.", author: "Oprah Winfrey" },
  { quote: "Your limitation—it's only your imagination.", author: "Unknown" },
  { quote: "Do something today that your future self will thank you for.", author: "Unknown" },
  { quote: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" }
];

// Function to pick a random quote
function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selected = quotes[randomIndex];
    quoteText.innerText = selected.quote;
    authorName.innerText = selected.author;
}

// Play quote as speech
soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(quoteText.innerText);
    speechSynthesis.speak(utterance);
});

// Copy quote to clipboard
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`${quoteText.innerText} — ${authorName.innerText}`);
    alert("Quote copied to clipboard!");
});

// Share quote on Twitter
twitterBtn.addEventListener("click", () => {
    let tweetText = encodeURIComponent(`${quoteText.innerText} — ${authorName.innerText}`);
    let tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, "_blank");
});

// Fetch a new quote when button is clicked
quoteBtn.addEventListener("click", randomQuote);

// Display a quote on page load
window.addEventListener("load", randomQuote);

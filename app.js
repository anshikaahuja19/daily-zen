document.addEventListener("DOMContentLoaded", function() {
  fetchQuote();
  showGreeting();
});
let allQuotes = [];

async function fetchQuote() {
  const Url = "https://dummyjson.com/quotes?limit=50";

  const res  = await fetch(Url);
  const data = await res.json();
  allQuotes = data.quotes; // store all 50
  showQuote(allQuotes[0]);               // show the first one

  // Just log it first — see what you're working with
  console.log(allQuotes);

  
}
function showQuote(quotes) {
  document.getElementById("quote-text").textContent   = `"${quotes.quote}"`;
  document.getElementById("quote-author").textContent = `— ${quotes.author}`;
}
function refreshQuote() {
  const randomIdx = Math.floor(Math.random() * allQuotes.length);
  showQuote(allQuotes[randomIdx]);
}

function showGreeting() {
  const hour = new Date().getHours(); 

  let greeting = "";

  if (hour >= 5  && hour < 12) greeting = "Good morning · start gently";
  if (hour >= 12 && hour < 17) greeting = "Good afternoon · stay present";
  if (hour >= 17 && hour < 21) greeting = "Good evening · slow down";
  if (hour >= 21 || hour < 5 ) greeting = "Good night · rest well";

  document.getElementById("greeting").textContent = greeting;
}

function searchQuotes() {
  const query = document.getElementById("search-input").value.toLowerCase();

  const filteredQuotes = allQuotes.filter(q => 
    q.quote.toLowerCase().includes(query) || 
    q.author.toLowerCase().includes(query)
  );

  if (filteredQuotes.length > 0) {
    showQuote(filteredQuotes[0]); // show first match
  } else {
    document.getElementById("quote-text").textContent = "No quotes found";
    document.getElementById("quote-author").textContent = "";
  }
}
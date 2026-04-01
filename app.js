document.addEventListener("DOMContentLoaded", function() {
  fetchQuote();
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
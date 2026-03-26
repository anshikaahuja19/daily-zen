document.addEventListener("DOMContentLoaded", function() {
  fetchQuote();
});
let allQuotes = [];

async function fetchQuote() {
  const proxyUrl = 
    "https://api.allorigins.win/get?url=" + ("https://zenquotes.io/api/quotes");

  const res  = await fetch(proxyUrl);
  const data = await res.json();
  allQuotes = JSON.parse(data.contents); // store all 50
  showQuote(allQuotes[0]);               // show the first one

  // Just log it first — see what you're working with
  console.log(allQuotes);

  
}
function showQuote(quotes) {
  document.getElementById("quote-text").textContent   = `"${quotes.q}"`;
  document.getElementById("quote-author").textContent = `— ${quotes.a}`;
}
function refreshQuote() {
  const randomIdx = Math.floor(Math.random() * allQuotes.length);
  showQuote(allQuotes[randomIdx]);
}
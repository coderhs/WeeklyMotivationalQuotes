// RANDOMLY DISPLAY QUOTES FROM A GIVEN SET

//QUOTE SET

// Random number for displaying quotes
let randomNum, randomWallNum;

// Aliasing Quote and Button elements
let quote = document.getElementById("quote");

const quote_api_url ="https://zenquotes.io/api/random";

async function getQuote(url)
{
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showQuote() {
  getQuote(quote_api_url).then(function(response) { quote.innerHTML = renderQuote(response[0]) });
  document.body.style.backgroundImage = "url('https://source.unsplash.com/random/"+screen.width+"x"+screen.height+"/?nature')";
}

function renderQuote(quote) {
  return quote.q + " <br /> <br /> <font color=#FFA81E>" + quote.a + "</font>"
}

window.onload = showQuote();

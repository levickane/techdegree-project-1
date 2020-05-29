/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
console.log('test');
/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney'
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: 'Steve Jobs'
  },
  {
    quote: "Whats up doc?!",
    source: "Buggs Bunny"
  },
  {
    quote: "Give me liberty or give me death",
    source: "Patrick Henry",
    citation: "Second Virginia Convention",
    year: "1775",
  }
];
console.log(quotes)

/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes){
  var randomQuotes = quotes[Math.floor (Math.random() * quotes.length)];  
  return randomQuotes
};
console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/



 let randomQuote = getRandomQuote(quotes);
 var print = `<p class='quote'>${randomQuote.quote}</p>`;
     print +=   `<p class='source'>${randomQuote.source}`;
                if (quotes.citation){
     print +=     `<span class='citation'>${randomQuote.citaion}</span>`
                };
                if (quotes.year){
     print +=     `<span class='year'>${randomQuote.year}</span>`
                };
                `</p>`;


 function printQuote(message){
   document.getElementById('quote-box').innerHTML = print; 
 }



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
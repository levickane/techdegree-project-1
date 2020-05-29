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
//Below here I built an array of objects (a list of quotes) 
//to be used in the random quote generator
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
  {
    quote: "I'm never having hollindaise sauce ever again",
    source: "Mike Kane",
    citation: "Denny's in Ballard, Seattle, Washington",
    year: "1972"
  }
];
//I loged this quotes to the console to make sure that
//I did it correctly
console.log(quotes)

/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes){
  //I used the method that grabs random numbers to grab a random number
  //on the list of quotes within the array. I converted that random list number
  //to the actual oject (the quote) by using bracket notation and putting the 
  //math equation within brackets following the variable 'quotes'
  var randomQuotePrints = quotes[Math.floor (Math.random() * quotes.length)];
  return randomQuotePrints
};
//I logged the 'getRandomQuote' function to the console
//to ensure that I was actually printing a random quote
//every time the page was refreshed
console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/

//I put the variable 'randomQuotePrints' within the printQuote function
//to ensure that I was getting a new random quote every time I clicked the button.
function printQuote(randomQuotePrints){
  //below here i created a variable that calls the 'getRandomQuote' function
 let randomQuote = getRandomQuote(quotes);
 //below here I created variable that initiates the HTML string. I simply used html.
 var html = `<p class='quote'>${randomQuote.quote}</p>`
     html += `<p class='source'>${randomQuote.source}`;
     //if the randomQuote has a citation then it will be printed,
     //if not, then it wont be printed.
                if (randomQuote.citation){
                    html += `<span class='citation'>${randomQuote.citation}</span>`
                };
                if (randomQuote.year){
                    html += `<span class='year'>${randomQuote.year}</span>`
                };
                `</p>`;
                //below here I set this document equation equal to my HTML string variable
                //which happens to be named 'html'
   document.getElementById('quote-box').innerHTML = html; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
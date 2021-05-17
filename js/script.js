/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [];

//different quotes in array as object with properties
quotes = [
  {quote : 'First, Solve the problem. Then, write the code.', source : 'John Johnson'},
  {quote : 'Experience is the name everyone gives to their mistakes.', source : 'Oscar Wilde'},
  {quote : 'FKnowledge is power.', source : 'Francis Bacon'},
  {quote : 'Fix the cause, not the symptom', source : 'Steve Maguire'},
  {quote : 'Everything is possible, the impossible just takes longer.', source : 'Dan Brown', citation : "Da Vinci Code",year : 2016}
];

//test
//console.log(quotes);



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
 //  variable that generates a random number
 // between zero and the last index in the `quotes` array
  var randomQuote;

 randomQuote = Math.floor(Math.random() * quotes.length);
 //Return the variable storing the random quote object
 return quotes[randomQuote];
}

/***
 * `printQuote` function
***/
function printQuote(){
let randomObj = getRandomQuote();
let quote1= "<p class='quote'>" + randomObj.quote + "</p>" + "<p class='source'>" + randomObj.source;

//to check if the random object has the properties of date and citation
if(randomObj.citation && randomObj.year){
  quote1 = quote1 + "<span class='citation'>" + randomObj.citation + "<span class= 'year'>" + randomObj.year
           + "</p>";
  console.log(quote1);
}else{
  quote1 = quote1 + "</p>";
  console.log(quote1);
}

document.getElementById('quote-box').innerHTML = quote1;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
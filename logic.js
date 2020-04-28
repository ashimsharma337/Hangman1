// GLOBAL VARIABLES
// ==============================================================================================
// Arrays and variables for holding data
var wordOptions = ["lion", "tiger", "monkey", "elephant", "zebra"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // l---
var wrongLetters = [];

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;




// FUNCTIONS (Reusable blocks of code that I will call upon when needed)
// ==============================================================================================

function startGame() {  
     selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
     lettersinWord = selectedWord.split("");
     numBlanks = lettersinWord.length;


     // Reset
     guessesleft = 9;
     wrongLetters = [];
     blanksAndSuccesses = [];
; 
     // Populate blanks and successes with right number of blanks.
     for(var i = 0; i<numBlanks; i++){
         blanksAndSuccesses.push("-");
     }
    
    // change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHtml = winCount;
    document.getElementById("lossCounter").innerHtml = lossCount;

     // Testing / Debugging
     console.log(selectedWord);
     console.log(lettersinWord);
     console.log(numBlanks);
     console.log(blanksAndSuccesses);
}


// MAIN PROCESS
// ==============================================================================================
startGame();




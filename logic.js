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
     guessesLeft = 9;
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

function checkLetter(letter){
    //check if letter exixt in code at all
    
    
    var isLetterInWord = false;

    for (var i = 0; i<numBlanks; i++){
         if(selectedWord[i] == letter){
             isLetterInWord = true;
             
         } 
    }
         //Check where in word letter exits, then populate out blanksAndSuccesses array
         if(isLetterInWord){
         for (var i = 0; i<numBlanks; i++){
            if(selectedWord[i] == letter){
               blanksAndSuccesses[i] = letter;
                
            }
          }
        }
        // Letter wasn't found
         else{
              wrongLetters.push(letter);
              guessesLeft--;
         }

         //Testing and Debugging
         console.log(blanksAndSuccesses);

}

function roundComplete(){
    console.log("Win Count: " + winCount + " | Loss Count: " +lossCount+" | Guesses Left " +guessesLeft);

    // Update the HTML to reflect the most recent count stats
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");


    // Check if user won
    if(lettersinWord.toString() == blanksAndSuccesses.toString()){
        winCount++;
        alert("You Won");

        // Update the win counter in the HTML
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    
    }

    // Check if user lost
    else if (guessesLeft == 0){
        lossCount++;
        alert("You Lost!");
        
    
        //Update HTML
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }


}


// MAIN PROCESS
// ==============================================================================================

// Initiates the code the first time
startGame();

// Register keyclicks

document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(letterGuessed);
    roundComplete();
    
//Testing / Debugging
    console.log(letterGuessed);

}

/*----- app's state (variables) -----*/

let arrayOfMovies = ["Overboard", "Ghostbusters", "Spaceballs" , "Heathers"]

let currentWord = "";

let wrongGuesses = 0; 

let correctGuesses = 0;


/*----- cached element references -----*/

let btns = document.querySelectorAll("button");
let theMain =document.querySelector("main");
let theBody = document.querySelector("body");

/*----- event listeners -----*/

//looping through each button and adding event listener to EACH button

for (let btn of btns) {
    btn.addEventListener("click", buttonClick)
}

/*----- functions -----*/


function init () {
    let randomNumber = Math.floor(Math.random() * 4);
    currentWord = arrayOfMovies[randomNumber]; //this assigns the value of currentWord to the array of movies at a randon number
    console.log(currentWord)
    generateSpace ();
}

init ()

function buttonClick (event) {
    let letterClicked = event.target.innerHTML; 
    let letterClickedLowerCase = letterClicked.toLowerCase();
    let currentWordLowerCase = currentWord.toLowerCase();
    let wordIncludesLetter = currentWordLowerCase.includes(letterClickedLowerCase);

    if (wordIncludesLetter) {
        document.querySelectorAll(".letter-" + letterClickedLowerCase).forEach(function(el){ 
            el.innerText = letterClicked; 
            correctGuesses += 1; 
            console.log(correctGuesses)
            document.getElementById("numberOfCorrectGuesses").innerText = correctGuesses
        }) 
    } else {
       wrongGuesses += 1 //adding one to current score
       document.getElementById("userScore").innerText = wrongGuesses
    }  
    
    event.target.disabled = true; 
    checkWinOrLose();
}


function generateSpace () {
    for (let letter of currentWord) {
        let newSpan= document.createElement("span"); //make the space where word will go on the page
        newSpan.innerHTML = "__ "; 
        newSpan.classList.add("letter-" + letter.toLowerCase())         
        theMain.appendChild(newSpan); 
        
    }
}


function checkWinOrLose () {
    let winningImage = document.createElement("IMG");
    winningImage.src ="images/win.png"; 
    let losingImage = document.createElement("IMG");
    losingImage.src ="images/lose.png"; 
        if (currentWord.length === correctGuesses) { 
            theBody.appendChild(winningImage);
        } 
        else if (wrongGuesses === 4){
            theBody.appendChild(losingImage);     
        } 
        
}





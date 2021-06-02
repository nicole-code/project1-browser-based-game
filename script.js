
/*----- app's state (variables) -----*/

let arrayOfMovies = ["Overboard", "Ghostbusters", "Spaceballs" , "Heathers"]

let currentWord = "";

let currentScore = 0 

let usersGuess = ["", "", "", ]; //keeps track of what letters user has guessed so far

/*----- cached element references -----*/

let btns = document.querySelectorAll("button");
let theMain =document.querySelector("main");
let theBody = document.querySelectorAll("body");

/*----- event listeners -----*/

//looping through each button and adding event listener to EACH button

for (let btn of btns) {
    btn.addEventListener("click", buttonClick)
}

/*----- functions -----*/


function init () {
    let randomNumber = Math.floor(Math.random() * 4);
    currentWord = arrayOfMovies[randomNumber]; //this assigns the value of currentWord to the array of movies at a randon number
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
        }) 
    } else {
       currentScore += 1 //adding one to current score
       document.getElementById("userScore").innerText = currentScore
    }  event.target.disabled = true; 
}


function generateSpace () {
    for (let letter of currentWord) {
        let newSpan= document.createElement("span"); //make the space where word will go on the page
        newSpan.innerHTML = "__ "; 
        newSpan.classList.add("letter-" + letter.toLowerCase())         
        theMain.appendChild(newSpan); 
        
    }
}


function winOrLose () {
    let winningImage = document.createElement("IMG");
    winningImage.src = "images/You've been Slimmmed!.png"; //refer to proper image
    let losingImage = document.createElement("IMG");
    losingImage.src = "images/80s YOU WIN.png"; 
        if (currentWord ===  ) { 
            alert("you won")
            //display winning image
            theBody.appendChild(winningImage);
            
        } 

        else if (currentScore === 4){
            alert("you lost")
              //display the losingImage   
            theBody.appendChild(losingImage);     
        } 
        
        else {

        }
}




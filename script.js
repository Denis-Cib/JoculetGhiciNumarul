
let  randomNumber = Math.floor(Math.random() * 100) +1; 


const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuesses(){
        let userGuess = Number(guessField.value);
        if(userGuess === randomNumber){
            lastResult.textContent = "Bravo bre";
            lastResult.style.backgroundColor = "green";
            lowOrHi.textContent = " ";
            setGameOver();
        }
        else if(guessCount === 10) {
            lastResult.textContent = "Game over";
            setGameOver();
        }
        else{
            lastResult.textContent= "Gresit"
            lastResult.style.backgroundColor = "red";
            if (userGuess < randomNumber)
                lowOrHi.textContent = "Numarul e mai mare";
            else if (userGuess > randomNumber)
                lowOrHi.textContent = "Numarul e mai mic";
        }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click",checkGuesses);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    resetButton.style.backgroundColor = "black";
    resetButton.style.color= "lime";
    resetButton.style.padding = "10px";
    resetButton.style.border = "1px solid green";
    resetButton.style.borderRadius="5px"
    document.body.append(resetButton);
    resetButton.addEventListener("click",resetGame);
}

function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for(let i=0; i< resetParas.length; i++)
    {
        resetParas[i].textContent = "";
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    lastResult.style.backgroundColor = "black";
    randomNumber = Math.floor(Math.random()* 100) +1;
}
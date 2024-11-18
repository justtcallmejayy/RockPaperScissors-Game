// Code for creating logic for the Game

// Modular Programming Language
let userScore =0;
let computerScore =0;

const choices = document.querySelectorAll('.choice');

const playGame = (userChoiceID)=>{
    console.log("User choice = " , userChoiceID );
    const computerChoiceID = generateCompChoice();
    console.log("Computer choice = " , computerChoiceID );
    // i am using this because the variable options was a func variable and i would not use it outside my fnc so i have to take its return value so that i could use it.
    if (userChoiceID === computerChoiceID) {
      drawGame();
    } else {
        let userWin = true;
        if (userChoiceID === "rock") {
            
        }
    }
}

// Function to generate computer's choice
const generateCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
    //this will return an index value for our options array so that we can get random values for calculating our choice for our lovely computer
}

const drawGame = ()=>{
    console.log("The Game is over, DRAW");
}

choices.forEach((choice) => {
    // Add event listener to each choice to handle user's choice
    choice.addEventListener("click", ()=> {
        const userChoiceID = choice.getAttribute("id");
    playGame(userChoiceID);
    });
    
});


// Now using if else statements for fighting



// Code for updating UI
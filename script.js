// Code for creating logic for the Game

let userScore =0;
let computerScore =0;

const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    console.log(choice);
    // Add event listener to each choice to handle user's choice
    choice.addEventListener('click', function() {
        console.log("Choices was clicked");
    });
    
});
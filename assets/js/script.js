//Wait for the DOM to finish loading before running the game
// Get the button element and add an eventlistener
document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons) {
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type')=== 'submit'){
                alert('You clicked Submit!');
            } else {
                let gameType= this.getAttribute('data-type');
                runGame(gameType)
            }
        })

    }

    runGame('addition');
})
/**The main game"loop, called when the script is loaded */
function runGame(gameType){
    //Create a random number between 1-25
    let num1 = Math.floor(Math.random() *25) +1
    let num2 = Math.floor(Math.random() *25) +1

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`unknown game type: ${gameType}`);
        throw `unknown game type: ${gameType}. Aborting`;
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer(){

}

function incrementScore() {

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operant1, operant2){
    document.getElementById('operand1').textContent = operant1;
    document.getElementById('operand2').textContent = operant2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}

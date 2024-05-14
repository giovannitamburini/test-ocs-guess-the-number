// variabile in cui salverò il numero da indovinare
let winningNumber;



// btn per entrare nel gioco
let btnStart = document.getElementById('btn-start');
// container input
let gameContainer = document.getElementById('game-container');




// evento click al bottone per dare via al gioco
btnStart.addEventListener("click", function(){

    // salvo il numero casuale
    winningNumber = generateRandomNumber(0, 100);

    console.log(winningNumber);

    // nascondo il pulsante per dare via al gioco
    btnStart.classList.add('d-none');
    
    // mostro il gioco
    gameContainer.classList.remove('d-none');
    gameContainer.classList.add('d-flex');
})







// FUNCTIONS -------------------------------------------

// funzione generatrice numero casuale tra "min"(non compreso) e "max"(compreso)
function generateRandomNumber(min, max){

    return Math.ceil(Math.random() * (max - min) + min);
}
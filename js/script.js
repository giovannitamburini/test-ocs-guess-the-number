
// variabile in cui salverò il numero da indovinare
let winningNumber;
// variabile in cui salvo la correttezza del numero inserito dall'utente
let isNumber = false;



// btn per entrare nel gioco
let btnStart = document.getElementById('btn-start');
// container input
let gameContainer = document.getElementById('game-container');
// input utente
let inputNumber = document.getElementById('input-number');
// btn per giocare
let btnPlay = document.getElementById('btn-play');






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


// evento click al btn per giocare
btnPlay.addEventListener("click", function(){

    // trasformo in intero il numero inserito
    let userNumber = parseInt(inputNumber.value);

    console.log(userNumber);

    // controllo sull'inserimento dell'utente
    isNumber = validateNumberInputField(userNumber);

    console.log(isNumber);
})





// FUNCTIONS -------------------------------------------

// funzione generatrice numero casuale tra "min"(non compreso) e "max"(compreso)
function generateRandomNumber(min, max){

    return Math.ceil(Math.random() * (max - min) + min);
}


// funzione che controlla se l'input inserito è corretto:
// - sia un numero
// - compreso tra 1 e 100
function validateNumberInputField(inputValue) {

    // se è un numero, compreso tra 1 e 100
    if( !isNaN(inputValue) && inputValue >= 1 && inputValue <= 100 ) {

        return true;
      
    } else {

        return false;
    }
}
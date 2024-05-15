
// variabile in cui salverò il numero da indovinare
let winningNumber;
// variabile in cui salvo la correttezza del numero inserito dall'utente
let isNumber = false;
// variabile in cui salvo l'esito della comparazione tra il numero utente e il numero vincente
let response;



// btn per entrare nel gioco
let btnStart = document.getElementById('btn-start');
// container input
let gameContainer = document.getElementById('game-container');
// input utente
let inputNumber = document.getElementById('input-number');
// btn per giocare
let btnPlay = document.getElementById('btn-play');
// contenitore responso gioco
let responseMessage = document.getElementById('game-response');






// evento click al bottone per dare via al gioco
btnStart.addEventListener("click", function(){

    // resetto il contenuto del responso in caso di ripetizione del gioco
    responseMessage.textContent = "";

    // salvo il numero casuale
    winningNumber = generateRandomNumber(0, 100);

    console.log("N vincente: " + winningNumber);

    // nascondo il pulsante per dare via al gioco
    btnStart.style.display = 'none';

    // mostro il gioco
    gameContainer.classList.remove('d-none');
    gameContainer.classList.add('d-flex');
})


// evento click al btn per giocare
btnPlay.addEventListener("click", function(){

    // trasformo in intero il numero inserito
    let userNumber = parseInt(inputNumber.value);

    console.log("N utente: " + userNumber);

    // controllo sull'inserimento dell'utente
    isNumber = validateNumberInputField(userNumber);

    // svuoto l'input dopo l'inserimento
    inputNumber.value = null;

    // caso inserimento corretto
    if (isNumber){

        response = compareNumbers(userNumber, winningNumber);

        console.log(response);

        // caso maggiore
        if (response == 'maggiore'){

            responseMessage.textContent = 'Il numero inserito è maggiore del numero vincente, ritenta';
            responseMessage.style.color = "blue";

        // caso minore
        } else if (response == 'minore') {

            responseMessage.textContent = 'Il numero inserito è minore del numero vincente, ritenta';
            responseMessage.style.color = "blue";

        // caso uguale
        } else {

            // nascondo il gioco in caso di vincita
            gameContainer.classList.remove('d-flex');
            gameContainer.classList.add('d-none');

            // rimostro il btn per poter ripetere la partita
            btnStart.textContent = "rigioca";
            btnStart.style.display = 'block';
            
            responseMessage.textContent = 'Hai vinto! hai indovinato il numero in x tentativi';
            responseMessage.style.color = "green";
        }
    
    // caso inserimento errato
    } else {
        
        responseMessage.textContent = 'Devi inserire un numero valido';
        responseMessage.style.color = "red";
    }
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


// funzione per comparare i numeri
function compareNumbers(numUser, winNum){

    console.log(numUser, winNum);

    if(numUser == winNum){

        return 'uguale';

    } else if (numUser > winNum ){

        return 'maggiore';

    } else {

        return 'minore';
    }
}
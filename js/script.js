// variabile in cui salverò il numero da indovinare
let winningNumber;
















// FUNCTIONS -------------------------------------------

// funzione generatrice numero casuale tra "min"(non compreso) e "max"(compreso)
function generateRandomNumber(min, max){

    return Math.ceil(Math.random() * (max - min) + min);
}
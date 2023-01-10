let pariODispari = prompt('Scegli tra Pari o Dispari');
console.log('Hai scelto:', pariODispari);

let number = parseInt(prompt('Bene, ora scegli un numero da 1 a 5'))
console.log('Hai scelto:', number)

function generaNumeroRandom(min, max) {
    
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    return numeroRandom;

}

const numero = generaNumeroRandom(1, 5);

console.log('Il numero del tuo avversario è:', numero);

function sommaNumeri(num1, num2) {
  
    const risultato = num1 + num2; 

    return risultato;
     
}

let numeroUno = number;
let numeroDue = numero;
const somma = sommaNumeri(numeroUno, numeroDue);

console.log('Risultato', somma);

function granSomma(somma) {

    if (isNaN(somma)) {

        return 'ERRORE';

    }
    else if (somma % 2 == 0) {

        return 'pari';
    
    }
        
    return 'dispari';

}

const risposta = granSomma(somma);



if (risposta == 'ERRORE') {

    alert('Il numero inserito non è valido');
    
}
else if (risposta == 'pari') {

    alert('Il risultato è pari');

}
else {
    
    alert('Il risultato è dispari');

}

if (risposta == pariODispari) {
    
    alert('Complimenti, hai vinto!')

}
else {
    
    alert('Che sfortuna! Hai perso malamente!')

}
    





 


    

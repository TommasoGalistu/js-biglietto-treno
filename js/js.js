let testoPaginaPrezzo = document.getElementById('prezzo');
let prezzoFinale;
//  chiedere all’utente il numero di chilometri che vuole percorrere 
// prompt per chiedere all'utente i chilometri
let chilometriViaggio = parseInt(prompt('Quanti chilometri devi percorrere?'));

// calcolo dei km con prezzo standard
let costoPrezzoStandard = chilometriViaggio * 0.21;
console.log(costoPrezzoStandard)

//  chiedere l’età del passeggero.
// prompt per chiedere l'età al passeggero
let etaUtente = parseInt(prompt('Quanti anni hai?'));


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
if(etaUtente < 18){
    costoPrezzoStandard *= 0.8
    prezzoFinale = costoPrezzoStandard.toFixed(2)
    testoPaginaPrezzo.innerHTML = prezzoFinale
}else if(etaUtente > 65){
    costoPrezzoStandard *= 0.6
    prezzoFinale = costoPrezzoStandard.toFixed(2)
    testoPaginaPrezzo.innerHTML = prezzoFinale
} else{
    prezzoFinale = costoPrezzoStandard.toFixed(2)
    testoPaginaPrezzo.innerHTML = prezzoFinale
}




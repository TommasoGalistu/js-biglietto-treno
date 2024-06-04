let testoPaginaPrezzo = document.getElementById('prezzo')
//  chiedere all’utente il numero di chilometri che vuole percorrere 
// prompt per chiedere all'utente i chilometri
let chilometriViaggio = parseInt(prompt('Quanti chilometri devi percorrere?'))

//  chiedere l’età del passeggero.
// prompt per chiedere l'età al passeggero
let etaUtente = parseInt(prompt('Quanti anni hai?'))
console.log(typeof(etaUtente), etaUtente)

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

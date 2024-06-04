// variabile del contenitore dell'output per l'utente
let contTestoOutPut = document.querySelector('.contRisultato')
// variabile contenitore che deve apparire in caso di errore
let contTestoErrore = document.querySelector('.contErrore')

if(isNaN(prezzoFinale) || !chilometriViaggio || !etaUtente){
    contTestoOutPut.classList.add('d-none')
    contTestoErrore.classList.remove('d-none')
}



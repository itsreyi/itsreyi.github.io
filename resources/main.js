function calcolaSecondiTrascorsi(dataInizio) {
    // Data attuale
    var dataAttuale = new Date();

    // Calcola la differenza in millisecondi
    var differenza = dataAttuale.getTime() - dataInizio.getTime();

    // Converti la differenza in secondi
    var secondiTrascorsi = Math.floor(differenza / 1000);

    return secondiTrascorsi;
}

// Data sei anni fa
var seiAnniFa = new Date();
seiAnniFa.setFullYear(seiAnniFa.getFullYear() - 6);

// Calcola i secondi trascorsi da sei anni fa fino ad ora
var secondiTotali = calcolaSecondiTrascorsi(seiAnniFa);


var seconds = document.getElementById('seconds')

function setSeconds(){
    secondiTotali++
    seconds.textContent = secondiTotali
}

setInterval(setSeconds, 1000)

let jours = document.querySelector(".jours span");
let heures = document.querySelector(".heures span");
let minutes = document.querySelector(".minutes span");
let secondes = document.querySelector(".secondes span");

let compteur = 950400; // 11 jours en secondes

function formatTemps(secs) {
    let heures = Math.floor(secs / 3600);
    let minutes = Math.floor((secs % 3600) / 60);
    let secondes = secs % 60;
    let jours = Math.floor(heures / 24);

    heures %= 24;

    return {jours, heures, minutes, secondes};
}

function decrementerCompteur() {
    if(compteur > 0) {
        let temps = formatTemps(compteur);
        jours.innerText = temps.jours;
        heures.innerText = temps.heures;
        minutes.innerText = temps.minutes;
        secondes.innerText = temps.secondes;
        compteur--;
    } else {
        document.querySelector('.timer').innerText = "Le compte à rebours est terminé !";
        clearInterval(intervalId); // Arrête le compte à rebours
    }
}

let intervalId = setInterval(decrementerCompteur, 1000); // Appelle la fonction decrementerCompteur toutes les secondes
let simple = document.querySelector(".option1");
let hex = document.querySelector(".option2");
let monBouton = document.getElementById("clickme");
let monMessage = document.querySelector(".boite span");
let couleurs = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let couleurshex = ["#F00020", "#FF8000", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#7f00ff"]

let selectedOption;

function defaut() {
    let couleurdefaut = "#F1f5f8";
    document.body.style.backgroundColor = couleurdefaut;
    monMessage.textContent = couleurdefaut.charAt(0).toUpperCase() + couleurdefaut.slice(1);
    monMessage.style.color = "#51a7e6";
    monBouton.style.backgroundColor = couleurdefaut;
}

function couleursimple() {
    let couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
    document.body.style.backgroundColor = couleurAleatoire;
    monMessage.textContent = couleurAleatoire.charAt(0).toUpperCase() + couleurAleatoire.slice(1);
    monMessage.style.color = couleurAleatoire;
    monBouton.style.backgroundColor = couleurAleatoire;
}

function couleurhex() {
    let couleurAleatoirehex = couleurshex[Math.floor(Math.random() * couleurshex.length)];
    document.body.style.backgroundColor = couleurAleatoirehex;
    monMessage.textContent = couleurAleatoirehex.charAt(0).toUpperCase() + couleurAleatoirehex.slice(1);
    monMessage.style.color = couleurAleatoirehex;
    monBouton.style.backgroundColor = couleurAleatoirehex;
}

simple.addEventListener("click", () => {
    selectedOption = simple;
    defaut();
});

hex.addEventListener("click", () => {
    selectedOption = hex;
    defaut();
});


monBouton.addEventListener("click", () => {
    switch(selectedOption) {
        case simple:
            couleursimple();
            break;
        case hex:
            couleurhex();
            break;
        default:
            couleursimple();
    }
});

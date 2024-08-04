let compteur1 = document.querySelector(".compteur1");
let compteur2 = document.querySelector(".compteur2");

let decrease_first = document.querySelector(".decrease-first");
let reset_first = document.querySelector(".reset-first");
let increase_first = document.querySelector(".increase-first");

let decrease_second = document.querySelector(".decrease-second");
let reset_second = document.querySelector(".reset-second");
let increase_second = document.querySelector(".increase-second");

compteur1.innerHTML = parseInt(100);
compteur2.innerHTML = parseInt(200);

function first() {
    decrease_first.addEventListener("click", () => {
        compteur1.innerHTML = parseInt(compteur1.innerHTML) - 1;
    });
    
    reset_first.addEventListener("click", () => {
        compteur1.innerHTML = 0;
    });
    
    increase_first.addEventListener("click", () => {
        compteur1.innerHTML = parseInt(compteur1.innerHTML) + 1;
    });
}

function second() {
    decrease_second.addEventListener("click", () => {
        compteur2.innerHTML = parseInt(compteur2.innerHTML) - 1;
    });
    
    reset_second.addEventListener("click", () => {
        compteur2.innerHTML = 0;
    });
    
    increase_second.addEventListener("click", () => {
        compteur2.innerHTML = parseInt(compteur2.innerHTML) + 1;
    });
}

first();
second();
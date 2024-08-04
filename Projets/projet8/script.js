let swipedroite = document.querySelector(".swipe-right");
let swipealeatoire = document.querySelector(".aleatoire");
let swipegauche = document.querySelector(".swipe-left");
let anna = document.querySelector(".anna");
let peter = document.querySelector(".peter");
let bill = document.querySelector(".bill");
let susan = document.querySelector(".susan");

let bloc = [anna, peter, bill, susan];

let index = 0;

for(let i = 0; i < bloc.length; i++) {
    bloc[i].style.display = 'none';
}

bloc[index].style.display = 'block';

function swiperight() {
    swipedroite.addEventListener("click", () => {
        for(let i = 0; i < bloc.length; i++) {
            bloc[i].style.display = 'none';
        }
          
        index = (index + 1) % bloc.length;
        
        bloc[index].style.display = 'block';
    });
}

function swipeleft() {
    swipegauche.addEventListener("click", () => {
        for(let i = 0; i < bloc.length; i++) {
            bloc[i].style.display = 'none';
        }
          
        index = (index - 1 + bloc.length) % bloc.length;
        
        bloc[index].style.display = 'block';
    });
}

function changementaleatoire() {
    swipealeatoire.addEventListener("click", () => {
        for(let i = 0; i < bloc.length; i++) {
        bloc[i].style.display = 'none';
        }
        
        let index = Math.floor(Math.random() * bloc.length);
    
        bloc[index].style.display = 'block';
    });
}

swiperight();
changementaleatoire();
swipeleft();
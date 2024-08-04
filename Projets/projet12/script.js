let icon = document.querySelectorAll("i");
let question = document.querySelectorAll(".question");
let invisible = document.querySelectorAll(".invisible");

icon.forEach(function(bouton, index) {
    bouton.addEventListener("click", () => {
        icon.forEach(function(otherIcon, otherIndex) {
            if (otherIcon !== bouton && otherIcon.classList.contains('fa-square-minus')) {
                otherIcon.classList.remove('fa-square-minus');
                otherIcon.classList.add('fa-square-plus');
                question[otherIndex].classList.remove('question-active');
                invisible[otherIndex].setAttribute("style", "display:none;");
            }
        });
        
        if (bouton.classList.contains('fa-square-plus')) {
            bouton.classList.remove('fa-square-plus');
            bouton.classList.add('fa-square-minus');
            question[index].classList.add('question-active');
            invisible[index].setAttribute("style", "display: block;");
        } else {
            bouton.classList.remove('fa-square-minus');
            bouton.classList.add('fa-square-plus');
            question[index].classList.remove('question-active');
            invisible[index].setAttribute("style", "display: none;");
        }
    });
});

let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let textNumber = document.getElementById("compteur");
let boutonblock = document.querySelector('.block');

function block() {
    if (increase) {
        increase.addEventListener("click", () => {
            let newNumber = parseInt(textNumber.innerHTML) + 1;
            textNumber.innerHTML = newNumber;
            if (newNumber > 0) {
                textNumber.style.color = "green";
            }
            
            if (newNumber === 0) {
                textNumber.style.color = "black";
            }
        });
    }

    if (decrease) {
        decrease.addEventListener("click", () => {
            let newNumber = parseInt(textNumber.innerHTML) - 1;
            textNumber.innerHTML = newNumber;
            if (newNumber < 0) {
                textNumber.style.color = "red";
            } 

            if (newNumber === 0) {
                textNumber.style.color = "black";
            }
        });
    }

    if (reset) {
        reset.addEventListener("click", () => {
            let newNumber = parseInt(textNumber.innerHTML) * 0;
            textNumber.innerHTML = newNumber;
            if (newNumber == 0) {
                textNumber.style.color = "black";
            }
        });
    }
}

block();
let submit = document.querySelector(".submit");
let edit = document.querySelector(".edit");
let boite = document.querySelector(".boite");
let clear = document.querySelector(".clear");
let input = document.querySelector("#liste");
let truc = document.querySelector(".truc");
let ajouter = document.querySelectorAll(".ajout");

let added = document.querySelector(".added");
let erreur = document.querySelector(".error");
let empty = document.querySelector(".empty");
let changed = document.querySelector(".changed");
let removed = document.querySelector(".removed");

function timer() {
    setTimeout(function() {
        added.setAttribute("style", "display:none;");
        erreur.setAttribute("style", "display:none;");
        empty.setAttribute("style", "display:none;");
        removed.setAttribute("style", "display:none;");
        changed.setAttribute("style", "display:none;");
    }, 2000);
}

function ajout() {
    let div = document.createElement("div");

    div.className = "ajout";

    div.classList.add("ajout");

    let span = document.createElement("span");
    span.className = "texte";
    span.textContent = input.value;

    let icon = document.createElement("div");

    let icone = document.createElement("i");
    icone.className = "fa-regular fa-pen-to-square";

    let icone2 = document.createElement("i");
    icone2.className = "fa-solid fa-trash";

    icone.addEventListener("click", () => {

        divEnCoursDeModification = div;

        input.value = div.querySelector(".texte").textContent;

        submit.setAttribute("style", "display:none;");
        edit.setAttribute("style", "display:block;");
    });

    edit.addEventListener("click", () => {
        if (divEnCoursDeModification) {
            divEnCoursDeModification.querySelector(".texte").textContent = input.value;
            divEnCoursDeModification = null;
        }

        changed.setAttribute("style", "display:block;");
        added.setAttribute("style", "display:none;");
        erreur.setAttribute("style", "display:none;");
        removed.setAttribute("style", "display:none;");
        empty.setAttribute("stlye", "display:none;");
        timer();

        submit.setAttribute("style", "display:block;");
        edit.setAttribute("style", "display:none;");
        input.value = "";
    });

    icone2.addEventListener("click", () => {
        div.remove();
        changed.setAttribute("style", "display:none;");
        added.setAttribute("style", "display:none;");
        erreur.setAttribute("style", "display:none;");
        empty.setAttribute("stlye", "display:none;");
        removed.setAttribute("style", "display:block;");
        timer();
    });

    div.appendChild(span);
    div.appendChild(icon);
    icon.appendChild(icone);
    icon.appendChild(icone2);

    clear.before(div);
}

function effacer() {
    let div = document.querySelectorAll(".ajout");

    div.forEach(function(divs) {
        divs.parentNode.removeChild(divs);
    });
}

input.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        if (input.value === "") {
            added.setAttribute("style", "display:none;");
            erreur.setAttribute("style", "display:block;");
            empty.setAttribute("stlye", "display:none;");
            removed.setAttribute("style", "display:none;");
            changed.setAttribute("style", "display:none;");
            timer();
        } else {
            erreur.setAttribute("style", "display:none;");
            added.setAttribute("style", "display:block;");
            empty.setAttribute("stlye", "display:none;");
            removed.setAttribute("style", "display:none;");
            changed.setAttribute("style", "display:none;");
            clear.setAttribute("style", "visibility:visible;");
            timer();
            ajout();
            input.value = "";
        }
    }
});

submit.addEventListener("click", () => {
    if (input.value === "") {
        added.setAttribute("style", "display:none;");
        erreur.setAttribute("style", "display:block;");
        empty.setAttribute("stlye", "display:none;");
        removed.setAttribute("style", "display:none;");
        changed.setAttribute("style", "display:none;");
        timer();
    } else {
        erreur.setAttribute("style", "display:none;");
        added.setAttribute("style", "display:block;");
        empty.setAttribute("stlye", "display:none;");
        removed.setAttribute("style", "display:none;");
        changed.setAttribute("style", "display:none;");
        clear.setAttribute("style", "visibility:visible;");
        timer();
        ajout();
        input.value = "";
    }
});

clear.addEventListener("click", () => {
    empty.setAttribute("style", "display:block;");
    timer();
    effacer();
    clear.setAttribute("style", "visibility:hidden;");
    erreur.setAttribute("style", "display:none;");
    added.setAttribute("style", "display:none;");
    removed.setAttribute("style", "display:none;");
    changed.setAttribute("style", "display:none;");
});

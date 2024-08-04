let background = document.querySelector('img');
let bouton = document.querySelector(".bouton");
let boite = document.querySelector(".boite");
let boite2 = document.querySelector(".boite2");
let fermer = document.querySelector(".fermer");

let active = false;
bouton.addEventListener("click", () => {
    boite.setAttribute("style", "display:none;");
    boite2.setAttribute("style", "display:block;");
    background.setAttribute("style", "filter: sepia(100%) hue-rotate(190deg) saturate(500%);");
});

function close() {
    fermer.addEventListener("click", () => {
        boite.setAttribute("style", "display:flex;");
        boite2.setAttribute("style", "display:none;");
        background.setAttribute("style", "filter: none;");
        active = false;
    });
}

close();
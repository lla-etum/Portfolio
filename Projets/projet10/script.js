let bouton = document.querySelector("i");
let sidebar = document.querySelector(".sidebar");
let chose = document.querySelector(".chose");
let fermer = document.querySelector(".fermer");

let changement = false;
bouton.addEventListener("click", () => {
    if (!changement) {
        sidebar.setAttribute("style", "width:400px;");
        chose.setAttribute("style", "transform: translateX(0px);");
        changement = true;
    } else {
        sidebar.setAttribute("style", "width:0px;");
        chose.setAttribute("style", "transform: translateX(-500px);");
        changement = false;
    }
});

fermer.addEventListener("click", () => {
    sidebar.setAttribute("style", "width:0px;");
    chose.setAttribute("style", "transform: translateX(-500px);");
    changement = false;
});

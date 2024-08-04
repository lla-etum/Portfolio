let info1 = document.querySelector(".info");
let info2 = document.querySelector(".info2");
let info3 = document.querySelector(".info3");

let choix = document.querySelectorAll(".choix");

let boutonhistory = document.querySelector(".history");
let boutonvision = document.querySelector(".vision");
let boutongoals = document.querySelector(".goals");

boutonhistory.addEventListener("click", () => {
    boutonhistory.setAttribute("style", "background-color: white;");
    boutonvision.setAttribute("style", "background-color: #dae2ec;");
    boutongoals.setAttribute("style", "background-color: #dae2ec;");
    info1.setAttribute("style", "display:block;");
    info2.setAttribute("style", "display:none;");
    info3.setAttribute("style", "display:none;");
});

boutonvision.addEventListener("click", () => {
    boutonhistory.setAttribute("style", "background-color: #dae2ec;");
    boutonvision.setAttribute("style", "background-color: white;");
    boutongoals.setAttribute("style", "background-color: #dae2ec;");
    info1.setAttribute("style", "display:none;");
    info2.setAttribute("style", "display:block;");
    info3.setAttribute("style", "display:none;");
    
});

boutongoals.addEventListener("click", () => {
    boutonhistory.setAttribute("style", "background-color: #dae2ec;");
    boutonvision.setAttribute("style", "background-color: #dae2ec;");
    boutongoals.setAttribute("style", "background-color: white;");
    info1.setAttribute("style", "display:none;");
    info2.setAttribute("style", "display:none;");
    info3.setAttribute("style", "display:block;");
    
});

choix.forEach(function(element) {
    element.addEventListener("click", function() {
        this.classList.add("no-hover");
    });
});
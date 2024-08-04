let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let imagecontainer = document.querySelector(".image-container");

let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");
let page4 = document.querySelector(".page4");

let calcul = 0;

next.addEventListener("click", () => {
    calcul -= 100;
    if (calcul === -100) {
        imagecontainer.setAttribute("style", "transform: translateX(-125%);");
        prev.setAttribute("style", "display:block;");
        next.setAttribute("style", "display:block;");
    } else if (calcul === -200) {
        imagecontainer.setAttribute("style", "transform: translateX(-225%);");
        prev.setAttribute("style", "display:block;");
        next.setAttribute("style", "display:block;");
    } else if (calcul === -300) {
        imagecontainer.setAttribute("style", "transform: translateX(-338%);");
        prev.setAttribute("style", "display:block;");
        next.setAttribute("style", "display:none;");
    }
});

prev.addEventListener("click", () => {
    calcul += 100;
    if (calcul === 0) {
        imagecontainer.setAttribute("style", "transform: translateX(0%);");
        prev.setAttribute("style", "display:none;");
        next.setAttribute("style", "display:block;");
    } else if (calcul === -100) {
        imagecontainer.setAttribute("style", "transform: translateX(-125%);");
        prev.setAttribute("style", "display:block;");
        next.setAttribute("style", "display:block;");
    } else if (calcul === -200) {
        imagecontainer.setAttribute("style", "transform: translateX(-225%);");
        prev.setAttribute("style", "display:block;");
        next.setAttribute("style", "display:block;");
    }
});
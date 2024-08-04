let image1 = document.querySelector(".image1");
let image2 = document.querySelector(".image2");
let image3 = document.querySelector(".image3");
let image4 = document.querySelector(".image4");
let image5 = document.querySelector(".image5");
let image6 = document.querySelector(".image6");
let image7 = document.querySelector(".image7");
let image8 = document.querySelector(".image8");

let fermer = document.querySelector(".fermer");
let overlay = document.querySelector(".overlay");

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");

let imagecontainer = document.querySelector(".page");

image1.addEventListener("click", () => {
    overlay.setAttribute("style", "display: block;");
    page1.setAttribute("style", "display:block;");
    page2.setAttribute("style", "display:none;");
    page3.setAttribute("style", "display:none;");
});

fermer.addEventListener("click", () => {
    overlay.setAttribute("style", "display: none;");
})

next.addEventListener("click", () => {
    if (page1) {
        page1.setAttribute("style", "display:none;");
        page2.setAttribute("style", "display:block;");
        page3.setAttribute("style", "display:none;");
        console.log("azyt");
    } else if (page2.setAttribute("style", "display:block;")) {
        page1.setAttribute("style", "display:none;");
        page2.setAttribute("style", "display:none;");
        page3.setAttribute("style", "display:block;");
        console.log("azy");
    } else if (page3) {
        page1.setAttribute("style", "display:block;");
        page2.setAttribute("style", "display:none;");
        page3.setAttribute("style", "display:none;");
    }
})

prev.addEventListener("click", () => {
    if (page1) {
        page1.setAttribute("style", "display:block;");
        page2.setAttribute("style", "display:none;");
        page3.setAttribute("style", "display:none;");
    } else if (page2) {
        page1.setAttribute("style", "display:none;");
        page2.setAttribute("style", "display:block;");
        page3.setAttribute("style", "display:none;");
    } else if (page3) {
        page1.setAttribute("style", "display:none;");
        page2.setAttribute("style", "display:none;");
        page3.setAttribute("style", "display:block;");
    }
})
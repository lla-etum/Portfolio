let bars = document.querySelector(".burger");
let nav = document.querySelector("nav");

let changement = false;
bars.addEventListener("click", () => {
    if (!changement) {
        nav.style.height = "230px";
        changement = true;
    } else {
        nav.style.height = "72px";
        changement = false;
    }
});
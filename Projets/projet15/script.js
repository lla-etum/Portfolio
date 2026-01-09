let navbar = document.querySelector("nav");
let href = document.querySelectorAll('a[href^="#"]');
let lien = document.querySelector(".lien");
let lien2 = document.querySelector(".lien2");
let bars = document.querySelector(".bars");
let image = document.querySelector(".fond");
let centre = document.querySelector(".centre");
let lien3 = document.querySelector(".lien3");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50 && window.innerWidth >= 800) {
        navbar.style.position = "fixed";
        navbar.style.backgroundColor = "white";
        lien.setAttribute("style", "display:none;");
        lien2.setAttribute("style", "display:block;");
    } else if (window.innerWidth < 800) {
        navbar.style.position = "fixed";
        navbar.style.backgroundColor = "white";
        lien.setAttribute("style", "display:none;");
        lien2.setAttribute("style", "display:none;");
    } else {
        navbar.style.position = "absolute";
        navbar.style.backgroundColor = "transparent";
        lien.setAttribute("style", "display:block;");
        lien2.setAttribute("style", "display:none;");
    }
});

href.forEach(anchor => {
    anchor.addEventListener('click', function(e) {

        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            e.preventDefault();
    
            var targetPosition = document.querySelector(this.getAttribute('href')).offsetTop;
        
            let scrollToPosition = targetPosition + -88;
        
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    });
})

window.addEventListener("resize", () => {
    if (window.innerWidth < 800) {
        bars.setAttribute("style", "display:block;");
    } else {
        bars.setAttribute("style", "display:none;");
    }
});

let changement = false;
bars.addEventListener("click", () => {
    if (!changement) {
        navbar.style.height = "260px";
        image.setAttribute("style", "margin-top:260px;");
        centre.setAttribute("style", "margin-top:260px;");
        lien3.setAttribute("style", "max-height:500px;");
        lien3.setAttribute("style", "display:block;");
        Array.from(lien3.children).forEach((child, i) => {
            child.style.animationDelay = `${i * 0.1}s`;
        });
        changement = true;
        window.addEventListener("scroll", () => {
            if (window.innerWidth < 800 && changement) {
                if (window.scrollY > 200) {
                    navbar.style.position = "fixed";
                } else {
                    navbar.style.position = "absolute";
                }
            }
        });

        lien3.addEventListener("click", () => {
            navbar.style.height = "";
            image.setAttribute("style", "margin-top:0;");
            centre.setAttribute("style", "margin-top:0px;");
            lien3.setAttribute("style", "max-height:0;");
            changement = false;
        });
    } else {
        navbar.style.height = "";
        image.setAttribute("style", "margin-top:0;");
        centre.setAttribute("style", "margin-top:0px;");
        lien3.setAttribute("style", "max-height:0;");
        lien3.setAttribute("style", "display:none;");
        Array.from(lien3.children).forEach((child) => {
            child.style.animationDelay = "";
        });
        changement = false;
    }
});

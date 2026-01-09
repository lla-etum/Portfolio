let generation = document.querySelector(".loading");
let choix = document.getElementById("choix");
let bouton = document.querySelector(".bouton");

function genererLoremIpsum(n) {
    const mots = 'lorem ipsum dolor sit amet consectetur adipiscing elit'.split(' ');
    const resultat = [];
    for(let i = 0; i < n; i++) {
        const paragraphe = [];
        const nombreDeMots = Math.floor(Math.random() * 100) + 1;
        for(let j = 0; j < nombreDeMots; j++) {
            const indexAleatoire = Math.floor(Math.random() * mots.length);
            paragraphe.push(mots[indexAleatoire]);
        }
        resultat.push(paragraphe.join(' '));
    }
    return resultat.join('<br><br>');
}

function choixUtilisateur() {
    choix.addEventListener("change", () => {
        choix.textContent = this.value;
    });
}

bouton.addEventListener("click", () => {
    var nombreParagraphes = choix.value;

    var loremIpsum = genererLoremIpsum(nombreParagraphes);

    generation.innerHTML = loremIpsum;
});

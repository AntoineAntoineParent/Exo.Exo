let michel = document.getElementById("pierre-michel");
let michelCaramel = document.createElement("h1");
let michelParagraphe = document.createElement("p");
let pierre = document.getElementById("pierre");


michelCaramel.innerText = "les caramels sont pas des bonbons";
michel.appendChild(michelCaramel);

michelParagraphe.innerText = "Mais quand même c'est bon le caramel";
michel.appendChild(michelParagraphe);



function supprimerLaLigne(id) {
    let supp = document.getElementById(id);

    michel.removeChild(supp)
}

let cacahuete = document.createElement("h2");
let paul = document.getElementById("paul");
pierre.replaceChild(cacahuete, paul);
cacahuete.innerText = "Le nouveau sous-titre"
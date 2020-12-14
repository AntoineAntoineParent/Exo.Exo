let lesdivs = document.getElementsByTagName("div");
console.log("il y a " + lesdivs.length + " div voici ce qu'elles contiennent:");

for (let i = 0; i < lesdivs.length; i++) {
    let Cellule = lesdivs[i];
    console.log(Cellule.innerText)
}

let lesdivsjaunes = document.getElementsByClassName("b_yellow");
console.log("il y a " + lesdivsjaunes.length + " divs jaunes voici ce qu'elles contiennent:");

for (let i = 0; i < lesdivsjaunes.length; i++) {
    let CelluleJaune = lesdivsjaunes[i];
    console.log(CelluleJaune.innerText)
}

let section = document.querySelector("#container .b_yellow")

console.log("voici le contenue de l'element identifié par le selecteur #container .b_yellow " + section.innerText)

let section = document.querySelector("#container .b_yellow")

console.log("voici le contenue de l'element identifié par le selecteur #container .b_yellow " + section.innerText)


let section2 = document.querySelectorAll("#container .b_yellow");
console.log("il y a " + section2.length + " balises qui ont une classe b_yellow :");
for (let i = 0; i < section2.length; i++) {
    let cellule2 = section2[i];
    console.log(cellule2.innerText)
}
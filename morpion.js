let color_case = "rose"


//c'est une case bleu
function jouer(id) {
    console.log(id)
    let cell = document.getElementById(id)
        //vérification que si la case est bleu, elle ne devient pas rose, et inversement
    if (cell.classList.contains("rose") || cell.classList.contains("blue")) {

    } else {

    }
    //pour mettre en rose
    if (color_case == "blue") {
        cell.classList.add("rose")
        cell.innerText = "X"
        color_case = "rose"

        //sinon c'est bleu       
    } else {
        cell.classList.add("blue")
        cell.innerText = "O"
        color_case = "blue"
    }

    //message gagnant bleu
    let case1 = document.getElementById("case1")
    let case2 = document.getElementById("case2")
    let case3 = document.getElementById("case3")
    let case4 = document.getElementById("case4")
    let case5 = document.getElementById("case5")
    let case6 = document.getElementById("case6")
    let case7 = document.getElementById("case7")
    let case8 = document.getElementById("case8")
    let case9 = document.getElementById("case9")




    //VICTOIRE BLEU PAR POSSIBILITES
    if (case1.classList.contains("blue") && case2.classList.contains("blue") && case3.classList.contains("blue")) {
        alert("VICTOIRE BLEU!!!!")
    } //ligne 1
    if (case4.classList.contains("blue") && case5.classList.contains("blue") && case6.classList.contains("blue")) {
        alert("VICTOIRE BLEU!!!!")
    } //ligne 2 
    if (case7.classList.contains("blue") && case8.classList.contains("blue") && case9.classList.contains("blue")) {
        alert("VICTOIRE BLEU!!!!")
    } //ligne 3
    if (case1.classList.contains("blue") && case4.classList.contains("blue") && case7.classList.contains("blue")) {
        alert("VICTOIRE BLEU!!!!")
    } //hauteur 1
    if (case2.classList.contains("blue") && case5.classList.contains("blue") && case8.classList.contains("blue")) {
        alert("VICTOIRE BLEU!!!!")
    } //hauteur 2 
    if (case3.classList.contains("blue") && case6.classList.contains("blue") && case9.classList.contains("blue")) {
        alert("VICTOIRE BLEU!!!!")
    } //hauteur 3 
    if (case1.classList.contains("blue") && case5.classList.contains("blue") && case9.classList.contains("blue")) {
        alert("VICTOIRE BLEU!!!!")
    } //diagonale 1
    if (case3.classList.contains("blue") && case5.classList.contains("blue") && case7.classList.contains("blue")) {
        alert("VICTOIRE BLEU!!!!")
    } //diagonale 2

    //VICTOIRE ROSE PAR POSSIBILITES
    if (case1.classList.contains("rose") && case2.classList.contains("rose") && case3.classList.contains("rose")) {
        alert("VICTOIRE ROSE!!!!")
    } //ligne 1
    if (case4.classList.contains("rose") && case5.classList.contains("rose") && case6.classList.contains("rose")) {
        alert("VICTOIRE ROSE!!!!")
    } //ligne 2 
    if (case7.classList.contains("rose") && case8.classList.contains("rose") && case9.classList.contains("rose")) {
        alert("VICTOIRE ROSE!!!!")
    } //ligne 3
    if (case1.classList.contains("rose") && case4.classList.contains("rose") && case7.classList.contains("rose")) {
        alert("VICTOIRE ROSE!!!!")
    } //hauteur 1
    if (case2.classList.contains("rose") && case5.classList.contains("rose") && case8.classList.contains("rose")) {
        alert("VICTOIRE ROSE!!!!")
    } //hauteur 2 
    if (case3.classList.contains("rose") && case6.classList.contains("rose") && case9.classList.contains("rose")) {
        alert("VICTOIRE ROSE!!!!")
    } //hauteur 3 
    if (case1.classList.contains("rose") && case5.classList.contains("rose") && case9.classList.contains("rose")) {
        alert("VICTOIRE ROSE!!!!")
    } //diagonale 1
    if (case3.classList.contains("rose") && case5.classList.contains("rose") && case7.classList.contains("rose")) {
        alert("VICTOIRE ROSE!!!!")
    } //diagonale 2

}


//remettre les cases en blanc
//la function va remettre une à une les cases en blanc grace au bouton Rejouer
function Rejouer() {
    let cell = document.getElementById("case1")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case2")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case3")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case4")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case5")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case6")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case7")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case8")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case9")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
}
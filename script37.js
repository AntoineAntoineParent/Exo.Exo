function btSuivant() {
    let DivViolet = document.getElementById("leviolet")
    let DivRouge = document.getElementById("lerouge")
    let DivVert = document.getElementById("levert")

    if (DivRouge.style.display == "inherit") {
        DivVert.style.display = "inherit"
        DivViolet.style.display = "none"
        DivRouge.style.display = "none"
    } else if (DivVert.style.display == 'inherit') {
        DivVert.style.display = "none"
        DivViolet.style.display = "inherit"
        DivRouge.style.display = "none"
    } else {
        DivVert.style.display = "none"
        DivViolet.style.display = "none"
        DivRouge.style.display = "inherit"
    }
}
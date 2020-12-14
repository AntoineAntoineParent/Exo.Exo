function btSuivant() {
    let Divspace1 = document.getElementById("space1")
    let Divspace2 = document.getElementById("space2")
    let Divspace3 = document.getElementById("space3")

    function btSuivant() {
        let Lespace1 = document.getElementById("space1")
        let Lespace2 = document.getElementById("space2")
        let Lespace3 = document.getElementById("space3")

        if (Lespace1.style.display == '' || Lespace1.style.display == 'inherit') {
            Laspace2.classList.add("afficher")
            Lespace2.classList.remove("masque")
            Lespace3.classList.add("masque")
            Lespace3.classList.remove("afficher")
            Lespace1.classList.add("masque")
            Lespace1.classList.remove("afficher")

        } else if (Lespace2.style.display == 'inherit' || Lespace2.style.display == '') {
            Lespace2.classList.add("masque")
            Lespace2.classList.remove("afficher")
            Lespace3.classList.add("afficher")
            Lespace3.classList.remove("masque")
            Lespace1.classList.add("masque")
            Lespace1.classList.remove("afficher")
            alert("peu importe")
        } else {
            Lespace2.classList.add("masque")
            Lespace2.classList.remove("afficher")
            Lespace3.classList.add("masque")
            Lespace3.classList.remove("afficher")
            Lespace1.classList.add("afficher")
            Lespace1.classList.remove("masque")
        }
    }
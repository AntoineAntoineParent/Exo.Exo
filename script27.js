//dire bonjour à l'utilisateur (avec son nom)
nom = prompt("Quel est ton nom?")
alert("Bonjour " + nom)


//demande l'âge de l'utilisateur
let myage = 28
age = prompt("Quel age as tu ?")

if (age < myage) {
    alert("Je suis plus vieux que toi.")
} else if (age > myage) {
    alert("vous etes vieux par rapport à moi.")
} else if (age == myage) {
    alert("Comme moi !!! C'est fou...")
}
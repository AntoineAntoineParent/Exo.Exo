tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < tab.length; i++) {
    console.log("à la case " + i + " le tableau prend la valeur " + tab[i])
}
for (let i = 0; i < tab.length; i++) {
    resultat = tab[i] * 10
    console.log("à la case " + i + " le tableau prend la valeur " + resultat)
    document.write("à la case " + i + " le tableau prend la valeur " + resultat)
}
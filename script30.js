function convertirCenF(Celsius) {
    return (9 * Celsius + (32 * 5) / 5)
}

let Celsius = prompt("quel est la température en Calsius?")

alert(convertirCenF(Celsius))
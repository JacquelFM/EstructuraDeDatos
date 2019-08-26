let btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);

function calcular() {
    let intN = Number(document.querySelector("#intN").value);
    let intX = Number(document.querySelector("#intX").value);

    let resultadoSerie = obtenerSerie(intN, intX);

    document.querySelector("#mostrarResultado").innerHTML = "El resultado de la serie es: " + resultadoSerie;
}

function obtenerFactorial(intN) {
    let temporal = 1;

    for (let i = 1; i <= intN; i++) {
        temporal *= i;
    }

    return temporal;
}

function obtenerSerie(intN, intX) {
    let suma = 0;

    for (let i = 1; i < intN; i++) {
        let exponente = Math.pow(intX, i);
        let factorial = obtenerFactorial(i);
        suma += (exponente / factorial);
    }

    suma++;

    return suma;
}
let btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);

function calcular() {

    let intLimite = Number(document.querySelector("#intLimite").value);
    let resultadoSerie = obtenerSerie(intLimite);

    document.querySelector("#mostrarResultado").innerHTML=" El resultado de la serie es: " + resultadoSerie;

}

function obtenerSerie(n) {
    let denominador = 1;
    let resultado = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            resultado -= 4 / denominador;

        } else {
            resultado += 4 / denominador;
        }

        denominador += 2;
    }

    return resultado;
}
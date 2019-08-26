let btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);

function calcular() {
    let intNumero = Number(document.querySelector("#intNumero").value);
    let resultadoNumero = esPerfecto(intNumero);

    if (resultadoNumero == true) {
        document.querySelector("#mostrarResultado").innerHTML = "El número es perfecto";
    } else {
        document.querySelector("#mostrarResultado").innerHTML = "El número no es perfecto";
    }
}

function esPerfecto(intNumero) {
    if (obtenerSumaDivisores(intNumero) == intNumero) {
        return true;
    } else {
        return false;
    }
}

function obtenerSumaDivisores(numero) {
    let suma = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i == 0) {
            suma += i;
        }
    }

    return suma;
}
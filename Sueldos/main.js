let btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);

function calcular() {
    let intSueldo = Number(document.querySelector("#intSueldo").value);
    let porcentaje = sacarPorcentaje(intSueldo);
    let nuevoSueldo = sacarAumento(porcentaje, intSueldo);

    document.querySelector("#mostrarResultado").innerHTML = "El nuevo sueldo es de: " + nuevoSueldo;

}

function sacarPorcentaje(cantidad) {
    if (cantidad >= 0 && cantidad <= 1000) {
        return 15;
    } else if (cantidad >= 1001 && cantidad <= 1200) {
        return 12;
    } else if (cantidad >= 1201 && cantidad <= 1400) {
        return 10;
    } else if (cantidad >= 1401 && cantidad <= 1500) {
        return 8;
    } else if (cantidad > 1500) {
        return 5;
    }

}

function sacarAumento(n, cantidad) {
    let nuevoPorcentaje = (100 + n) / 100;
    let sueldo = cantidad * nuevoPorcentaje;

    return sueldo;
}
let btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcular);

function calcular() {
    let intHoraEntrada = document.querySelector("#horaEntrada").value;
    let intHoraSalida = document.querySelector("#horaSalida").value;
    let resultadoTiempoTrabajado = obtenerDiferencia(intHoraEntrada, intHoraSalida)

    document.querySelector("#mostrarResultado").innerHTML =
        "Horas trabajadas: " + resultadoTiempoTrabajado[0] + "<br>" +
        "Minutos trabajados: " + resultadoTiempoTrabajado[1] + "<br>" +
        "Segundos trabajados: " + resultadoTiempoTrabajado[2];
}

function obtenerDiferencia(horaEntrada, horaSalida) {
    let diferencia = obtenerHoraEnSegundos(horaSalida) - obtenerHoraEnSegundos(horaEntrada);
    let arrayHorasTrabajadas = [Math.trunc(diferencia / 3600), 0, 0]
    let residuoHoras = diferencia % 3600;
    let residuoMinutos = residuoHoras % 60;
    let minutos = residuoHoras / 60;

    if (residuoHoras != 0 && residuoMinutos == 0) {
        arrayHorasTrabajadas[1] = minutos;
    } else {
        arrayHorasTrabajadas[1] = Math.trunc(minutos);
        arrayHorasTrabajadas[2] = residuoMinutos;
    }

    return arrayHorasTrabajadas;
}

function obtenerHoraEnSegundos(hora) {
    let horaArray = hora.split(":");
    let horaSegundo = 0;

    if (Number(horaArray[0]) == 0) {
        horaSegundo = 86400;
    } else {
        horaSegundo = Number(horaArray[0]) * 3600;
    }

    let suma = horaSegundo + Number(horaArray[1]) * 60;

    if (horaArray.length == 3) {
        suma += Number(horaArray[2]);
    }

    return suma;
}
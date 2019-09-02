import Punto from "./Punto.js";

class Main {
    constructor() {

        document.querySelector("#btnCalcularDistancia").addEventListener("click", () => {
            let x1 = Number(document.querySelector("#x1").value);
            let x2 = Number(document.querySelector("#x2").value);
            let y1 = Number(document.querySelector("#y1").value);
            let y2 = Number(document.querySelector("#y2").value);

            let puntoUno = new Punto(x1, y1);
            let puntoDos = new Punto(x2, y2);
            let valorDistancia = sacarDiferencia(puntoUno, puntoDos);

            if (valorDistancia != "No") {
                document.querySelector("#mostrarDistancia").innerHTML = `La distancia entre los dos puntos es de: ${valorDistancia.toString()}.`;

            } else {
                document.querySelector("#mostrarDistancia").innerHTML = "Lo sentimos, el rango es de -100, -100 a 100, 100 por punto.";
            }

        });

        function sacarDiferencia(puntoUno, puntoDos) {
            if (validarPosicion(puntoDos) == true && validarPosicion(puntoUno) == true) {
                let diferenciaX = Math.pow(puntoDos._posicionX - puntoUno._posicionX, 2);
                let diferenciaY = Math.pow(puntoDos._posicionY - puntoUno._posicionY, 2);

                return Math.sqrt(diferenciaX + diferenciaY);
            } else {
                return "No";
            }
        }

        function validarPosicion(punto) {
            if ((punto._posicionX >= -100 && punto._posicionX <= 100) && (punto._posicionY >= -100 && punto._posicionY <= 100)) {
                return true;
            } else {
                return false;
            }
        }
    }
}

let m = new Main();
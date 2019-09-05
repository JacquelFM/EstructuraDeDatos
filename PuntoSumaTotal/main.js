import Punto from "./Punto.js";
let vectorPuntos = new Array();

class Main {
    constructor() {

        document.querySelector("#btnMostrarDistanciaTotal").addEventListener("click", () => {
            /*
                document.querySelector("#mostrarDistancia").innerHTML = `La distancia entre los dos puntos es de: ${valorDistancia.toString()}.`;
            */
        });

        document.querySelector("#btnCrearNuevo").addEventListener("click", () => {
            let coorX = Number(document.querySelector("#coorX").value);
            let coorY = Number(document.querySelector("#coorY").value);

            nuevoPunto(coorX, coorY);

        });

        let suma = 0;

        function nuevoPunto(coorX, coorY) {
            let longitud = (vectorPuntos.length) + 1;
            let punto = new Punto(longitud);

            punto.posicionX = coorX;
            punto.posicionY = coorY;

            vectorPuntos.push(punto);

            let a = vectorPuntos.length;

            if (a > 1) {
                suma += punto.obtenerDistancia(vectorPuntos[a - 2]);
                console.log(suma);
            }
        }
    }
}

let m = new Main();
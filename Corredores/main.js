import Corredor from "./Corredor.js";
import Dado from "./Dado.js";

class Main {
    constructor() {
        let corredorUno = new Corredor(1);
        let corredorDos = new Corredor(2);
        let dado = new Dado();

        document.querySelector("#btnDadoUno").addEventListener("click", () => {
            obtenerPasos(corredorUno);

            document.querySelector("#posicionUno").innerHTML = "Posición: " + corredorUno.posicion;

        });

        function obtenerPasos(numCorredor) {
            let numPasos = dado.lanzarDado();

            if (numCorredor.ganar() == false) {
                if (numPasos <= 3) {
                    if (numPasos == 1) {
                        numCorredor.correr(3);
                    } else {
                        numCorredor.correr(numPasos - 1);
                    }
                }
                obtenerGanador(numCorredor);
            } else {
                obtenerGanador(numCorredor);
            }
        }

        function obtenerGanador(numCorredor) {
            if (numCorredor.ganar() == true && corredorDos.posicion == corredorUno.posicion) {
                document.querySelector("#mostrarGanador").innerHTML = "Hubo un empate entre los corredores";
            } else if (numCorredor.ganar() == true) {
                document.querySelector("#mostrarGanador").innerHTML = "El ganador es el corredor #" + numCorredor.numero;
            }
        }

        document.querySelector("#btnDadoDos").addEventListener("click", () => {
            obtenerPasos(corredorDos);

            document.querySelector("#posicionDos").innerHTML = "Posición: " + corredorDos.posicion;

        });
    }
}

let m = new Main();
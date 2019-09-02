import Corredor from "./Corredor.js";
import Dado from "./Dado.js";

class Main {
    constructor() {
        let corredorUno = new Corredor(1);
        let corredorDos = new Corredor(2);
        let dado = new Dado();

        document.querySelector("#btnDadoUno").addEventListener("click", () => {

            //Corregir esto
            obtenerPasos(corredorUno);
            obtenerPasos(corredorDos);

            document.querySelector("#posicionDos").innerHTML = "Posición: " + corredorDos.posicion;
            document.querySelector("#posicionUno").innerHTML = "Posición: " + corredorUno.posicion;

        });

        function obtenerPasos(numCorredor) {
            let numPasos = dado.lanzarDado();

            // NOTA: Un while y corregir valor pasos del dado

            while (corredorUno.posicion < 100 && corredorDos.posicion < 100) {

                //Corregir esto
                if (numPasos <= 3) {
                    if (numPasos == 1) {
                        numCorredor.correr(3);
                    } else {
                        numCorredor.correr(numPasos - 1);
                    }
                }
                obtenerGanador(numCorredor);
            }
        }

        function obtenerGanador(numCorredor) {
            if (corredorDos.ganar() == true && corredorUno.ganar() == true) {
                document.querySelector("#mostrarGanador").innerHTML = "Hubo un empate entre los corredores";
            } else if (numCorredor.ganar() == true) {
                document.querySelector("#mostrarGanador").innerHTML = "El ganador es el corredor #" + numCorredor.numero;
            }
        }

    }
}

let m = new Main();
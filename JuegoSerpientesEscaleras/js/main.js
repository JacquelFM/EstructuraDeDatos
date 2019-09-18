import Tablero from "./Tablero.js";
import Dado from "./Dado.js";
import Jugador from "./Jugador.js";

class Main {
    constructor() {
        let jugador1 = new Jugador(1, "Miguel Ángel");
        let jugador2 = new Jugador(2, "Edgar Eduardo");
        let tablero = new Tablero();
        let dado = new Dado();

        document.querySelector("#btnJugar").addEventListener("click", () => {
            console.log(comenzarJuego());

        });

        function validarPosicion(jugador) {
            if (tablero.longitud[jugador.posicion] != 0 && (jugador.posicion <= tablero.longitud.length)) {
                let objeto = tablero.longitud[jugador.posicion];

                if (objeto.idObjeto == "s") {
                    jugador.bajarConSerpiente(objeto.largo);
                } else {
                    jugador.subirEscalera(objeto.largo);
                }
            }
        }

        function comenzarJuego() {
            while (jugador1.posicion <= 100 && jugador2.posicion <= 100) {
                let casillas = dado.lanzar();

                jugador1.avanzar(casillas);
                validarPosicion(jugador1);

                casillas = dado.lanzar();
                jugador2.avanzar(casillas);
                validarPosicion(jugador2);

            }

            console.log("Posición jugador #1: " + jugador1.posicion);
            console.log("Posición jugador #2: " + jugador2.posicion);

            if (jugador1.posicion >= 100 && jugador2.posicion >= 100) {
                return "Hubo un empate :c";

            } else if (jugador1.posicion >= 90) {
                return "El ganador es el jugador #1";

            } else if (jugador2.posicion >= 90) {
                return "El ganador es jugador #2";
            }
        }
    }
}

let m = new Main();
import Tortuga from "./Tortuga.js";
import Liebre from "./Liebre.js";

class Main {
    constructor() {
        let liebre = new Liebre(1, "Adam", "macho", 5);
        let tortuga = new Tortuga(2, "Roger", "macho", 2);

        document.querySelector("#btnCompetir").addEventListener("click", () => {
            document.querySelector("#mostrarGanador").innerHTML = comenzarCompetir();
        });

        function comenzarCompetir() {
            let trayecto = 0;

            while (liebre._posicion <= 90 && tortuga._posicion <= 90) {
                trayecto = Math.trunc((Math.random() * 100 + 1));

                liebre.correr(trayecto);
                tortuga.correr(trayecto);

                //console.log(`Tayecto liebre: ${liebre._posicion}. vs. Tayecto tortuga: ${tortuga._posicion}.`);
            }

            if (liebre._posicion >= 90 && tortuga._posicion >= 90) {
                return "Hubo un empate :c";

            } else if (liebre._posicion >= 90) {
                return "El ganador es la liebre :3";

            } else if (tortuga._posicion >= 90) {
                return "El ganador es la tortuga *-*";
            }
        }
    }
}

let m = new Main();
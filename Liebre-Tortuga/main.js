import Tortuga from "./Tortuga.js";
import Liebre from "./Liebre.js";
import Dado from "./Dado.js";

class Main {
    constructor() {
        let liebre = new Liebre(1, "Adam", "macho", 5);
        let tortuga = new Tortuga(2, "Roger", "macho", 2);
        let dado = new Dado();

        document.querySelector("#btnCompetir").addEventListener("click", () => {
            document.querySelector("#mostrarGanador").innerHTML = comenzarCompetir();
        });

        function comenzarCompetir() {
            while (liebre.posicion <= 90 && tortuga.posicion <= 90) {
                let trayecto = dado.lanzar();

                liebre.correr(trayecto);
                trayecto = dado.lanzar();
                tortuga.correr(trayecto);
            }

            console.log(`Tayecto liebre: ${liebre.posicion}. vs. Tayecto tortuga: ${tortuga.posicion}.`);

            if (liebre.posicion >= 90 && tortuga.posicion >= 90) {
                return "Hubo un empate :c";

            } else if (liebre.posicion >= 90) {
                return "El ganador es la liebre :3";

            } else if (tortuga.posicion >= 90) {
                return "El ganador es la tortuga *-*";
            }
        }
    }
}

let m = new Main();
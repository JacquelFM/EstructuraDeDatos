import Elevador from "./Elevador.js";

class Main {
    constructor() {
        let elevador1 = new Elevador(1, 20, 10);

        document.querySelector("#pisos").addEventListener("change", () => {
            let pisoSeleccionado = Number(document.querySelector("#pisos").value);
            elevador1.cambiarPiso(pisoSeleccionado);

            console.log(elevador1.getToString());
        });

        document.querySelector("#btnAbrirPuerta").addEventListener("click", () => {
            elevador1.puerta = true;
            console.log("La puerta está abierta.");
            console.log(elevador1.getToString());
        });

        document.querySelector("#btnCerrarPuerta").addEventListener("click", () => {
            elevador1.puerta = false;
            console.log("La puerta está cerrada.");
            console.log(elevador1.getToString());
        });

    }
}

let m = new Main();
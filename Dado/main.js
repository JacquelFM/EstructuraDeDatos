import Dado from "./Dado.js";

class Main {
    constructor() {
        document.querySelector("#btnDado").addEventListener("click", () => {
            sumaDeRepeticiones();

            function sumaDeRepeticiones() {
                let dado = new Dado();

                let array = [0, 0, 0, 0, 0, 0];

                for (let i = 0; i < 100; i++) {
                    let numeroElegido = dado.lanzarDado();
                    array[numeroElegido - 1]++;
                }

                for (let ii = 0; ii < array.length; ii++) {
                    console.log("El " + (ii + 1) + " se repitió " + array[ii] + " veces.")
                }

            }

        });
    }
}

let m = new Main();
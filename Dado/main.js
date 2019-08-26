class Dado {
    constructor() {

        sumaDeRepeticiones();

        function sumaDeRepeticiones() {
            let array = [0, 0, 0, 0, 0, 0];

            for (let i = 1; i <= 100; i++) {
                let numeroElegido = lanzarDado();

                switch (numeroElegido) {
                    case 1:
                        array[0]++;
                        break;
                    case 2:
                        array[1]++;
                        break;
                    case 3:
                        array[2]++;
                        break;
                    case 4:
                        array[3]++;
                        break;
                    case 5:
                        array[4]++;
                        break;
                    case 6:
                        array[5]++;
                        break;
                }
            }

            for (let ii = 0; ii < array.length; ii++) {
                console.log("El " + (ii + 1) + " se repitió " + array[ii] + " veces.")
            }

        }

        function lanzarDado() {
            let numeroAleatorio = Math.floor(Math.random() * (7 - 1) + 1);
            return numeroAleatorio;
        }
    }
}

let dado = new Dado();
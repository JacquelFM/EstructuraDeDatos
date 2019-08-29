export default class Corredor {
    constructor(numero) {
        this.posicion = 0;
        this.numero = numero;
    }

    correr(pasos) {
        this.posicion += pasos;
    }

    ganar() {
        if (this.posicion >= 100) {
            return true;
        } else {
            return false;
        }
    }

}
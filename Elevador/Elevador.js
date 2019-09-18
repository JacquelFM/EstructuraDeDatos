export default class Elevador {
    constructor(numero, capacidadPersonas, totalPisos, puerta = true, piso = 1) {
        this._numero = numero;
        this._capacidadPersonas = capacidadPersonas;
        this._totalPisos = totalPisos;
        this._puerta = puerta;
        this._piso = piso;
    }

    get numero() {
        return this._numero;
    }

    get capacidadPersonas() {
        return this._capacidadPersonas;
    }

    get totalPisos() {
        return this._totalPisos;
    }

    get puerta() {
        return this._puerta;
    }

    get piso() {
        return this._piso;
    }

    set totalPisos(nuevoPiso) {
        this._totalPisos += totalPisos;
    }

    set puerta(estadoPuerta) {
        this._puerta = estadoPuerta;
    }

    set piso(nuevoPiso) {
        this._piso = nuevoPiso;
    }

    getToString() {
        return `Número del elevador: ${this._numero}, 
        número de piso: ${this._piso},  
        capacidad de personas: ${this._capacidadPersonas},
        estado de la puerta: ${this._puerta}
        y total de pisos ${this._totalPisos}.`;
    }

    cambiarPiso(pisoSeleccionado) {
        if (this._puerta == true) {
            console.log("Piso anterior:" + this._piso)

            let diferencia = pisoSeleccionado - Number(this._piso);
            console.log(diferencia);
            this._puerta = false;

            if (diferencia > 0) {
                //Subir
                for (let i = 1; i <= diferencia; i++) {
                    this._piso += 1;
                }

            } else if (diferencia < 0) {
                //Bajar
                for (let i = this._piso; i >= (pisoSeleccionado + 1); i--) {
                    this._piso -= 1;
                }
            }

            this._puerta = true;

            console.log("Piso actual:" + this._piso)

        } else {
            this._puerta = true;
        }

    }

}
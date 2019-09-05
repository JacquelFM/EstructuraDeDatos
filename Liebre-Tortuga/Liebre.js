import Corredor from "./Corredor.js";

export default class Liebre extends Corredor {
    constructor(numero, alias, sexo, peso, posicion = 0) {
        super(numero, alias, sexo, peso);
        this._posicion = posicion;
    }

    get posicion() {
        return this._posicion;
    }

    correr(trayecto) {
        if (trayecto <= 20) {
            return this._posicion;

        } else if (trayecto <= 40) {
            this._posicion += 9;
        } else if (trayecto <= 50) {
            this._posicion -= 12;
        } else if (trayecto <= 85) {
            this._posicion += 1;
        } else if (trayecto <= 100) {
            this._posicion -= 2;
        }

        return trayecto;
    }

}
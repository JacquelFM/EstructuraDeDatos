import Corredor from "./Corredor.js"

export default class Tortuga extends Corredor {
    constructor(numero, alias, sexo, peso, posicion = 0) {
        super(numero, alias, sexo, peso);
        this._posicion = posicion;
    }

    get posicion() {
        return this._posicion;
    }

    correr(trayecto) {
        if (trayecto <= 50) {
            this._posicion += 3;
        } else if (trayecto <= 70) {
            this._posicion -= 6;
        } else if (trayecto <= 100) {
            this._posicion += 1;
        }

        return trayecto;
    }
}
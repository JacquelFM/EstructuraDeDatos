import Base from "./Base.js";

export default class Ruta {
    constructor(nombre, tiempoMinutosTotal) {
        this._nombre = nombre;
        this._tiempoMinutosTotal = tiempoMinutosTotal;
        this._bases = new Array(
            new Base(),
            new Base(),
            new Base(),
            new Base(),
            new Base()
        );
    }

    get nombre() {
        return this._nombre;
    }

    set tiempoMinutosTotal() {
        this._tiempoMinutosTotal = this.tiempoMinutosTotal;
    }

    get bases() {
        return this._bases;
    }
}
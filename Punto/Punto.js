export default class Punto {
    constructor(x, y) {
        this._posicionX = x;
        this._posicionY = y;
    }

    set posicionX(valorX) {
        this._posicionX = valorX;
    }

    set posicionY(valorY) {
        this._posicionY = valorY;
    }

}
export default class Punto {
    constructor(num, coorX = 0, coorY = 0) {
        this._numero = num;
        this._posicionX = coorX;
        this._posicionY = coorY;
    }

    get numero() {
        return this._numero;
    }

    set posicionX(pX) {
        if (pX >= -100 && pX <= 100) {
            return this._posicionX = pX;
        } else {
            return this._posicionX = 0;;
        }
    }

    set posicionY(pY) {
        if (pY >= -100 && pY <= 100) {
            return this._posicionY = pY;
        } else {
            return this._posicionY = 0;;
        }
    }

    getToString() {
        return `(${this._posicionX},${this._posicionY})`;
    }

    obtenerDistancia(puntoAdicional) {
        console.log(puntoAdicional._posicionX);
        console.log(this._posicionX);
        let diferenciaX = Math.pow(puntoAdicional._posicionX - this._posicionX, 2);
        let diferenciaY = Math.pow(puntoAdicional._posicionY - this._posicionY, 2);

        return Math.sqrt(diferenciaX + diferenciaY);
    }

}
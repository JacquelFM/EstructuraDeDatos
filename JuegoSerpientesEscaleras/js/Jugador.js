export default class Jugador {
    constructor(numero, nombre, posicion = 0) {
        this._numero = numero;
        this._nombre = nombre;
        this._posicion = posicion;
    }

    get numero() {
        return this._numero;
    }

    get nombre() {
        return this._nombre;
    }

    get posicion() {
        return this._posicion;
    }

    avanzar(casillas) {
        this._posicion += casillas;
    }

    subirEscalera(casillas) {
        this._posicion += casillas;
    }

    bajarConSerpiente(casillas) {
        this._posicion -= casillas;
    }

    toString() {
        return `Número del jugador: ${this._numero} 
        y nombre: ${this._nombre}`;
    }

};
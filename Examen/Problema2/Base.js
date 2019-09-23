import Salida from "./Salida";

export default class Base {
    constructor(nombre, latitud, longitud, tiempoMinutos) {
        this._nombre = nombre;
        this._latitud = latitud;
        this._longitud = longitud;
        this._tiempoMinutos = tiempoMinutos;
        this._salidas = new Array(
            new Salida(),
            new Salida(),
            new Salida(),
            new Salida(),
            new Salida()
        );
    }

    get nombre() {
        return this._nombre;
    }

    get latitud() {
        return this._latitud;
    }

    get longitud() {
        return this._longitud;
    }

    get tiempoMinutos() {
        return this._tiempoMinutos;
    }

    get salidas() {
        return this._salidas;
    }

}
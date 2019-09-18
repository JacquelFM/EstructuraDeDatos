export default class Serpiente {
    constructor(posicionCabeza, largo, idObjeto) {
        this._posicionCabeza = posicionCabeza;
        this._largo = largo;
        this._idObjeto = idObjeto;
    }

    get posicionCabeza() {
        return this._posicionCabeza;
    }

    get largo() {
        return this._largo;
    }

    get idObjeto() {
        return this._idObjeto;
    }

};
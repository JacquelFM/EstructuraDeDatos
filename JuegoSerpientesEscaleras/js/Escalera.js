export default class Escalera {
    constructor(inicio, largo, idObjeto) {
        this._inicio = inicio;
        this._largo = largo;
        this._idObjeto = idObjeto;
    }

    get inicio() {
        return this._inicio;
    }

    get largo() {
        return this._largo;
    }

    get idObjeto() {
        return this._idObjeto;
    }

};
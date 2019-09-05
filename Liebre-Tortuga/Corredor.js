export default class Corredor {
    constructor(numero, alias, sexo, peso) {
        this._numero = numero;
        this._alias = alias;
        this._sexo = sexo;
        this._peso = peso;
    }

    get numero() {
        return this._numero;
    }

    get alias() {
        return this._alias;
    }

    get sexo() {
        return this._sexo;
    }

    get peso() {
        return this._peso;
    }

    set alias(valorNuevoAlias) {
        this._alias = valorNuevoAlias;
    }

    set peso(nuevoPeso) {
        this._peso = nuevoPeso;
    }

    getToString() {
        return `Número del corredor: ${this._numero},  
        nombre: ${this._alias},
        peso: ${this._peso}
        y sexo ${this._sexo}.`;
    }
}
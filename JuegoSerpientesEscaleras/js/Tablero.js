import Serpiente from "./Serpiente.js";
import Escalera from "./Escalera.js";

export default class Tablero {
    constructor(longitud = new Array(100)) {
        this._longitud = longitud;

        for (let i = 0; i < this._longitud.length; i++) {
            this._longitud[i] = 0;
        }

        this._longitud[38] = new Serpiente(38, 18, "s");
        this._longitud[51] = new Serpiente(51, 41, "s");
        this._longitud[76] = new Serpiente(76, 22, "s");
        this._longitud[97] = new Serpiente(97, 36, "s");
        this._longitud[91] = new Serpiente(91, 18, "s");

        this._longitud[5] = new Escalera(5, 53, "e");
        this._longitud[14] = new Escalera(14, 35, "e");
        this._longitud[53] = new Escalera(53, 19, "e");
        this._longitud[64] = new Escalera(64, 19, "e");

    }

    get longitud() {
        return this._longitud;
    }


};
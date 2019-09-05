export default class Competicion {
    constructor(competidorUno, competidorDos, dado) {
        this._competidorUno = competidorUno;
        this._competidorDos = competidorDos;
        this._dado = dado;
    }

    comenzarCompetir() {
        while (this._competidorUno._posicion <= 90 && this._competidorDos._posicion <= 90) {
            let trayecto = this._dado.lanzarDado();

            this._competidorUno.correr(trayecto);
            this._competidorDos.correr(trayecto);

            console.log(`Tayecto liebre: ${this._competidorUno._posicion}. vs. Tayecto tortuga: ${this._competidorDos._posicion}.`);
        }

        if (this._competidorUno._posicion >= 90 && this._competidorDos._posicion >= 90) {
            return "Hubo un empate :c";

        } else if (this._competidorUno._posicion >= 90) {
            return "El ganador es la liebre :3";

        } else if (this._competidorDos._posicion >= 90) {
            return "El ganador es la tortuga *-*";
        }

    }
}
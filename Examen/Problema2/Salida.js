export default class Salida {
    constructor(camion, base, horaInicio, horaFin, secuencia) {
        this._camion = camion;
        this._base = base;
        this._horaInicio = horaInicio;
        this._horaFin = horaFin;
        this._secuencia = secuencia;
    }

    get camion() {
        return this._camion;
    }

    get base() {
        return this._base;
    }

    set horaIncio() {
        this._horaInicio = horaInicio;
    }

    set horafin() {
        this._horaFin = horaFin;
    }

    set secuencia() {
        this._secuencia = this.secuencia;
    }


}
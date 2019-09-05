export default class Dado {
    constructor() {}

    lanzar() {
        let numeroAleatorio = Math.trunc((Math.random() * 100 + 1));;
        return numeroAleatorio;
    }
}
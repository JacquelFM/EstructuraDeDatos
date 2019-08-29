export default class Dado {
    constructor() {}

    lanzarDado() {
        let numeroAleatorio = Math.floor(Math.random() * (7 - 1) + 1);
        return numeroAleatorio;
    }
}
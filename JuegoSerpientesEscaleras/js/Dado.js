export default class Dado {
    constructor() {}

    lanzar() {
        let numeroAleatorio = Math.floor(Math.random() * 6 + 1);
        return numeroAleatorio;
    }

}
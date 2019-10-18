export default class Registro {
    constructor() {
        this._lista = null;
    }

    get lista() {
        return this._lista;
    }

    agregarArticulo(nuevoArticulo) {
        if (this._lista == null) {
            this._lista = nuevoArticulo;
        } else {
            this._agregarArticulo(nuevoArticulo, this._lista);
        }

        console.log(this._lista);
    }

    _agregarArticulo(nuevoArticulo, ultimo) {

        console.log(ultimo.despues)
        if (ultimo.despues == null) {
            ultimo.despues = nuevoArticulo;
            ultimo.despues.anterior = ultimo;

            console.log("p0");

        } else if (nuevoArticulo.codigo < ultimo.despues.codigo) {
            console.log("p1");

            nuevoArticulo.despues = ultimo.despues;
            nuevoArticulo.anterior = ultimo;
            ultimo.despues = nuevoArticulo;

            console.log(this._lista);


        } else if (nuevoArticulo.codigo > ultimo.despues.codigo) {
            console.log("p2");

            nuevoArticulo.anterior = ultimo.despues;
            ultimo.despues.despues = nuevoArticulo;

            console.log(this._lista);

        } else {
            this._agregarArticulo(nuevoArticulo, ultimo.despues);
        }
    }


    mostrarArticulos() {
        let alguien = this._lista;

        console.log(alguien.codigo);

        while (alguien.despues != null) {
            console.log(alguien.despues.codigo);
            alguien = alguien.despues;
        }
    }


    mostrarArticulosInversos() {
        let alguien = this._lista;

        if (this._lista == null) {
            console.log("No hay ningún articulo agregado.");
        } else {
            this._sacarUltimoArticulo(alguien);
        }
    }

    _sacarUltimoArticulo(alguien) {
        if (alguien.despues == null) {
            console.log(alguien.codigo);
            this._mostrarArticulosInversos(alguien, this._lista);
        } else {
            alguien = alguien.despues;
            this._sacarUltimoArticulo(alguien);
        }
    }

    _mostrarArticulosInversos(paro, gente) {
        if (gente != null) {
            if (gente.despues == paro) {
                console.log(gente.codigo);
                this._mostrarArticulosInversos(paro = gente, gente = this._lista);
            } else {
                gente = gente.despues;
                this._mostrarArticulosInversos(paro, gente);
            }
        }
    }

    buscarArticulos(codigo) {
        if (this._lista == null) {
            console.log("No hay ningún articulo agregado.");
        } else {
            this._buscar(codigo, this._lista);
        }
    }

    _buscar(codigo, alguien) {
        if (alguien.codigo == codigo) {
            console.log(alguien.toString());
        } else {
            console.log("No es: " + alguien.codigo);
            alguien = alguien.despues;
            this._buscar(codigo, alguien);
        }
    }

    eliminarArticulos(codigo) {
        if (this._lista == null) {
            console.log("No hay ningún articulo agregado.");
        } else {
            let temporal = "";
            this._eliminarArticulos(codigo, this._lista, temporal);
        }
    }

    _eliminarArticulos(codigo, alguien, temporal) {
        if (alguien.codigo == codigo) {
            this._nuevaLista(temporal, alguien.despues)
        } else {
            temporal = alguien;
            alguien = alguien.despues;

            this._eliminarArticulos(codigo, alguien, temporal);
        }
    }

    _nuevaLista(anterior, siguiente) {
        anterior.despues = siguiente;
        console.log(this._lista);
    }


}
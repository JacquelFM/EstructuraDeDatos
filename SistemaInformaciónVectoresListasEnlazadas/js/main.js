import Articulo from "./Articulo.js";
import Registro from "./Registro.js";

class Main {
    constructor() {
        let registro = new Registro();

        document.querySelector("#btnAgregar").addEventListener("click", () => {
            let intCodigo = document.querySelector("#numCodigo").value;
            let intNombre = document.querySelector("#nombreArticulo").value;
            let intPrecio = Number(document.querySelector("#precioArticulo").value);
            let intCantidad = Number(document.querySelector("#cantidad").value);
            let intDescripcion = document.querySelector("#descripcionArticulo").value;

            registro.agregarArticulo(
                new Articulo(
                    intCodigo,
                    intNombre,
                    intPrecio,
                    intCantidad,
                    intDescripcion
                ));

        });

        document.querySelector("#btnBuscar").addEventListener("click", () => {
            //registro.mostrarArticulos();  ->  check;

            // registro.mostrarArticulosInversos(); ->  check;

            //registro.buscarArticulos("A13");  -> check;

            registro.eliminarArticulos("A14");

        });
    }
}

let m = new Main();
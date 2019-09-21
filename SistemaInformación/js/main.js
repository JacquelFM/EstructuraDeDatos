import Articulo from "./Articulo.js";
import Registro from "./Registro.js";

class Main {
    constructor() {

        let registro = new Registro(
            document.querySelector("#tablaArticulos")
        );
        let articulos = new Array();
        let tabla = [document.querySelector("#tablaArticulos")];

        document.querySelector("#btnAgregar").addEventListener("click", () => {
            let intCodigo = document.querySelector("#numCodigo").value;
            let intNombre = document.querySelector("#nombreArticulo").value;
            let intPrecio = Number(document.querySelector("#precioArticulo").value);
            let intCantidad = Number(document.querySelector("#cantidad").value);
            let intDescripcion = document.querySelector("#descripcionArticulo").value;
            let posicionAgregar = Number(document.querySelector("#posicionAgregar").value);
            let longitud = articulos.length;


            if (posicionAgregar > 0 && (longitud > 0 && posicionAgregar <= longitud)) {
                console.log(posicionAgregar);

                let nuevosArticulos = [];

                for (let i = 0; i < (posicionAgregar - 1); i++) {
                    nuevosArticulos.push(articulos[i]);
                }

                nuevosArticulos.push(new Articulo(
                    intCodigo,
                    intNombre,
                    intPrecio,
                    intCantidad,
                    intDescripcion
                ));

                for (let i = (posicionAgregar - 1); i < longitud; i++) {
                    nuevosArticulos.push(articulos[i]);
                }

                articulos = nuevosArticulos;

                registro.tabla = tabla;

                for (let i = 0; i < articulos.length; i++) {
                    registro.agregarArticulo(articulos[i]);
                }

                registro.articulos = articulos;

            } else {
                articulos.push(new Articulo(
                    intCodigo,
                    intNombre,
                    intPrecio,
                    intCantidad,
                    intDescripcion
                ));

                let longitud = articulos.length;
                registro.agregarArticulo(articulos[longitud - 1]);

            }

        });

        document.querySelector("#btnBuscar").addEventListener("click", () => {
            let intCodigoABuscar = document.querySelector("#intCodigoBuscar").value;
            let resultado = registro.buscarArticulo(intCodigoABuscar);

            alert(articulos[resultado].toString());

        });
    }
}

let m = new Main();
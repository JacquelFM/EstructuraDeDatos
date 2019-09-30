import Articulo from "./Articulo.js";
import Registro from "./Registro.js";

class Main {
    constructor() {
        let registro = new Registro(
            document.querySelector("#tablaArticulos")
        );
        let articulos = new Array();

        document.querySelector("#btnAgregar").addEventListener("click", () => {
            let intCodigo = document.querySelector("#numCodigo").value;
            let intNombre = document.querySelector("#nombreArticulo").value;
            let intPrecio = Number(document.querySelector("#precioArticulo").value);
            let intCantidad = Number(document.querySelector("#cantidad").value);
            let intDescripcion = document.querySelector("#descripcionArticulo").value;
            let longitud = articulos.length;

            articulos.push(new Articulo(
                intCodigo,
                intNombre,
                intPrecio,
                intCantidad,
                intDescripcion
            ));

            longitud = articulos.length;
            registro.agregarArticuloPrueba(articulos[longitud - 1]);

        });

        document.querySelector("#btnBuscar").addEventListener("click", () => {
            let intCodigoABuscar = document.querySelector("#intCodigoBuscar").value;
            let resultado = registro.buscarArticulo(intCodigoABuscar);

            alert(articulos[resultado].toString());

        });
    }
}

let m = new Main();
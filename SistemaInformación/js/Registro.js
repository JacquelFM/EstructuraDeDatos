export default class Registro {
    constructor(tabla) {
        this._tabla = tabla;
        this._articulos = [];
    }

    set tabla(nuevaTabla) {
        this._tabla = nuevaTabla;
    }

    set articulos(nuevosArticulos) {
        this._articulos = [];
        this._articulos = nuevosArticulos;
    }

    agregarArticulo(articulo) {
        let row = this._tabla.insertRow(-1);
        let celdaNumCodigo = row.insertCell(0);
        let celdaNombreArticulo = row.insertCell(1);
        let celdaPrecioArticulo = row.insertCell(2);
        let celdaCantidadArticulo = row.insertCell(3);
        let celdaDescripcionArticulo = row.insertCell(4);
        row.insertCell(5);

        celdaNumCodigo.innerHTML = articulo.codigo;
        celdaNombreArticulo.innerHTML = articulo.nombre;
        celdaPrecioArticulo.innerHTML = articulo.precio;
        celdaCantidadArticulo.innerHTML = articulo.cantidad;
        celdaDescripcionArticulo.innerHTML = articulo.descripcion;

        let btnEliminar = document.createElement("input");
        btnEliminar.type = "button";
        btnEliminar.value = "Eliminar";
        btnEliminar.className = "btn btn-danger";

        row.cells[5].appendChild(btnEliminar);

        btnEliminar.addEventListener("click", () => {
            this.eliminarArticulo(row, articulo);
        });

        this._articulos.push(articulo);

    }

    eliminarArticulo(row, articulo) {
        let pos = this.buscarArticulo(articulo.codigo);
        this._articulos.splice(pos, 1);

        row.remove();

    }

    buscarArticulo(codigo) {
        let result = -1;

        this._articulos.forEach(
            (articulo, index) => {
                if (articulo.codigo === codigo) {
                    result = index;
                    return;
                }
            });

        return result;

    }

    modificarDatos(nuevosArticulos) {
        this._articulos = nuevosArticulos;

        console.log(this._articulos);
    }

}
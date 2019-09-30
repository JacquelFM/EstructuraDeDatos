export default class Registro {
    constructor(tabla) {
        this._tabla = tabla;
        this._articulos = new Array(20);
        this._tablaBase = this._tabla.innerHTML;
        this._longitudArray = 0;
    }

    set tabla(nuevaTabla) {
        this._tabla = nuevaTabla;
    }

    get articulos() {
        return this._articulos;
    }

    agregarArticuloPrueba(articulos) {
        if (this._longitudArray < 20) {
            this._articulos[this._longitudArray] = articulos;
            this._longitudArray++;

            this.ordenarArticulos();
            this.modificarTabla();

            for (let i = 1; i <= this._longitudArray; i++) {
                this.agregarArticuloTabla(this._articulos[i - 1]);
            }
        } else {
            alert("Lo sentimos, ya no hay espacios disponibles.");
        }

        console.log(this._articulos);
    }

    ordenarArticulos() {
        for (let k = 0; k < this._longitudArray; k++) {
            for (let i = 0; i < this._longitudArray; i++) {
                for (let j = 0; j < this._longitudArray; j++) {
                    if (this._articulos[i].codigo < this._articulos[j].codigo) {
                        let a = this._articulos[i];
                        this._articulos[i] = this._articulos[j];
                        this._articulos[j] = a;
                    }
                }
            }
        }
    }

    eliminarArticulo(row, articulo) {
        for (let posicion = this.buscarArticulo(articulo.codigo); posicion < this._longitudArray; posicion++) {
            this._articulos[posicion] = this._articulos[posicion + 1];
        }

        this._articulos[this._longitudArray - 1] = "";
        this._longitudArray--;

        row.remove();
    }

    agregarArticuloTabla(articulo) {
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

    modificarTabla() {
        this._tabla.innerHTML = this._tablaBase;
    }

}
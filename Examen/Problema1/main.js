document.querySelector("#btnSacar").addEventListener("click", () => {

    let intCantidadParejas = Number(document.querySelector("#cantidadParejas").value);

    sacarNumerosAmigos(intCantidadParejas);

    console.log(intCantidadParejas);

});

function sacarNumerosAmigos(intCantidadParejas) {
    let a = 0;
    let b = 0;

    for (let i = 0; i < intCantidadParejas; i++) {
        a = i + 1;
        for (let j = (i + 1); j < intCantidadParejas; j++) {
            b = j + 1;
            if (a != b) {
                esAmigo(a, b);
            }
        }
    }
}

function esAmigo(a, b) {
    console.log(a + "," + b)

    //console.log(sumaDivisores(b));
    //console.log(sumaDivisores(a));

    if ((a == sumaDivisores(b)) && (b == sumaDivisores(a))) {

        console.log("yes");
    } else {
        console.log("nel");
    }
}

function sumaDivisores(numero) {
    let suma = 0;

    for (let k = 1; k < numero; k++) {
        if (numero % k == 0) {
            suma += k;
        }
    }

    return suma;
}
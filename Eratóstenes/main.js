document.querySelector("#btnSacarPrimos").addEventListener("click", () => {
    let arrayPrimos = new Array(1000);

    for (let n = 1; n < arrayPrimos.length; n++) {
        arrayPrimos[n] = 1;
    }

    for (let i = 1; i < arrayPrimos.length; i++) {
        if (i > 2) {
            for (let k = i; k < arrayPrimos.length; k++) {
                if (k % (i - 1) == 0) {
                    arrayPrimos[k] = 0;
                }
            }
        }
        if (arrayPrimos[i] == 1) {
            console.log(i);
        }
    }

});
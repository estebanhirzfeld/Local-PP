function cajaSelectoraPesosToDolar() {

    let inputPesos = document.getElementById("inputPesos").value;

    let outputDolares = (inputPesos / 131) - ((inputPesos / 131) / 100) * 6;

    inputDolares = document.getElementById("inputDolares").value = outputDolares.toFixed(2);

    if (inputDolares < 0) { inputPesos = document.getElementById("inputPesos").value = 0; }
    if (inputDolares < 0) { inputDolares = document.getElementById("inputDolares").value = 0; }

    return inputDolares;
}

function cajaSelectoraDolarToPesos() {
    let inputDolares = document.getElementById("inputDolares").value;

    let outputPesos = (inputDolares - (inputDolares / 100) * 6) * 120;

    inputPesos = document.getElementById("inputPesos").value = outputPesos.toFixed(2);

    if (inputDolares < 0) { inputPesos = document.getElementById("inputPesos").value = 0; }
    if (inputDolares < 0) { inputDolares = document.getElementById("inputDolares").value = 0; }

    return inputPesos;
}


inputPesos.onchange = () => { cajaSelectoraPesosToDolar() }

inputDolares.onchange = () => { cajaSelectoraDolarToPesos() }



let toggle = false;

$("#botonSwap").click(function () {
    toggle = !toggle;
    if (toggle == false) {
        $("#customPlaceholderARS").text("Ud. Recibe USD");
        $("#customPlaceholderUSD").text("Ud. Envia ARS");

        


    } else {
        $("#customPlaceholderARS").text("Ud. Envia ARS");
        $("#customPlaceholderUSD").text("Ud. Recibe USD");
    }

})

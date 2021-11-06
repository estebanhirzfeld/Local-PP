function cajaSelectoraPesosToDolar() {

    let inputPesos = $("#inputPesos").val();

    let outputDolares = (inputPesos / 131) - ((inputPesos / 131) / 100) * 6;

    inputDolares = outputDolares.toFixed(2);
    // inputDolares = $("#inputDolares").val() = outputDolares.toFixed(2);
    

    if (inputDolares < 0) { inputPesos = $("#inputPesos").val() = 0; }
    if (inputDolares < 0) { inputDolares = $("#inputDolares").val() = 0; }

    return inputDolares;
}

function cajaSelectoraDolarToPesos() {
    let inputDolares = $("#inputDolares").val();

    let outputPesos = (inputDolares - (inputDolares / 100) * 6) * 120;

    inputPesos = outputPesos.toFixed(2);
    // inputPesos = $("#inputPesos").val() = outputPesos.toFixed(2);

    if (inputDolares < 0) { inputPesos = $("#inputPesos").val() = 0; }
    if (inputDolares < 0) { inputDolares = $("#inputDolares").val() = 0; }

    return inputPesos;
}

$("#inputPesos").change(function(){ cajaSelectoraPesosToDolar()})

$("#inputDolares").change(function(){ cajaSelectoraPesosToDolar()})

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



let inputPesos;
let inputDolares;

let toggle = true;


PesosToDolar();
BotonSwap();

function LecturaDeValores() {
    inputPesos = $("#inputPesos").val();
    inputDolares = $("#inputDolares").val();
}

function PesosToDolar() {

    $("#inputPesos").change(function () {

        LecturaDeValores();
        let conversion = (inputPesos / 131) - ((inputPesos / 131) / 100) * 6;
        $("#inputDolares").val(conversion.toFixed(2));
    })

    $("#inputDolares").change(function () {

        LecturaDeValores();
        let conversion = (inputDolares - (inputDolares / 100) * 6) * 120;
        $("#inputPesos").val(conversion.toFixed(2));
    })
}

function DolarToPesos() {

    $("#inputDolares").change(function () {

        LecturaDeValores();
        let conversion = (inputDolares / 131) - ((inputDolares / 131) / 100) * 6;
        $("#inputPesos").val(conversion.toFixed(2));
    })

    $("#inputPesos").change(function () {

        LecturaDeValores();
        let conversion = (inputPesos - (inputPesos / 100) * 6) * 120;
        $("#inputDolares").val(conversion.toFixed(2));
    })
}

function BotonSwap(){
    $("#botonSwap").click(function () {
        toggle = !toggle;
        if (toggle == false) {
            console.log("toggle = false");
            $("#customPlaceholderARS").text("Ud. Recibe USD");
            $("#customPlaceholderUSD").text("Ud. Envia ARS");
            ActualizacionDeValores()
            DolarToPesos() 
            
        } else {
            console.log("toggle = true");
            $("#customPlaceholderARS").text("Ud. Envia ARS");
            $("#customPlaceholderUSD").text("Ud. Recibe USD");
            ActualizacionDeValores()
            PesosToDolar()

        }

    })
}

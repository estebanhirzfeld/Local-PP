
let inputPesos;
let inputDolares;

let metodo;

let toggle = true;


PesosToDolar();
BotonSwap();
BuscarOfertas();



function LecturaDeValores() {
    inputPesos = $("#inputPesos").val();
    inputDolares = $("#inputDolares").val();
    metodo = $("#selectorSuperior").val();
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
            LecturaDeValores()
            DolarToPesos() 
            
        } else {
            console.log("toggle = true");
            $("#customPlaceholderARS").text("Ud. Envia ARS");
            $("#customPlaceholderUSD").text("Ud. Recibe USD");
            LecturaDeValores()
            PesosToDolar()

        }

    })
}

function BuscarOfertas(){
    $(".cajaSelectora__botonBuscarOfertas").click(function(){
        LecturaDeValores()
        if(toggle == true){
            console.log("Desea Comprar $" + inputDolares + " Dolares y paga en Pesos con " + metodo);
        }else if(toggle == false){
            console.log("Desea Comprar $" + inputPesos + " Dolares y paga en Pesos con " + metodo);
        }
        
    })
}
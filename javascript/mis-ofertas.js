let toggle = false;
const URLGET = "/assets/JSON/usuarios.json"


const nuevaOferta = {
    "nombre": "estebanhirzfeld",
    "trades": "111",
    "metodo": "bruBank",
    "localidad": "Zona Sur",
    "monto": "35.500",
    "porcentaje": "15",
    "mejorVendedor": true
}

$("#botonPausar").click(function () {
    toggle = !toggle;
    if (toggle == false) {
        $("#botonPausar").text("▶️ Reanudar");



    } else {

        $.post(URLGET, nuevaOferta, function (respuesta, estado) {
            if (estado == "success") {
                $("#botonPausar").text("⏸ Pausar");
                toastr.success("Puedes verla en la sección Explorar🔍", "Oferta Reanudada!")
            }
        });

    }

})



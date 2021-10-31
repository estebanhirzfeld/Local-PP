const URLJSON = "/assets/JSON/usuarios.json"

// Toastify

let nuevaOferta = [];

$(".boton__crearNuevaOferta").click(function () {
    nuevaOferta = {
        "nombre": "estebanhirzfeld",
        "trades": "111",
        "metodo": "Transf. Bancaria",
        "localidad": "Zona Sur",
        "monto": "11.000",
        "porcentaje": "11",
        "mejorVendedor": true
    }

    sessionStorage.setItem("nuevaOferta", JSON.stringify(nuevaOferta))
    console.log("Nueva Oferta Creada!")
});



// fs.writeFile('/assets/JSON/usuarios.json', ofertas, 'utf8', callback);
// var fs = require('fs');


const URLJSON = "/assets/JSON/usuarios.json"

// Toastify

let nuevaOferta = [];

$(".boton__crearNuevaOferta").click(function () {

    nuevaOferta ={
        "nombre": "estebanhirzfeld",
        "trades": "111",
        "metodo": "Transf. Bancaria",
        "localidad": "Zona Sur",
        "monto": "11.000",
        "porcentaje": "11",
        "mejorVendedor": true
    }

    $.getJSON(URLJSON, function (respuesta, estado) {
        if (estado == "success") {
            let ofertas = respuesta;    
            
            ofertas.push(nuevaOferta);
            
            ofertas = JSON.stringify(ofertas);

            // var fs = require('fs');
            // fs.writeFile('/assets/JSON/usuarios.json', ofertas, 'utf8', callback);

            console.log(ofertas);
        }
});
});


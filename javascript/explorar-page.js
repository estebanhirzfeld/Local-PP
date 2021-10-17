const URLJSON = "/assets/JSON/usuarios.json"

let ubicacion;
let metodo;

$('#selectorUbicacion').click(function(){
    ubicacion = $("#selectorUbicacion").val();
    metodo = $("#selectorMetodoDePago").val();

    mostrarUsuarios()
});

$('#selectorMetodoDePago').click(function(){
    ubicacion = $("#selectorUbicacion").val();
    metodo = $("#selectorMetodoDePago").val();

    mostrarUsuarios()
});

function mostrarUsuarios(){
    $.getJSON(URLJSON, function (respuesta, estado) {
        if (estado == "success") {
            let misUsuarios = respuesta;
            for (const usuario of misUsuarios) {
                if ((usuario.mejorVendedor == true)&&(usuario.localidad == ubicacion)&&(usuario.metodo == metodo)) {
    
                    $("#mejoresVendedores").append(
                        `<table class="tablaOferta" data-aos="fade-up" data-aos-duration="500" width="100%">
                        <thead>
                            <tr>
                                <th rowspan="3">${usuario.nombre}</th>
                                <th rowspan="3">Método</th>
                                <th rowspan="3">Argentina</th>
                                <th rowspan="2">ARS${usuario.monto}</th>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                                <td rowspan="2">${usuario.porcentaje}% por debajo del Mercado</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowspan="3">~${usuario.trades} trades</td>
                                <td rowspan="3">${usuario.metodo}</td>
                                <td rowspan="3">${usuario.localidad}</td>
                            </tr>
                            <tr>
                                <td rowspan="2">
                                    <form action="">
                                        <!--  Boton Comprar -->
                                        <input type="submit" value="Comprar" />
                                    </form>
                                </td>
                            </tr>
                            <tr>
                            </tr>
                        </tbody>
                        </table>`);
                }else if ((usuario.mejorVendedor == false)&&(usuario.localidad == ubicacion)&&(usuario.metodo == metodo)){
                    $("#ofertaSimiliares").append(
                        `<table class="tablaOferta" data-aos="fade-up" data-aos-duration="500" width="100%">
                        <thead>
                            <tr>
                                <th rowspan="3">${usuario.nombre}</th>
                                <th rowspan="3">Método</th>
                                <th rowspan="3">Argentina</th>
                                <th rowspan="2">ARS${usuario.monto}</th>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                                <td rowspan="2">${usuario.porcentaje}% por debajo del Mercado</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowspan="3">~${usuario.trades} trades</td>
                                <td rowspan="3">${usuario.metodo}</td>
                                <td rowspan="3">${usuario.localidad}</td>
                            </tr>
                            <tr>
                                <td rowspan="2">
                                    <form action="">
                                        <!--  Boton Comprar -->
                                        <input type="submit" value="Comprar" />
                                    </form>
                                </td>
                            </tr>
                            <tr>
                            </tr>
                        </tbody>
                        </table>`);
                }
            }
        }
    })
}

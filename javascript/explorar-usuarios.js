const URLJSON = "/assets/JSON/usuarios.json"


$("#selectorUbicacion").click(function(){
    var ubicacion = $("#selectorUbicacion").val()
    console.log(ubicacion)
})

$.getJSON(URLJSON, function (respuesta, estado) {
    if (estado == "success") {
        let misDatos = respuesta;
        for (const dato of misDatos) {
            if (dato.mejorVendedor == true) {

                $("#mejoresVendedores").append(
                    `<table class="tablaOferta" data-aos="fade-up" data-aos-duration="500" width="100%">
                    <thead>
                        <tr>
                            <th rowspan="3">${dato.nombre}</th>
                            <th rowspan="3">Método</th>
                            <th rowspan="3">Argentina</th>
                            <th rowspan="2">ARS${dato.monto}</th>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td rowspan="2">${dato.porcentaje}% por debajo del Mercado</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="3">~${dato.trades} trades</td>
                            <td rowspan="3">${dato.metodo}</td>
                            <td rowspan="3">${dato.localidad}</td>
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
            }else{
                $("#ofertaSimiliares").append(
                    `<table class="tablaOferta" data-aos="fade-up" data-aos-duration="500" width="100%">
                    <thead>
                        <tr>
                            <th rowspan="3">${dato.nombre}</th>
                            <th rowspan="3">Método</th>
                            <th rowspan="3">Argentina</th>
                            <th rowspan="2">ARS${dato.monto}</th>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td rowspan="2">${dato.porcentaje}% por debajo del Mercado</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="3">~${dato.trades} trades</td>
                            <td rowspan="3">${dato.metodo}</td>
                            <td rowspan="3">${dato.localidad}</td>
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
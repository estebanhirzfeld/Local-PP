'use strict';

const URLJSON = "/assets/JSON/usuarios.json"

let ubicacion;
let metodo;

$('#selectorUbicacion').click(function () {
    ubicacion = $("#selectorUbicacion").val();  // Lectura de Values en Selects Ubicacion
    metodo = $("#selectorMetodoDePago").val();  // Lectura de Values en Selects Metodo

    mostrarUsuarios()
});

$('#selectorMetodoDePago').click(function () {
    ubicacion = $("#selectorUbicacion").val();  // Lectura de Values en Selects Ubicacion
    metodo = $("#selectorMetodoDePago").val();  // Lectura de Values en Selects Metodo

    mostrarUsuarios()
});

function mostrarUsuarios() {
    $.getJSON(URLJSON, function (respuesta, estado) {
        if (estado == "success") {
            let misUsuarios = respuesta;                    //Finalizada la request del JSON
            
            if(sessionStorage.getItem("nuevaOferta") != undefined){      //Sin este if y sin la oferta creada en mis Ofertas, el filtro no funciona
                let nuevasOfertas = sessionStorage.getItem("nuevaOferta")
                nuevasOfertas = JSON.parse(nuevasOfertas);
                misUsuarios.push(nuevasOfertas);
            }

            var usuarios = misUsuarios
                .filter(function (usuario) {
                    return usuario.localidad === ubicacion || ubicacion === "Todos";
                })                                                                   //Filter para la Ubicacion seleccionada o Todos

                .filter(function (usuario) {
                    return usuario.metodo === metodo || metodo === "Todos";
                })                                                                   //Filter para el Metodo seleccionado o Todos

            console.table(usuarios)                                                  // Lectura en Consola

            $("#mejoresVendedores").empty()                              //Limpieza de appends para evitar ofertas repetidas             
            $("#ofertaSimiliares").empty()                               //Limpieza de appends para evitar ofertas repetidas

            for (const usuario of usuarios) {                           // for of Para el Append de las ofertas que cumplan las condiciones
                if (usuario.mejorVendedor == true) {
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
                }
                else if (usuario.mejorVendedor == false) {
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

// creacion de contenido inicial

$.getJSON(URLJSON, function (respuesta, estado) {
    if (estado == "success") {
        let misUsuarios = respuesta;
        let nuevasOfertas = sessionStorage.getItem("nuevaOferta")
        nuevasOfertas = JSON.parse(nuevasOfertas);
        misUsuarios.push(nuevasOfertas);
        for (const usuario of misUsuarios) {
            if (usuario.mejorVendedor == true) {

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
            } else if (usuario.mejorVendedor == false) {
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
});
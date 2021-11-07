// Toastify

let oferta = [];
let getOferta = [];
let nuevaOferta = [];

let tipoValue;
let metodoValue;
let ubicacionValue;
let montoValue;


SubidaToLS();
GetLsAndAppend();
EditarOferta();

function SubidaToLS() {
    oferta = {
        "tipo": "Paypal to ARS",
        "metodo": "Transf. Bancaria",
        "ubicacion": "Zona Sur",
        "monto": "11.111",
    }

    sessionStorage.setItem("Oferta", JSON.stringify(oferta))
}

function GetLsAndAppend() {
    getOferta = sessionStorage.getItem("Oferta")
    getOferta = JSON.parse(getOferta)

    $(".contenedorTablas").append(
        `
    <table data-aos="fade-up" data-aos-duration="500" class="col-lg-12 misOfertasDesktop table-striped ">
    <tr>
        <th>Tipo </th>
        <th>Metodo de Pago </th>
        <th>Ubicacion </th>
        <th>Monto </th>
        <th>Estado </th>
    </tr>

    <tr>
        <td>${getOferta.tipo}</td>
        <td>${getOferta.metodo}</td>
        <td>${getOferta.ubicacion}</td>
        <td>${getOferta.monto}</td>
        <td>
            <li><a href=""> 👁 Ver</a></li>
            <li id="botonPausar"> ⏸ Pausar</li>
            <li><a href=""> 📄 Duplicar</a></li>
            <li class="boton__editarOferta"> ✏ Editar</li>
        </td>
    </tr>
</table>

<table data-aos="fade-up" data-aos-duration="500" class="col-lg-12 misOfertasMobile table-striped ">
    <tr>
        <th>Tipo </th>
        <th>Metodo</th>
        <th>Ubicacion </th>
        <th>Monto </th>
        <th>Estado </th>
    </tr>

    <tr>
    <td>${getOferta.tipo}</td>
    <td>${getOferta.metodo}</td>
    <td>${getOferta.ubicacion}</td>
    <td>${getOferta.monto}</td>
        <td>
        <li><a href=""> 👁 Ver</a></li>
        <li id="botonPausar"> ⏸ Pausar</li>
        <li><a href=""> 📄 Duplicar</a></li>
        <li class="boton__editarOferta"> ✏ Editar</li>
        </td>
    </tr>
</table>
    `
    )
}

function EditarOferta() {
    $(".boton__editarOferta").click(function () {

        $(".contenedorTablas").empty();
        $(".contenedorTablas").append(
            `
            <div class="col-lg-12 col-xs-12 contenedorTablas">
            <table data-aos="fade-up"
                data-aos-duration="500" class="col-lg-12 misOfertasDesktop table-striped ">
                    <tr>
                        <th>Tipo </th>
                        <th>Metodo de Pago </th>
                        <th>Ubicacion </th>
                        <th>Monto </th>
                        <th>Estado </th>
                    </tr>
    
                    <tr>
                        <td>
                            <select class="custom-select custom-select-mis-ofertas text-center" id="selectTipo">
                                <option value="Paypal to ARS">Paypal to ARS</option>
                                <option value="ARS to Paypal">ARS to Paypal</option>
                            </select>
                        </td>
                        <td>
                            <select class="custom-select custom-select-mis-ofertas text-center" id="selectMetodo">
                                <option value="Uala">Uala</option>
                                <option value="bruBank">bruBank</option>
                                <option value="Transferencia">Transferencia</option>
                                <option value="MercadoPago">MercadoPago</option>
                                <option value="CuentaDigital">CuentaDigital</option>
                            </select>
                        </td>
                        <td>
                            <select class="custom-select custom-select-mis-ofertas text-center" id="selectUbicacion">
                                <option value="Zona Norte">Zona Norte</option>
                                <option value="Zona Sur">Zona Sur</option>
                                <option value="Zona Oeste">Zona Oeste</option>
                            </select>
                        </td>
                        <td>
                            <input class="text-center" type="number" placeholder="20.000" id="selectMonto">
                        </td>
                        <td>
                            <button class="cajaSelectora__botonBuscarOfertas--style my-4 botonGuardarCambios"><span>Guardar</span></button>
                        </td>
                    </tr>
                </table>
    
                <table data-aos="fade-up "
                data-aos-duration="500" class="col-lg-12 misOfertasMobile table-striped ">
                    <tr>
                        <th>Tipo </th>
                        <th>Metodo</th>
                        <th>Ubicacion </th>
                        <th>Monto </th>
                        <th>Estado </th>
                    </tr>
    
                    <tr>
                        <td>PP to ARS </td>
                        <td>Ualá </td>
                        <td>Zona Sur </td>
                        <td>20.000 </td>
                        <td>
                            <li><a href="">👁 Ver</a></li>
                            <li><a href="">⏸ Pausar</a></li>
                            <li><a href="">📄 Duplicar</a></li>
                            <li class="boton__editarOferta"> ✏ Editar</li>
                        </td>
                    </tr>
                </table>
            </div>
                `
        );

    GuardarCambios();

    })
    

}

function LecturaDeValores() {
    tipoValue = $("#selectTipo").val();
    metodoValue = $("#selectMetodo").val();
    ubicacionValue = $("#selectUbicacion").val();
    montoValue = $("#selectMonto").val();
}

function VerificacionDeCampos(){
    montoValue = parseFloat(montoValue)
    if((montoValue <= 0)||(!montoValue)){
        alert("Revise Los Campos Ingresados")
        return false;
    }else{
        return true;
    }
}

function GuardarCambios() { 
    $(".botonGuardarCambios").click(function () {

        LecturaDeValores();
        VerificacionDeCampos();
        if (VerificacionDeCampos() == true){
            UpdateLs();
            $(".contenedorTablas").empty();
            GetLsAndAppend();
            SubidaDeOfertaNueva();
        }
    })
}

function UpdateLs(){
        oferta = {
        "tipo": tipoValue,
        "metodo": metodoValue,
        "ubicacion": ubicacionValue,
        "monto":montoValue,
    }

    sessionStorage.setItem("Oferta", JSON.stringify(oferta))
}

function SubidaDeOfertaNueva(){
    nuevaOferta = {
        "nombre": "estebanhirzfeld",
        "trades": 110 + 1,
        "metodo": metodoValue,
        "localidad": ubicacionValue,
        "monto": montoValue,
        "porcentaje": "11",
        "mejorVendedor": true
    }

    sessionStorage.setItem("nuevaOferta", JSON.stringify(nuevaOferta))
    console.log("Nueva Oferta Creada!")
}














// fs.writeFile('/assets/JSON/usuarios.json', ofertas, 'utf8', callback);
// var fs = require('fs');


'use strict'


// Tenemos usuarios - C/u tiene un Metodo, una Ubicacion y una Operacion
// con un Promt vamos a buscar Metodos, Ubicaciones y/o Operaciones,

//Tenemos Objetos, un objeto puede tener varios valores (ubicacion,metodo,operacion)
//Tenemos Arrays, un array permite almacenar varios valores, aunque tambien podemos almacenar objetos

//Mi Plan, crear Objetos(Usuarios) con sus distintos metodos,ubicaciones y operaciones, luego en un array almacenar todos esos Objetos
//Una vez que tenga mi array con usuarios, podre utilizar find para mostrar solo los usuarios con un metodo,ubicacion u operacion en especifico en pantalla/consola

function Oferta(usuario) {
    this.nombre = usuario.nombre;
    this.ubicacion = usuario.ubicacion;
    this.metodo = usuario.metodo;
    this.operacion = usuario.operacion;
}

const usuario0 = new Oferta({ nombre: "usuario0 ", ubicacion: "Zona Sur", metodo: "Brubank", operacion: "Comprar" });
const usuario1 = new Oferta({ nombre: "usuario1 ", ubicacion: "Zona Norte", metodo: "Uala", operacion: "Vender" });
const usuario2 = new Oferta({ nombre: "usuario2 ", ubicacion: "Zona Norte", metodo: "Transferencia", operacion: "Vender" });
const usuario3 = new Oferta({ nombre: "usuario3 ", ubicacion: "Zona Sur", metodo: "Uala", operacion: "Comprar" });
const usuario4 = new Oferta({ nombre: "usuario4 ", ubicacion: "Zona Sur", metodo: "Brubank", operacion: "Comprar" });
const usuario5 = new Oferta({ nombre: "usuario5 ", ubicacion: "Zona Norte", metodo: "Transferencia", operacion: "Vender" });
const usuario6 = new Oferta({ nombre: "usuario6 ", ubicacion: "Zona Norte", metodo: "MercadoPago", operacion: "Vender" });
const usuario7 = new Oferta({ nombre: "usuario7 ", ubicacion: "Zona Oeste", metodo: "MercadoPago", operacion: "Comprar" });
const usuario8 = new Oferta({ nombre: "usuario8 ", ubicacion: "Zona Oeste", metodo: "Brubank", operacion: "Comprar" });
const usuario9 = new Oferta({ nombre: "usuario9 ", ubicacion: "Zona Oeste", metodo: "Brubank", operacion: "Vender" });
const usuario10 = new Oferta({ nombre: "usuario10", ubicacion: "Zona Sur", metodo: "CuentaDigital", operacion: "Comprar" });

const usuarios = [usuario0, usuario1, usuario2, usuario3, usuario4, usuario5, usuario6, usuario7, usuario8, usuario9, usuario10];


function FiltroMetodoPagoUbicacion() {
    
    // let opcionComprarVender = document.querySelector('input[name="comprarVender"]:checked');
    // console.log(opcionComprarVender.value)

    let ubicacion = $('select[name=selectorUbicacion] option').filter(':selected').val() // Obtengo el valor actual en el select de Ubicacion

    let metodoDePago = $('select[name=selectorMetodoDePago] option').filter(':selected').val()

    
    // Operacion ////////////////////////////////////
    
    if (metodoDePago == "comprar") {
        const buscarOperacion = usuarios.filter(operacion => operacion.operacion == "Comprar")
        console.table(buscarOperacion);
        
    } else if (metodoDePago == "vender") {
        const buscarOperacion = usuarios.filter(operacion => operacion.operacion == "Vender")
        console.table(buscarOperacion);
        
    }
    
    // Ubicacion ////////////////////////////////////

    if (ubicacion == "valor_ZonaSur") {
        const buscarUbicacion = usuarios.filter(ubicacion => ubicacion.ubicacion == "Zona Sur")
        console.table(buscarUbicacion);

    } else if (ubicacion == "valor_ZonaNorte") {
        const buscarUbicacion = usuarios.filter(ubicacion => ubicacion.ubicacion == "Zona Norte")
        console.table(buscarUbicacion);

    } else if (ubicacion == "valor_ZonaOeste") {
        const buscarUbicacion = usuarios.filter(ubicacion => ubicacion.ubicacion == "Zona Oeste")
        console.table(buscarUbicacion);

    } else if (ubicacion == "valor_Todos") {
        console.table(usuarios);
    }

    // Metodo ////////////////////////////////////
    
    if (metodoDePago == "valor_Uala") {
        const buscarMetodo = usuarios.filter(metodo => metodo.metodo == "Uala")
        console.table(buscarMetodo);

    } else if (metodoDePago == "valor_bruBank") {
        const buscarMetodo = usuarios.filter(metodo => metodo.metodo == "Brubank")
        console.table(buscarMetodo);

    } else if (metodoDePago == "valor_Transferencia") {
        const buscarMetodo = usuarios.filter(metodo => metodo.metodo == "Transferencia")
        console.table(buscarMetodo);

    } else if (metodoDePago == "valor_MercadoPago") {
        const buscarMetodo = usuarios.filter(metodo => metodo.metodo == "MercadoPago")
        console.table(buscarMetodo);

    } else if (metodoDePago == "valor_CuentaDigital") {
        const buscarMetodo = usuarios.filter(metodo => metodo.metodo == "CuentaDigital")
        console.table(buscarMetodo);

    }  else if (ubicacion == "valor_Todos") {
        console.table(usuarios);
    }
}

$("#selectorPaypal").click(function(){FiltroMetodoPagoUbicacion()}); 

$("#selectorUbicacion").click(function(){FiltroMetodoPagoUbicacion()}); 

$("#selectorMetodoDePago").click(function(){FiltroMetodoPagoUbicacion()}); // Reemplazo de get documentbyId con metodo click de JQUERY
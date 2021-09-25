'use strict'


// Tenemos usuarios - C/u tiene un Metodo, una Ubicacion y una Operacion
// con un Promt vamos a buscar Metodos, Ubicaciones y/o Operaciones,

//Tenemos Objetos, un objeto puede tener varios valores (ubicacion,metodo,operacion)
//Tenemos Arrays, un array permite almacenar varios valores, aunque tambien podemos almacenar objetos

//Mi Plan, crear Objetos(Usuarios) con sus distintos metodos,ubicaciones y operaciones, luego en un array almacenar todos esos Objetos
//Una vez que tenga mi array con usuarios, podre utilizar find para mostrar solo los usuarios con un metodo,ubicacion u operacion en especifico en pantalla/consola

function Oferta(usuario){
    this.nombre = usuario.nombre;
    this.ubicacion = usuario.ubicacion;
    this.metodo    = usuario.metodo;
    this.operacion = usuario.operacion;
}

const usuario0  = new Oferta({ nombre:"usuario0 " ,ubicacion:"Zona Sur"   ,metodo:"Brubank"        ,operacion: "Comprar"});
const usuario1  = new Oferta({ nombre:"usuario1 " ,ubicacion:"Zona Norte" ,metodo:"Uala"           ,operacion: "Vender" });
const usuario2  = new Oferta({ nombre:"usuario2 " ,ubicacion:"Zona Norte" ,metodo:"Transferencia"  ,operacion: "Vender" });
const usuario3  = new Oferta({ nombre:"usuario3 " ,ubicacion:"Zona Sur"   ,metodo:"Uala"           ,operacion: "Comprar"});
const usuario4  = new Oferta({ nombre:"usuario4 " ,ubicacion:"Zona Sur"   ,metodo:"Brubank"        ,operacion: "Comprar"});
const usuario5  = new Oferta({ nombre:"usuario5 " ,ubicacion:"Zona Norte" ,metodo:"Transferencia"  ,operacion: "Vender" });
const usuario6  = new Oferta({ nombre:"usuario6 " ,ubicacion:"Zona Norte" ,metodo:"MercadoPago"    ,operacion: "Vender" });
const usuario7  = new Oferta({ nombre:"usuario7 " ,ubicacion:"Zona Oeste" ,metodo:"MercadoPago"    ,operacion: "Comprar"});
const usuario8  = new Oferta({ nombre:"usuario8 " ,ubicacion:"Zona Oeste" ,metodo:"Brubank"        ,operacion: "Comprar"});
const usuario9  = new Oferta({ nombre:"usuario9 " ,ubicacion:"Zona Oeste" ,metodo:"Brubank"        ,operacion: "Vender" });
const usuario10 = new Oferta({ nombre:"usuario10" ,ubicacion:"Zona Sur"   ,metodo:"CuentaDigital"  ,operacion: "Comprar"});

const usuarios  = [usuario0,usuario1,usuario2,usuario3,usuario4,usuario5,usuario6,usuario7,usuario8,usuario9,usuario10];


function ubicaciones(){
    
    var entrada = prompt("Seleccione una ubicacion entre 'Zona Sur', 'Zona Norte' o 'Zona Oeste'");
    entrada = entrada.toLowerCase();
    entrada = entrada.trim();

    if((entrada == "zona sur")||(entrada == "sur")){
        const buscarUbicacion = usuarios.filter(ubicacion => ubicacion.ubicacion == "Zona Sur")
        console.table(buscarUbicacion);
    
    }else if((entrada == "zona norte")||(entrada == "norte")){
        const buscarUbicacion = usuarios.filter(ubicacion => ubicacion.ubicacion == "Zona Norte")
        console.table(buscarUbicacion);
        
    }else if((entrada == "zona oeste")||(entrada == "oeste")){
        const buscarUbicacion = usuarios.filter(ubicacion => ubicacion.ubicacion == "Zona Oeste")
        console.table(buscarUbicacion);
    }
    else{
        alert("Lo sentimos, esa ubicacion no esta disponible, intente nuevamente")
        ubicaciones();
    }
}

function operaciones(){
    
    var entrada = prompt("Seleccione un Tipo de Operacion entre 'Comprar' o 'Vender'");
    entrada = entrada.toLowerCase();
    entrada = entrada.trim();

    if(entrada == "comprar"){
        const buscarOperacion = usuarios.filter(operacion => operacion.operacion == "Comprar")
        console.table(buscarOperacion);
    
    }else if(entrada == "vender"){
        const buscarOperacion = usuarios.filter(operacion => operacion.operacion == "Vender")
        console.table(buscarOperacion);
        
    }else{
        alert("Operacion Invalida, intente nuevamente");
        operaciones();
    }
}

function metodos(){
    
    var entrada = prompt("Seleccione un Metodo de pago entre 'Uala', 'Brubank', 'Transferencia', 'MercadoPago' o 'Cuenta Digital'");
    entrada = entrada.toLowerCase();
    entrada = entrada.trim();

    if(entrada == "uala"){
        const buscarMetodo = usuarios.filter(metodo => metodo.metodo == "Uala")
        console.table(buscarMetodo);
    
    }else if(entrada == "brubank"){
        const buscarMetodo = usuarios.filter(metodo => metodo.metodo == "Brubank")
        console.table(buscarMetodo);
        
    }else if(entrada == "transferencia"){
        const buscarMetodo = usuarios.filter(metodo => metodo.metodo == "Transferencia")
        console.table(buscarMetodo);
                
    }else if(entrada == "mercadopago"){
        const buscarMetodo = usuarios.filter(metodo => metodo.metodo == "MercadoPago")
        console.table(buscarMetodo);
                
    }else if(entrada == "cuenta digital"){
        const buscarMetodo = usuarios.filter(metodo => metodo.metodo == "CuentaDigital")
        console.table(buscarMetodo);
        
    }else{
        alert("Lo sentimos, aun no tenemos ese metodo de pago");
        metodos();
    }
}

function main(){

    var respuesta = prompt("Busque una Oferta, puede buscar por 'Ubicacion', 'Metodo de Pago' o 'Operacion'");
    respuesta = respuesta.toLowerCase();
    respuesta = respuesta.trim();

    if(respuesta == "ubicacion"){
        ubicaciones();
    }else if((respuesta == "metodo")||(respuesta == "metodo de pago")){
        metodos();
    }else if(respuesta == "operacion"){
        operaciones();
    }else{
        alert("Opcion invalida, intente nuevamente");
        main();
    }

}

main();

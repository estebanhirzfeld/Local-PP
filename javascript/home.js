function pesosToDolar(){
    let inputPesos = prompt("Ingresar Monto en Pesos");
    let outputDolares = (inputPesos / 131)-((inputPesos/131)/100)*6;

    if(inputPesos > 0 ){
        alert("Ud. Recibira $" + outputDolares.toFixed(2) + " Dolares por $" + inputPesos + " Pesos");
        console.log("Ud. Recibira $" + outputDolares.toFixed(2) + " Dolares por $" + inputPesos + " Pesos");
    } else{
        alert("No se admiten Numeros Negativos, intente nuevamente");
        pesosToDolar();
    }

}

function dolarToPesos(){
    let inputDolares = prompt("Ingresar Monto en Dolares");
    let outputPesos = (inputDolares - (inputDolares/100)*6)*120;

    if(inputDolares > 0){
        alert("Ud. Recibira $" + outputPesos.toFixed(2) + " Pesos por $" + inputDolares + " Dolares");
        console.log("Ud. Recibira $" + outputPesos.toFixed(2) + " Pesos por $" + inputDolares + " Dolares");
    } else {
        alert("No se admiten Numeros Negativos, intente nuevamente");
        dolarToPesos();
    }

}

function cajaSelectora(){

    alert("Seleccione Operacion a realizar");

    let respuesta = prompt("Elija entre Pesos a Dolares o Dolares a Pesos");    

    if (respuesta.toLowerCase() === "pesos a dolares") {
    
        pesosToDolar();
    
    } else if (respuesta.toLowerCase() === "dolares a pesos") {
    
        dolarToPesos();
    
    } else{
        alert("Ocurrio un error, intente nuevamente")
        cajaSelectora();
    
    }

}

cajaSelectora();





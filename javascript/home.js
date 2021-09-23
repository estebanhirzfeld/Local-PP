
function cajaSelectoraPesosToDolar(){
    let inputPesos = document.getElementById("inputPesos").value;
    
    let outputDolares = (inputPesos / 131)-((inputPesos/131)/100)*6;
    
    // console.log("inputPesos: " + inputPesos)
    
    inputDolares = document.getElementById("inputDolares").value = outputDolares.toFixed(2);

    return outputDolares.toFixed(2);
}

function cajaSelectoraDolarToPesos(){
    let inputDolares = document.getElementById("inputDolares").value;
    
    let outputPesos = (inputDolares - (inputDolares/100)*6)*120;
    
    // console.log("inputDolares: " + inputDolares)
    
    inputPesos = document.getElementById("inputPesos").value = outputPesos.toFixed(2);

    return outputPesos.toFixed(2);
}


function BuscarOfertas(){

    var valorFiltroPesos = cajaSelectoraDolarToPesos()
    var valorFiltroDolares = cajaSelectoraPesosToDolar(); 

    console.log("BUSCAR CON ↓")

    console.log(valorFiltroPesos)
    console.log(valorFiltroDolares)

}






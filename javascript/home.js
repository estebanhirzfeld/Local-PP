function cajaSelectoraPesosToDolar(){

    let inputPesos = document.getElementById("inputPesos").value;
    
    let outputDolares = (inputPesos / 131)-((inputPesos/131)/100)*6;

    
    // console.log("inputPesos: " + inputPesos)
    
    inputDolares = document.getElementById("inputDolares").value = outputDolares.toFixed(2);

    if (inputDolares < 0 ) {inputPesos   = document.getElementById("inputPesos").value = 0;  }
    if (inputDolares < 0 ) {inputDolares = document.getElementById("inputDolares").value = 0;}
    
    return inputDolares;
}

function cajaSelectoraDolarToPesos(){
    let inputDolares = document.getElementById("inputDolares").value;
    
    let outputPesos = (inputDolares - (inputDolares/100)*6)*120;
    
    // console.log("inputDolares: " + inputDolares)
    
    inputPesos = document.getElementById("inputPesos").value = outputPesos.toFixed(2);
    
    if (inputDolares < 0 ) {inputPesos   = document.getElementById("inputPesos").value = 0;  }
    if (inputDolares < 0 ) {inputDolares = document.getElementById("inputDolares").value = 0;}
    
    return inputPesos;
}


inputPesos.onchange = () =>{cajaSelectoraPesosToDolar()}

inputDolares.onchange = () => {cajaSelectoraDolarToPesos()} 
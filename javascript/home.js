
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


function BuscarOfertas(){

    var valorFiltroPesos = cajaSelectoraDolarToPesos()
    var valorFiltroDolares = cajaSelectoraPesosToDolar(); 

    console.log("BUSCAR CON ↓")

    console.log(valorFiltroPesos)
    console.log(valorFiltroDolares)

}

function BotonSwap(){
    var button = document.getElementById('cajaSelectora__botonSwitch'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('div__cajaSelectora');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
}





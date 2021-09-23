function pesosToDolar(){
    let inputPesos = prompt("Ingresar Monto en Pesos");
    let outputDolares = (inputPesos / 131)-((inputPesos/131)/100)*6;

}

function dolarToPesos(){
    let inputDolares = prompt("Ingresar Monto en Dolares");
    let outputPesos = (inputDolares - (inputDolares/100)*6)*120;
}


function cajaSelectoraPesosToDolar(){

    let inputPesos = document.getElementById("inputPesos").value;

    console.log(inputPesos)

}

    inputDolares = document.getElementById("inputDolares").value = 160;


    console.log(inputPesos)










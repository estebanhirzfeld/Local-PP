let toggle = false;
DejarDeConfiar()

$(".botonConfiarUsuario").click(function () {
    toggle = !toggle;
    if (toggle == false) {
        console.log(toggle)
        DejarDeConfiar()
        $(".botonConfiarUsuario").click(function () {
            Confiar()
            toggle = !toggle;
        })
    } else {
        console.log(toggle)
        Confiar()
        $(".botonConfiarUsuario").click(function () {
            DejarDeConfiar()
            toggle = !toggle;
        })
    }
})



// if (toggle == true) {
//     DejarDeConfiar()
//     $(".botonConfiarUsuario").click(function () {
//         Confiar()
//         toggle = !toggle
//     })
// }
// else {
//     Confiar()
//     $(".botonConfiarUsuario").click(function () {
//         DejarDeConfiar()
//         toggle = !toggle
//     })
// }







function Confiar() {
    $(".div__ConfiarEnUser").empty()
    $(".div__ConfiarEnUser").append(
        `
        <ion-icon data-aos="zoom-out" name="checkmark-circle-outline"></ion-icon>
        <h2 data-aos="zoom-out">Ahora confías en estebanhirzfeld</h2>
        <span data-aos="zoom-out">estebanhirzfeld tendra prioridad en los resultados</span>
        <div data-aos="zoom-out">
            <button class="botonConfiarUsuario">
                Dejar de Confiar
            </button>
        </div>
        `
    )
}

function DejarDeConfiar() {
    $(".div__ConfiarEnUser").empty()
    $(".div__ConfiarEnUser").append(
        `
        <div class="div__ConfiarEnUser ">
                                
        <h2>Confiar en estebanhirzfeld </h2>
        <span>¿Confiar en estebanhirzfeld para futuras transacciones?</span>
        <div>
            <button class="botonConfiarUsuario">
                <span>Confiar</span>
            </button>
        </div>
        `
    )
}

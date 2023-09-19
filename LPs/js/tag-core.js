/*+++++ Scripts especiales para TagAirlines +++++*/

// Funciòn para poner display block en un contenedor con el checkbox
console.log("Tag Cores scripts");

function showContent() {
    element = document.getElementById("tagPassengers");
    check = document.getElementById("flexSwitchCheckCheckedDesk");
    if (check.checked) {
        element.style.display='flex';
    }
    else {
        element.style.display='none';
    }
}

// Funciòn para poner display none en input de agragar pasajero con el checkbox

function hidenInput() {
    boxInput = document.getElementById("boxInputAdd1");
    buttonSend = document.getElementById("boxButtonAdd1")
    check = document.getElementById("checkAdd1");
    if (check.checked) {
        boxInput.style.display='block';
        buttonSend.style.display='block';
    }
    else {
        boxInput.style.display='none';
        buttonSend.style.display='none';
    }
}

// Funciones check para elviaje de regreso
function showContentReturn() {
    element = document.getElementById("tagPassengersReturn");
    check = document.getElementById("flexSwitchCheckCheckedDeskReturn");
    if (check.checked) {
        element.style.display='flex';
    }
    else {
        element.style.display='none';
    }
}

// Funciòn para poner display none en input de agragar pasajero con el checkbox

function hidenInputReturn() {
    boxInput = document.getElementById("boxInputAdd1Return");
    check = document.getElementById("checkAdd1Return");
    if (check.checked) {
        boxInput.style.display='block';
    }
    else {
        boxInput.style.display='none';
    }
}

function disabledDiv() {
    document.getElementById("tagFlyReturn").setAttribute("disabled")
}

// Función para obtener la url actual y asignarla al redirect del formulario
$(document).ready(function () {
    var urlSite = window.location;
    console.log("urlSite", urlSite);
    document.getElementById("inputUrl").value = urlSite;
    console.log("input value", document.getElementById("inputUrl").value);
});

// Funcion para seleccionar input radio
$("[type='radio']").on('click', function (e) {
    var previousValue = $(this).attr('previousValue');
    if (previousValue == 'true') {
        this.checked = false;
        $(this).attr('previousValue', this.checked);
    }
    else {
        this.checked = true;
        $(this).attr('previousValue', this.checked);
    }
});

    // Funcion para activar botones del formulario
$(document).ready(function () {

    let btnsContacto = document.querySelectorAll('.btnsContato');

    for (let [i, cv] of btnsContacto.entries()) {
        cv.addEventListener('click', function focus() {
            resetFocus();
            cv.classList.toggle("active")
        })
    }

    function resetFocus() {
        btnsContacto.forEach(el => el.classList.remove("active"));
    }

    document.getElementById("btnPersonas").addEventListener("click", function() {
        document.getElementById("personas").style.display="block";
        document.getElementById("empresa").style.display="none";
        document.getElementById("agencia").style.display="none";
    });

    document.getElementById("btnEmpresa").addEventListener("click", function() {
        document.getElementById("empresa").style.display="block";
        document.getElementById("personas").style.display="none";
        document.getElementById("agencia").style.display="none";
    });

    document.getElementById("btnAgencia").addEventListener("click", function() {
        document.getElementById("agencia").style.display="block";
        document.getElementById("empresa").style.display="none";
        document.getElementById("personas").style.display="none";
    }); 
})

    // Botones de formulario Datos Viaje
$(document).ready(function () {
    let btnsDatosViaje = document.querySelectorAll('.btnsVatosViaje');

    for (let [z,pv] of btnsDatosViaje.entries()) {
        pv.addEventListener('click', function focus() {
            resetFocus();
            pv.classList.toggle("active")
        })
    }

    function resetFocus() {
        btnsDatosViaje.forEach(el => el.classList.remove("active"));
    }

    document.getElementById("btnIdaVuelta").addEventListener("click", function() {
        document.getElementById("contLlegada").style.display="block";
    });

    document.getElementById("btnSoloIda").addEventListener("click", function() {
        document.getElementById("contLlegada").style.display="none";
    });
})

function addComents() {
    boxInput = document.getElementById("commenstTxtArea");
    check = document.getElementById("comentariosAdicionales");
    if (check.checked) {
        boxInput.style.display='block';
    }
    else {
        boxInput.style.display='none';
    }
}

// Botones de Nuestros Convenios
$(document).ready(function () {
    let btnsDatosViaje = document.querySelectorAll('.btnsNuestrosConvenios');

    for (let [z, pv] of btnsDatosViaje.entries()) {
        pv.addEventListener('click', function focus() {
            resetFocus();
            pv.classList.toggle("active")
        })
    }

    function resetFocus() {
        btnsDatosViaje.forEach(el => el.classList.remove("active"));
    }

    document.getElementById("btnRestaurantes").addEventListener("click", function () {
        document.getElementById("tagSeccionRestaurantes").style.display = "block";
        document.getElementById("tagSeccionSalud").style.display = "none";
        document.getElementById("tagSeccionEscuela").style.display = "none";
        document.getElementById("tagSeccionTiendas").style.display = "none";
        document.getElementById("tagSeccionHospedajes").style.display = "none";
    });

    document.getElementById("btnSalud").addEventListener("click", function () {
        document.getElementById("tagSeccionRestaurantes").style.display = "none";
        document.getElementById("tagSeccionSalud").style.display = "block";
        document.getElementById("tagSeccionEscuela").style.display = "none";
        document.getElementById("tagSeccionTiendas").style.display = "none";
        document.getElementById("tagSeccionHospedajes").style.display = "none";
    });

    document.getElementById("btnEscuela").addEventListener("click", function () {
        document.getElementById("tagSeccionRestaurantes").style.display = "none";
        document.getElementById("tagSeccionSalud").style.display = "none";
        document.getElementById("tagSeccionEscuela").style.display = "block";
        document.getElementById("tagSeccionTiendas").style.display = "none";
        document.getElementById("tagSeccionHospedajes").style.display = "none";
    });

    document.getElementById("btnTiendas").addEventListener("click", function () {
        document.getElementById("tagSeccionRestaurantes").style.display = "none";
        document.getElementById("tagSeccionSalud").style.display = "none";
        document.getElementById("tagSeccionEscuela").style.display = "none";
        document.getElementById("tagSeccionTiendas").style.display = "block";
        document.getElementById("tagSeccionHospedajes").style.display = "none";
    });

    document.getElementById("btnHospedajes").addEventListener("click", function () {
        document.getElementById("tagSeccionRestaurantes").style.display = "none";
        document.getElementById("tagSeccionSalud").style.display = "none";
        document.getElementById("tagSeccionEscuela").style.display = "none";
        document.getElementById("tagSeccionTiendas").style.display = "none";
        document.getElementById("tagSeccionHospedajes").style.display = "block";
    });
})

// Botones de Cumpleaños
$(document).ready(function () {
    let btnsDatosViaje = document.querySelectorAll('.btnsCumpleViaje');

    for (let [z,pv] of btnsDatosViaje.entries()) {
        pv.addEventListener('click', function focus() {
            resetFocus();
            pv.classList.toggle("active")
        })
    }

    function resetFocus() {
        btnsDatosViaje.forEach(el => el.classList.remove("active"));
    }

    document.getElementById("btnCumpleaños").addEventListener("click", function() {
        document.getElementById("TagLpCumple").style.display="block";
        document.getElementById("TagLpAniversario").style.display="none";
    });

    document.getElementById("btnAniversarios").addEventListener("click", function() {
        document.getElementById("TagLpCumple").style.display="none";
        document.getElementById("TagLpAniversario").style.display="block";
    });
})

// Función para reegresar al home de portal de empleados
let portalEmpledos = "../../es-gt/portal-de-empleados/portal-de-empleados.html"

function regresarPortalEmpleados(e) {
    window.location.href = portalEmpledos;
}
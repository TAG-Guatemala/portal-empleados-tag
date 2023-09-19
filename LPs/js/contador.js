let total_element = document.getElementById('totalAdultos')  // obtenemos el elemento
let total_menores = document.getElementById('totalMenores')  
let total_Infante = document.getElementById('totalInfantes')  
let total_Habitaciones = document.getElementById('totalHabitaciones') 


function sumar() {
  let total_value = parseInt(total_element.innerHTML);
  total_element.innerHTML = total_value + 1;
}


function restar() {
  let total_value = parseInt(total_element.innerHTML);
  if (total_value == 0) return; // validamos que el valor no sea menor a 0
  total_element.innerHTML = total_value - 1;
}

function sumarMenores() {
  let total_value_menores = parseInt(total_menores.innerHTML);
  total_menores.innerHTML = total_value_menores + 1;
}

function restarMenores() {
  let total_value_menores = parseInt(total_menores.innerHTML);
  if (total_value_menores == 0) return; // validamos que el valor no sea menor a 0
  total_menores.innerHTML = total_value_menores - 1;
}

function sumarInfante() {
  let total_value_infante = parseInt(total_Infante.innerHTML);
  total_Infante.innerHTML = total_value_infante + 1;
}

function restarInfante() {
  let total_value_infante = parseInt(total_Infante.innerHTML);
  if (total_value_infante == 0) return; // validamos que el valor no sea menor a 0
  total_Infante.innerHTML = total_value_infante - 1;
}

function sumarHabitacion() {
  let total_value_Habitacion = parseInt(total_Habitaciones.innerHTML);
  total_Habitaciones.innerHTML = total_value_Habitacion + 1;
}

function restarHabitacion() {
  let total_value_Habitacion = parseInt(total_Habitaciones.innerHTML);
  if (total_value_Habitacion == 0) return; // validamos que el valor no sea menor a 0
  total_Habitaciones.innerHTML = total_value_Habitacion - 1;
}

// asignamos funcion click a cada Div
document.getElementById('sumarAdultos').addEventListener('click', sumar);
document.getElementById('restarAdultos').addEventListener('click', restar);

document.getElementById('sumarMenores').addEventListener('click', sumarMenores);
document.getElementById('restarMenores').addEventListener('click', restarMenores);

document.getElementById('sumarInfantes').addEventListener('click', sumarInfante);
document.getElementById('restarInfantes').addEventListener('click', restarInfante);

document.getElementById('sumarHabitaciones').addEventListener('click', sumarHabitacion);
document.getElementById('restarHabitaciones').addEventListener('click', restarHabitacion);

// Data Picker Initialization
$('#datepickerSalida').datepicker({
  uiLibrary: 'bootstrap5'
});

// Data Picker Initialization
$('#datepickerLlegada').datepicker({
  uiLibrary: 'bootstrap5'
});
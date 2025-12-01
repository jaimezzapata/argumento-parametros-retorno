// function calcularSalarioEmpleado(valorHora,cantidadHoras) {
//   if (isNaN(valorHora) || isNaN(cantidadHoras)) {
//     console.log("Debe ingresar los valores en números");
//   } else {
//     console.log("El salario es: " + valorHora * cantidadHoras);
//   }
// }
// function definirHoraExtra(cantidadHoras) {
//   console.log("Cantidad de horas extras: " + (cantidadHoras - 44));
// }
// let valorHora = prompt("Ingrese el valor de la hora: ");
// let cantidadHoras = prompt("Ingrese la cantidad de horas: ");
// calcularSalarioEmpleado(valorHora,cantidadHoras)
// definirHoraExtra(cantidadHoras);

function iniciarSistemaNominaEmpleado() {
  const VALOR_HORA = prompt("Ingrese el valor de la hora: ");
  const LIMITE_HORAS = prompt("Ingrese el limite de horas ordinarias");
  const SALARIO_MINIMO = prompt("Ingrese el SMMLV");
  const AUXILIO_TRANSPORTE = prompt("Ingrese el valor por auxilio de transporte")

  if (isNaN(VALOR_HORA) || isNaN(LIMITE_HORAS)) {
    console.log("Debe ingresar solo valores numéricos");
  } else {
    let repetir = true;
    while (repetir) {
      let cantidadHoras = prompt("Ingrese la cantidad de horas trabajadas");
      if (isNaN(cantidadHoras)) {
        console.log("La cantidad de horas debe ser en numeros");
      } else if (cantidadHoras < 24) {
        console.log("El empleado no puede trabajar menos de 24 horas");
      }
      let opcion = prompt(
        "Seleccione:\n1 - Calcular un salario\n2 - Finalizar sistema",
      );
      if (opcion == 2) {
        repetir = false;
      } else {
        let salarioBrutoEmpleado = calcularSalarioBrutoEmpleado(cantidadHoras, VALOR_HORA, LIMITE_HORAS);
        let valorHorasExtras = calcularValorHoraExtraEmpleado(cantidadHoras, VALOR_HORA, LIMITE_HORAS)
        let valorAuxilioTransporte = calcularAuxilioTransporteEmpleado(salarioBrutoEmpleado, SALARIO_MINIMO, AUXILIO_TRANSPORTE)
        console.log(valorAuxilioTransporte)
      }
    }
  }
}

function calcularSalarioNetoEmpleado() { }

function calcularSalarioBrutoEmpleado(cantidadHoras, VALOR_HORA, LIMITE_HORAS) {
  let salarioEmpleado = 0;
  if (cantidadHoras > LIMITE_HORAS) {
    salarioEmpleado = VALOR_HORA * LIMITE_HORAS;
  } else {
    salarioEmpleado = VALOR_HORA * cantidadHoras;
  }
  return salarioEmpleado
}

function calcularValorHoraExtraEmpleado(cantidadHoras, VALOR_HORA, LIMITE_HORAS) {
  let valorHorasExtras = 0
  let cantidadExtras = 0
  if(cantidadHoras > LIMITE_HORAS){
    cantidadExtras = cantidadHoras - LIMITE_HORAS
    valorHorasExtras = cantidadExtras * 0.25 * VALOR_HORA
    console.log("EL empleado tranajó estas horas extras: " + cantidadExtras)
  } else {
    valorHorasExtras = 0
  }
  return valorHorasExtras
}

function calcularAuxilioTransporteEmpleado(salarioBrutoEmpleado, SALARIO_MINIMO, AUXILIO_TRANSPORTE) {
  if(salarioBrutoEmpleado > SALARIO_MINIMO * 2){
      return 0
  } else {
      return AUXILIO_TRANSPORTE
  }
}

function calcularDeduccionesEmpleado() { }
function mostrarColillaPagoEmpleado() { }

iniciarSistemaNominaEmpleado();
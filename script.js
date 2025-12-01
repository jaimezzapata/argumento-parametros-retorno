import {
  calcularSalarioNetoEmpleado,
  calcularAuxilioTransporteEmpleado,
  calcularSalarioBrutoEmpleado,
  calcularValorHoraExtraEmpleado,
  calcularDeduccionesEmpleado,
  mostrarColillaPagoEmpleado,
} from "./funciones.js";

import {
  VALOR_HORA,
  AUXILIO_TRANSPORTE,
  SALARIO_MINIMO,
  LIMITE_HORAS,
} from "./datosbase.js";

function iniciarSistemaNominaEmpleado() {
  VALOR_HORA, AUXILIO_TRANSPORTE, SALARIO_MINIMO, LIMITE_HORAS;
  if (isNaN(VALOR_HORA) || isNaN(LIMITE_HORAS)) {
    console.log("Debe ingresar solo valores numéricos");
  } else {
    let repetir = true;
    while (repetir) {
      let cantidadHoras = Number(
        prompt("Ingrese la cantidad de horas trabajadas")
      );
      if (isNaN(cantidadHoras)) {
        console.log("La cantidad de horas debe ser en numeros");
      } else if (cantidadHoras < 24) {
        console.log("El empleado no puede trabajar menos de 24 horas");
      }
      let opcion = Number(
        prompt("Seleccione:\n1 - Calcular un salario\n2 - Finalizar sistema")
      );
      if (opcion == 2) {
        repetir = false;
      } else {
        let salarioBrutoEmpleado = calcularSalarioBrutoEmpleado(
          cantidadHoras,
          VALOR_HORA,
          LIMITE_HORAS
        );
        let valorHorasExtras = calcularValorHoraExtraEmpleado(
          cantidadHoras,
          VALOR_HORA,
          LIMITE_HORAS
        );
        let valorAuxilioTransporte = calcularAuxilioTransporteEmpleado(
          salarioBrutoEmpleado,
          SALARIO_MINIMO,
          AUXILIO_TRANSPORTE
        );
        let valorDeducciones =
          calcularDeduccionesEmpleado(salarioBrutoEmpleado);
        let salarioNetoEmpleado = calcularSalarioNetoEmpleado(
          salarioBrutoEmpleado,
          valorHorasExtras,
          valorAuxilioTransporte,
          valorDeducciones
        );
        mostrarColillaPagoEmpleado(
          salarioBrutoEmpleado,
          valorHorasExtras,
          valorAuxilioTransporte,
          valorDeducciones,
          salarioNetoEmpleado
        );
      }
    }
  }
}

iniciarSistemaNominaEmpleado();



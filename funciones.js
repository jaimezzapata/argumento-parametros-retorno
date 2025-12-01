export default function calcularSalarioNetoEmpleado(
  salarioBrutoEmpleado,
  valorHorasExtras,
  valorAuxilioTransporte,
  valorDeducciones
) {
  return (
    salarioBrutoEmpleado -
    valorDeducciones +
    valorHorasExtras +
    valorAuxilioTransporte
  );
}

export function calcularSalarioBrutoEmpleado(cantidadHoras, VALOR_HORA, LIMITE_HORAS) {
  let salarioEmpleado = 0;
  if (cantidadHoras > LIMITE_HORAS) {
    salarioEmpleado = VALOR_HORA * LIMITE_HORAS;
  } else {
    salarioEmpleado = VALOR_HORA * cantidadHoras;
  }
  return salarioEmpleado;
}

export function calcularValorHoraExtraEmpleado(
  cantidadHoras,
  VALOR_HORA,
  LIMITE_HORAS
) {
  let valorHorasExtras = 0;
  let cantidadExtras = 0;
  if (cantidadHoras > LIMITE_HORAS) {
    cantidadExtras = cantidadHoras - LIMITE_HORAS;
    valorHorasExtras = cantidadExtras * 0.25 * VALOR_HORA;
    console.log("El empleado trabajó estas horas extras: " + cantidadExtras);
  } else {
    valorHorasExtras = 0;
  }
  return valorHorasExtras;
}

export function calcularAuxilioTransporteEmpleado(
  salarioBrutoEmpleado,
  SALARIO_MINIMO,
  AUXILIO_TRANSPORTE
) {
  if (salarioBrutoEmpleado > SALARIO_MINIMO * 2) {
    return 0;
  } else {
    return AUXILIO_TRANSPORTE;
  }
}

export function calcularDeduccionesEmpleado(salarioBrutoEmpleado) {
  return salarioBrutoEmpleado * 0.08;
}

export function mostrarColillaPagoEmpleado(
  salarioBrutoEmpleado,
  valorHorasExtras,
  valorAuxilioTransporte,
  valorDeducciones,
  salarioNetoEmpleado
) {
  console.log("*************Colila de Pago del Empleado*************");
  console.log("El salario Bruto es: " + salarioBrutoEmpleado);
  console.log("El auxilio de transporte es: " + valorAuxilioTransporte);
  console.log("El valor de deducciones es: " + valorDeducciones);
  console.log("El valor por horas extras es: " + valorHorasExtras);
  console.log("El Salario neto es: " + salarioNetoEmpleado);
}

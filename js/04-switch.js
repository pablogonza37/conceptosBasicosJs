// si el usuario presiona 1 consulte el sado, 2 extraer dinero, 3 ingresar dinero
/*
let saldo = 1000;

const opcion = parseInt(
  prompt(
    "Selecione una opcion: 1- consultar el salto 2- extraer dinero 3- ingresar dinero"
  )
);

if (opcion === 1) {
  alert(`Su saldo actual es $${saldo}`);
} else if (opcion === 2) {
  console.log("ingrese el dinero");
  const extraccion = parseFloat(prompt("Cuanto desea extraer?"));
  if (extraccion > saldo) {
    alert("No tiene dinero suficiente. Ingrese otrs cantidad");
  } else {
    saldo -= extraccion;
    alert(`Su saldo actual es $${saldo}`);
  }
} else if (opcion === 3) {
  console.log("ingreso el dinero");
  const ingreso = parseFloat(prompt("Cuanto dinero desea ingresar:"));
  saldo += ingreso;
  alert(`Su saldo actual es $${saldo}`);
} else {
  console.log("ingreso una opcion invalida");
  alert("ingreso una opcion invalida");
}
*/



let saldo = 1000;

do{
    const opcion = parseInt(
  prompt(
    "Selecione una opcion: 1- consultar el salto 2- extraer dinero 3- ingresar dinero"
  )
);


switch (opcion) {
  case 1:
    document.write(`Su saldo actual es $${saldo}</br>`);
    break;
  case 2:
    console.log("ingrese el dinero");
    const extraccion = parseFloat(prompt("Cuanto desea extraer?"));
    if (extraccion > 0){
    if (extraccion > saldo) {
        document.write("No tiene dinero suficiente. Ingrese otrs cantidad </br>");
    } else {
      saldo -= extraccion;
      document.write(`EXTRACCION EXITOSA! </br>`);
      document.write(`Su saldo actual es $${saldo} </br>`);
    }
    }else alert('ingrese un valor mayor a 0');
    break;
  case 3:
    console.log("ingreso el dinero");
    const ingreso = parseFloat(prompt("Cuanto dinero desea ingresar:"));
    if (ingreso > 0){
    saldo += ingreso;
    document.write(`INGRESO EXITOSO! </br>`);
    document.write(`Su saldo actual es $${saldo}</br>`);
    }else alert('ingrese un valor mayor a 0');
    break;
  default:
    console.log("ingreso una opcion invalida");
    document.write("ingreso una opcion invalida </br>");
}
}while(confirm('Desea realizar otra operacion?'));
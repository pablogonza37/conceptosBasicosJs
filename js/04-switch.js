// si el usuario presiona 1 consulte el sado, 2 extraer dinero, 3 ingresar dinero

let saldo = 1000;

const opcion = prompt('Selecione una opcion: 1- consultar el salto 2- extraer dinero 3- ingresar dinero')

if(opcion === 1){
    console.log('debo mostrar el saldo');
}else if(opcion === 2){
    console.log('ingrese el dinero')
}else if(opcion === 3){
    console.log('ingreso el dinero');
}else{
    console.log('ingreso una opcion invalida');
}
// si el usuario presiona 1 consulte el sado, 2 extraer dinero, 3 ingresar dinero

let saldo = 1000;

const opcion = parseInt(prompt('Selecione una opcion: 1- consultar el salto 2- extraer dinero 3- ingresar dinero'));

if(opcion === 1){
    
    alert(`Su saldo actual es $${saldo}`); 
}else if(opcion === 2){
    console.log('ingrese el dinero');
    const extraccion = parseInt(prompt('Cuanto desea extraer?'));
    if (extraccion > saldo){
        alert('No tiene dinero suficiente. Ingrese otrs cantidad')
    }else {
        saldo -= extraccion;
        alert(`Su saldo actual es $${saldo}`);
    }
}else if(opcion === 3){
    console.log('ingreso el dinero');
    const ingreso = parseInt(prompt('Cuanto dinero desea ingresar:'));
    saldo += ingreso;
    alert(`Su saldo actual es $${saldo}`);
}else{   
    console.log('ingreso una opcion invalida');
    alert('ingreso una opcion invalida');  
}
// funciones declarativas
function saludar(){
    // todas las lineas de codigo que quiero hacer para saludar
    document.write(`<p>Hola mundo</p>`);
}

function saludoNuevo(nombreIngresado, apellidoIngresado){
    document.write(`<p>Hola ${nombreIngresado}, ${apellidoIngresado}. Que tengas un buen dia</p>`);
}

function sumar(numero1, numero2){
    const resultado = numero1 + numero2;
    return resultado;
}

// arrow functions
//const sumar = (numero1, numero2) => {
//    const resultado = numero1 + numero2;
//    return resultado;
//} 

const sumar = (numero1, numero2) => numero1 + numero2;




// invocar o llamar una funcion
saludar();

const nombre = prompt('ingrese un nombre');
const apellido = prompt('ingrese un apellido');

saludoNuevo(nombre, apellido);
saludoNuevo('Peter', 'Parker');
saludoNuevo('Batman');

const valorResultante = sumar(30,28);

document.write(`<p>El resultado de la suma es: ${valorResultante}</p>`);
document.write(`<p>El resultado de la suma es: ${sumar(20,30)}</p>`);
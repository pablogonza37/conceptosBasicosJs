// notacion literal

const usuario = {
    //propiedades clave:valor
    nombre: 'Thiago', 
    apellido: 'Fiol',
    edad: 14,
    correo: 'thiago@gmail.com',
    password: '1235Ab@',
    //metodos
    login: function (){
        //este this devueleve una referencia ami objeto usuario
        console.log(this);
        document.write(`<p>El usuario ${this.nombre}, inicio sesión</p>`);
    },
    logout: () =>{
        //este this devuelve el objeto windows
        console.log(this);
        document.write(`<p>El usuario cerro sesión</p>`);
    }
}

console.log(this);

//mostrar un objeto
console.log(usuario);
document.write(usuario);
document.write(`<h1>Usuario: ${usuario.nombre}, ${usuario.apellido}</h1>`);
document.write(`<p>Correo: ${usuario['correo']}</p>`); //otra forma de sintaxis

//modificar la propiedad de un objeto
usuario.edad = usuario.edad + 1;
document.write(`<p>Edad: ${usuario.edad}`);

usuario.perfil = 'alguna foto';
document.write(`<p>Perfil: ${usuario.perfil}</p>`);
console.log(usuario);

//cuidado con las propiedades mal escritas o que no existen
document.write(`<p>Tel: ${usuario.tel}</p>`);

//borrar una propiedad de un objeto
delete usuario.perfil;
console.log(usuario);

//metodo para saber si mi objeto tiene una propiedad

console.log(usuario.hasOwnProperty('edad'));

//invocar un metodo del objeto
usuario.login();
usuario.logout();







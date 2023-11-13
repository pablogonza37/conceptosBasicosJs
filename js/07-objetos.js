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
        document.write(`<p>El usuario inicio sesión</p>`);
    },
    logout: () =>{
        document.write(`<p>El usuario cerro sesión</p>`);
    }
}

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
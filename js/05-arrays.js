//declarar un array

const productos = [];

const juegos = ['counter-strike', 'Minecraft', 2023, true, 'valorant', 'half-life', 'lol'];

// cantidad de elementos en el array
console.log(juegos.length);

// mostrar un array
document.write(juegos);
console.log(juegos);

document.write(`<p>El primer juego es ${juegos[0]}<p/>`);
document.write(`<p>El ultimo juego es ${juegos[juegos.length - 1]}</p>`);
document.write(`<p>juego de la posicion 20 ${juegos[20]}</p>`);

document.write('<h2>Lista de juegos</h2>');
document.write(`<ul>`);
for(let i=0; i < juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

// agregar elementos al array
juegos.unshift('god of war', 'street fighter');
document.write('<h2>Lista de juegos + 2 juegos</h2>');
document.write(`<ul>`);
for(let i=0; i < juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

// agregar en una posicion especifica
juegos.splice(6,0,'Dark souls');
document.write(`<h2>Lista de juegos + 2 juegos + elemento agregado en pos 6, cantidad total ${juegos.length}</h2>`);
document.write(`<ul>`);
for(let i=0; i < juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

// agregar al final
juegos.push('Mortal kombat');
document.write(`<h2>Lista de juegos + 1, cantidad total ${juegos.length}</h2>`);
document.write(`<ul>`);
for(let i=0; i < juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

// modificamos los elementos de un array
juegos[5] = 'Stardew valley';
document.write(`<h2>Lista de juegos, modificamos un elemento del array ${juegos.length}</h2>`);
document.write(`<ul>`);
for(let i=0; i < juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

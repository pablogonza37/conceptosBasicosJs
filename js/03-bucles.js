/*
while(condicion logica){
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion no se cumpla en algun momento
}
*/
let numero = 1;

// document.write('<p>Renglon numero ' + numero + '<p/>');

while( numero <= 10){
    document.write(`<p>Renglon numero ${numero}</p>`);
    numero++;
}

/* 
do{
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion no se cumpla en algun momento
}while(condicion logica)
*/

let contador = 10;

do{
    document.write(`<p>Renglon numero ${contador} con do while</p>`);
    numero--;

}while(contador >= 1)
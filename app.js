'use strict';

import{Search} from './fetch.js';

//mandar llamar al metodo para imprimir la api de un personaje en consola
const personaje = await  mostrarPersonaje('iron man');
console.log(personaje);

async function  mostrarPersonaje(datos) {
    return await Search(datos)
};

//variables
const buscar = document.getElementById('barrabusqueda');
const btnbuscar = document.getElementById('botonbuscar');
//<button id="botonlimpiar" class="main__search-buttons">limpiar</button>  
//const btnlimpiar = document.getElementById('botonlimpiar');
const main = document.getElementById('main');
const img = document.getElementById('heroimg');
const h3 = document.getElementById('titulo');
const h4 = document.getElementById('comics');
const h2 = document.getElementById('entre');

const li = document.getElementById('tcomics');
const l1 = document.getElementById('tcomics1');
const l2 = document.getElementById('tcomics2');
const l3 = document.getElementById('tcomics3');
const l4 = document.getElementById('tcomics4');
const l5 = document.getElementById('tcomics5');

//datos iniciales
img.src = `${personaje.data.results[0].thumbnail.path}.${personaje.data.results[0].thumbnail.extension}`;
img.alt = personaje.data.results[0].name;

img.className = 'img-hero';
h3.textContent = personaje.data.results[0].name;
h3.className = 'main__data_Marvel-title';
h4.textContent = 'Comics del personaje: ';

li.textContent = personaje.data.results[0].comics.items[0].name;
li.className = 'dick';
l1.textContent = personaje.data.results[0].comics.items[1].name;
l1.className = 'dick';
l2.textContent = personaje.data.results[0].comics.items[2].name;
l2.className = 'dick';
l3.textContent = personaje.data.results[0].comics.items[3].name;
l3.className = 'dick';
l4.textContent = personaje.data.results[0].comics.items[4].name;
l4.className = 'dick';
l5.textContent = personaje.data.results[0].comics.items[5].name;
l5.className = 'dick';

//orden para mostrar los elementos
main.append(buscar);
main.append(btnbuscar);
//main.append(btnlimpiar);

//boton buscar
async function buscarP(){
    const res = await mostrarPersonaje(buscar.value);
    h2.textContent = 'Resultado de busqueda:';
    img.src = `${res.data.results[0].thumbnail.path}.${res.data.results[0].thumbnail.extension}`;
    img.alt = res.data.results[0].name;
    img.className = 'img-hero';
    h3.textContent = res.data.results[0].name;
    h3.className = 'main__data_Marvel-title';
    h4.textContent = 'Comics del personaje: ';
    li.textContent = res.data.results[0].comics.items[0].name,
    li.className = 'dick';
    l1.textContent = res.data.results[0].comics.items[1].name;
    l1.className = 'dick';
    l2.textContent = res.data.results[0].comics.items[2].name;
    l2.className = 'dick';
    l3.textContent = res.data.results[0].comics.items[3].name;
    l3.className = 'dick';
    l4.textContent = res.data.results[0].comics.items[4].name;
    l4.className = 'dick';
    l5.textContent = res.data.results[0].comics.items[5].name;
    l5.className = 'dick';
};

/*boton limpiar
async function clear(){
    buscar.value = "";
    document.getElementById('data').innerHTML="";
};*/

btnbuscar.onclick = buscarP;
//btnlimpiar.onclick = clear;
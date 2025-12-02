import { comic } from "./bd.js";

const personajes = document.querySelector('.personajes-container');

console.log(comic.personajes)

comic.personajes.forEach(char => {
    //crear elemntos dinamicamente con javascript
    const div = document.createElement("div");
    div.classList.add('parrafo');
    div.innerHTML = `
        <img src="${char.imagen}" alt="" class="imagenesPersonajes">    
        <p>${char.descripcion}</p>
        <a href="personajes.html?id=${char.id}"><button>Ver Personajes</button></a>
        
    `;
    personajes.appendChild(div);
});

const capitulos = document.querySelector('.capitulos');

console.log(comic.capitulos)

comic.capitulos.forEach(cap => {
    //crear elementos dinamicamente con javascript
    const div = document.createElement("div");
    div.classList.add('cap1' , 'cap2' , 'cap3');
    div.innerHTML = `
        <h2>${cap.nombre}</h2>
        <img src="${cap.portada}" alt="" class="imagenCapitulos">
        <p>${cap.descripcion}</p>
       <a href="capitulos.html?id=${cap.id}"><button>Ver Capitulos</button></a>
    `;
    capitulos.appendChild(div);
});


const princial = document.querySelector('.titulo-principal');

console.log(princial);

comic.princial.forEach(prin => {
    //crear elementos dinamicamente con javascript
    const div = document.createElement("div");
    /* div.classList.add('titulo-principal'); */
    div.innerHTML = `
         <div class="img">
        <img class="fondo" src="${prin.portadaComic}" alt="fondo">
        <img src="${prin.portadaComic2}" class="fondo2" alt="fondo2">
        <img src="${prin.portadaComic3}" class="fondo3" alt="fondo3">
        </div>
        <div class="contenedor">
            <h1 class="titulo1" >${prin.nombreComic}</h1>
            <p>${prin.sipnosis}</p>
            </div>
    <button class="comienza">Comienza la Historia</button>
    `;
    princial.appendChild(div);
});
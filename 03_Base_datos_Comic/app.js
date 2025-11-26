import { comic } from "./bd.js";

const personajes = document.querySelector('.personajes-container');

console.log(comic.personajes)

comic.personajes.forEach(char => {
    //crear elemntos dinamicamente con javascript
    const div = document.createElement("div");
    div.classList.add('parrafo');
    div.innerHTML = `
        <a href="personajes.html?=º${char.id}">
        <img src="${char.imagen}" alt="" class="imagenesPersonajes">    
        <p>${char.descripcion}</p>
        <a href="personajes.html"><button>Ver Personajes</button></a>
        </a>
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
       <a href="capitulos.html"><button>Ver Capitulos</button></a>
    `;
    capitulos.appendChild(div);
});


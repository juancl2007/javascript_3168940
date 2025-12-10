import { comic } from "./bd.js";

const personajes = document.querySelector('.personajes-container');

console.log(comic.personajes)

comic.personajes.forEach(char => {
    //crear elemntos dinamicamente con javascript
    const div = document.createElement("div");
    div.classList.add('parrafo');
    div.classList.add('fade-in');
    div.innerHTML = `
        <img src="${char.imagen}" alt="" class="imagenesPersonajes">    
        <p class="descripcion">${char.descripcion}</p>
        <a href="personajes.html?id=${char.id}">
        <button class="button-personajes">Ver Personajes</button></a>
        
    `;
    personajes.appendChild(div);
});

const capitulos = document.querySelector('.capitulos');

console.log(comic.capitulos)

comic.capitulos.forEach(cap => {
    //crear elementos dinamicamente con javascript
    const div = document.createElement("div");
    div.classList.add('cap1' , 'cap2' , 'cap3');
    div.classList.add('fade-in');
    div.innerHTML = `
        <h2>${cap.nombre}</h2>
        <img src="${cap.portada}" alt="" class="imagenCapitulos">
        <p>${cap.descripcion}</p>
       <a href="capitulos.html?id=${cap.id}"><button>Ver Capitulos</button></a>
    `;
    capitulos.appendChild(div);
});


const princial = document.querySelector('.tituloPrincipal');

princial.classList.add('fade-in');
console.log(princial);

    princial.innerHTML = `
        <div class="contenedor">
            <h1 class="titulo1" >${comic.nombrecomic}</h1>
            <p>${comic.sipnosis}</p>
            </div>
    <a href="#capitulos"><button class="comienza">Comienza la Historia</button></a>
    `;

//carrusel de imagenes en la pagina principal
let indice = 0;

const carruselDiv = document.querySelector('.carrusel');
carruselDiv.classList.add('fade-in');

function mostrarImagenCarrusel() {
    carruselDiv.style.backgroundImage = `url(${comic.carrusel[0][`portadaComic${indice + 1}`]})`;
    indice = (indice + 1) % 3; // Cambia entre 0, 1 y 2
}

mostrarImagenCarrusel(); 
setInterval(mostrarImagenCarrusel, 3000); 

//Animaciones con javascript
const header = document.querySelector('header');

header.classList.add('fade-in');

const footer = document.querySelector('footer');


footer.classList.add('fade-in');


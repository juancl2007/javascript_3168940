const personajes =document.querySelector('.card-personajes');
const infoComic = document.querySelector('.infoComic');

console.log(infoComic)

infoComic.innerHTML = `
 <small>Año de Publicacion: ${comic.año} </small>
 <h1>Titulo: ${comic.nombrecomic} </h1>
 <h2>Genero: ${comic.genero} </h2>
 <h3>Autores: ${comic.autores} </h3>
 <p>Sinopsis: ${comic.sipnosis} </p>
`;


console.log(comic.personajes)

comic.personajes.forEach(char => {
    //crear elemntos dinamicamente con javascript
    const div = document.createElement("div");
    div.classList.add('personajes');
    div.innerHTML = `
        <h4>Nombre: ${char.NombrePersonaje} </h4>
        <p>Personaje: ${char.descripcion} </p>
        <img src="${char.imagen}" alt="${char.Personaje1}">
    `;
    personajes.appendChild(div);
});

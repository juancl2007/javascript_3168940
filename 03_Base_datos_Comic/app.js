const personajes = document.querySelector('.personajes-container');


console.log(comic.personajes)

comic.personajes.forEach(char => {
    //crear elemntos dinamicamente con javascript
    const div = document.createElement("div");
    div.classList.add('parrafo');
    div.innerHTML = `
        <img src="${char.imagen}" alt="" class="imagenesPersonajes">    
        <p>${char.descripcion}</p>
    `;
    personajes.appendChild(div);
});



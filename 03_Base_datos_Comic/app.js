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
        <button>Ver capitulo</button>
    `;
    capitulos.appendChild(div);
});

const imgenPortada = document.querySelector('.img');

comic.imagenPortada.forEach(img => {
    const div = document.createElement("div");
    div.classList.add('fondo');
    div.innerHTML = `
        <img src="${img.imgenPortada}" alt="" class="fondo">    
    `;
    imgenPortada.appendChild(div);
});

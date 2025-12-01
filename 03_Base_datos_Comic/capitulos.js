
import { comic } from "./bd.js";

console.log(comic.capitulos);

const params = new URLSearchParams(window.location.search);
const id = parseInt (params.get('id') );
console.log("el id del capitulo es" ,id);

const miCapitulo = comic.capitulos.find( cap => cap.id === id );

const capituloContainer = document.querySelector('.capitulos');

console.log(capituloContainer);

capituloContainer.innerHTML = `
    <h1 class="capitulo1">${miCapitulo.nombre}</h1>
    
    <video class="video" controls>
        <source src="videos/video1.mp4" type="video/mp4">
        <source src="mi_video.webm" type="video/webm">
    </video>
    <p class="parrafo">${miCapitulo.descripcion2}</p>
</div>
`;

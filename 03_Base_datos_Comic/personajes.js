//"configuracion ESmodules 2611"

import { comic } from "./bd.js";

console.log(comic.personajes);

const params = new URLSearchParams(window.location.search);
const id = parseInt (params.get('id') );

console.log("el id del personaje es" ,id);

const mipersonaje = comic.personajes.find( char => char.id === id );

const personajeContainer = document.querySelector('.container');



console.log(personajeContainer);

personajeContainer.innerHTML = `
    <a href="index.html"><button>Volver</button></a>
    <h1 class="TituloP">Personajes</h1>
        <div class="personaje1">
            <h2>${mipersonaje.NombrePersonaje}</h2>
            <p>${mipersonaje.descripcion}</p>
                <div class="contenedor-musical" ${mipersonaje.id === 1 ? "" : "style='display:none;'"} >
                    <h2>Sus Mejores Canciones</h2>
                    <a href="https://www.youtube.com/watch?v=BOjuL8WxnE0&list=RDBOjuL8WxnE0&start_radio=1"><img src="youtube.png" alt="cancion" class="musical"></a>
                    <a href="https://www.youtube.com/watch?v=AkJBox146RY&list=RDAkJBox146RY&start_radio=1"><img src="youtube.png" alt="cancion" class="musical"></a>
                    <a href="https://www.youtube.com/watch?v=K2CvPzWklM0&list=RDK2CvPzWklM0&start_radio=1"><img src="youtube.png" alt="cancion" class="musical"></a>
                </div>
             <div>
                <img src="${mipersonaje.imagen}" alt="" class="foto">
            </div>
            
            <div class="datos">
            
                <li>${mipersonaje.datos.Biografía}</li>
                
                
                <li>${mipersonaje.datos.Discografía ? mipersonaje.datos.Discografía : ""}</li>
                
                

                <li>${mipersonaje.datos.Legado ? mipersonaje.datos.Legado : ""}</li>
                

                <li>${mipersonaje.datos.Influencia ? mipersonaje.datos.Influencia : ""}</li>
                
            </div>
`;


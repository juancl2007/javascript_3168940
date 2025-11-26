//"configuracion ESmodules 2611"

import { comic } from "./bd.js";

console.log(comic.personajes);

const params = new URLSearchParams(window.location.search);
const id = parseInt (params.get('id') );

console.log("el id del personaje es" ,id);
const imagen = document.getElementById ('imagen');
const boton1 = document.getElementById ('boton1');
const boton2 = document.getElementById ('boton2');
const boton3 = document.getElementById ('boton3');

boton1.addEventListener("click", () => {
    imagen.classList.toggle("bn");
})


boton2.addEventListener("click", () => {
    imagen.classList.toggle("blur");
})

boton3.addEventListener("click", () => {
    imagen.classList.toggle("rot");
    
})


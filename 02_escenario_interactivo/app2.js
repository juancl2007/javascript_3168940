const personajes = document.querySelector('.personajes');
const enemigos = document.querySelectorAll('.enemigos');
const monedas = document.querySelectorAll('.monedas');
const vidas = document.querySelector('.vidas');
const contador = document.querySelector('.contador');

let counter = 0;

enemigos.forEach(item => {

    item.addEventListener('click', () => {
        item.style.filter = "grayscale(100%)";
        item.classList.add("saltar");
        vidas.textContent = parseInt(vidas.textContent) + 1;
    });
});


monedas.forEach(m => {

    m.addEventListener('click', () => {
        m.style.filter = "grayscale(100%)";
        m.classList.add("saltar");
        contador.textContent = parseInt(contador.textContent) + 1;
    });
});


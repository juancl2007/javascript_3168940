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

const balones = document.querySelectorAll('.balones');
const manzanas = document.querySelectorAll('.manzanas');
const contadorManzanas = document.querySelector('.contadorManzanas');
const contadorBalones = document.querySelector('.contadorBalones');

balones.forEach(balon => {
    balon.addEventListener('click', () => {
        //balon.style.filter = "grayscale(100%)";
        balon.style.animation = "salto 3s ease forwards";
       //balon.classList.add("saltar");
        contadorBalones.textContent = parseInt(contadorBalones.textContent) + 1;
    });
});

manzanas.forEach(manzana => {
    manzana.addEventListener('click', () => {
        manzana.style.filter = "grayscale(100%)";
        manzana.classList.add("saltar");
        contadorManzanas.textContent = parseInt(contadorManzanas.textContent) + 1;
    });
});

const guardias = document.querySelectorAll('.guardias');
const galletas = document.querySelectorAll('.galletas');
const contadorSquid = document.querySelector('.contadorSquid');
const contadorF = document.querySelector('.contadorF');

guardias.forEach(guardia => {
    guardia.addEventListener('click', () => {
        guardia.style.filter = "contrast(700%)";
        guardia.classList.add("saltar");
        contadorSquid.textContent = parseInt(contadorSquid.textContent) + 1;
    });
});

galletas.forEach(galleta => {
    galleta.addEventListener('click', () => {
        galleta.style.animation = "salto 2s ease forwards";
        galleta.classList.add("saltar");
        contadorF.textContent = parseInt(contadorF.textContent) + 1;
    });
});






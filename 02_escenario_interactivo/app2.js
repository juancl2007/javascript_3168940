const personajes = document.querySelector('.personajes');
const enemigos = document.querySelectorAll('.enemigos');
const monedas = document.querySelectorAll('.monedas');
const vidas = document.querySelector('.vidas');
const contador = document.querySelector('.contador');
const sonido= document.querySelector('.sonido');
const zombieSound= document.querySelector('.zombie');
const haloSound= document.querySelector('.halo');

personajes.addEventListener('click', () => {
    haloSound.play();
});

let counter = 0;


enemigos.forEach(item => {

    item.addEventListener('click', () => {
        item.style.filter = "grayscale(100%)";
        item.classList.add("saltar");
        zombieSound.play();
        vidas.textContent = parseInt(vidas.textContent) + 1;
    });
});


monedas.forEach(m => {

    m.addEventListener('click', () => {
        m.style.filter = "grayscale(100%)";
        sonido.play();
        m.classList.add("saltar");
        contador.textContent = parseInt(contador.textContent) + 1;
    });
});

const balones = document.querySelectorAll('.balones');
const manzanas = document.querySelectorAll('.manzanas');
const contadorManzanas = document.querySelector('.contadorManzanas');
const contadorBalones = document.querySelector('.contadorBalones');
const sonidoBalon= document.querySelector('.sonidoBalon');
const caidaSound= document.querySelector('.caida');
const grada = document.querySelector('.grada');
const multitudSound= document.querySelector('.multitud');

grada.addEventListener('click', () => {
    multitudSound.play();
});

balones.forEach(balon => {
    balon.addEventListener('click', () => {
        //balon.style.filter = "grayscale(100%)";
        balon.style.animation = "salto 3s ease forwards";
       //balon.classList.add("saltar");
        sonidoBalon.play();
        contadorBalones.textContent = parseInt(contadorBalones.textContent) + 1;
    });
});

manzanas.forEach(manzana => {
    manzana.addEventListener('click', () => {
        manzana.style.filter = "grayscale(100%)";
        manzana.classList.add("saltar");
        caidaSound.play();
        contadorManzanas.textContent = parseInt(contadorManzanas.textContent) + 1;
    });
});

const guardias = document.querySelectorAll('.guardias');
const galletas = document.querySelectorAll('.galletas');
const contadorSquid = document.querySelector('.contadorSquid');
const contadorF = document.querySelector('.contadorF');
const munecaSound= document.querySelector('.green');
const muneca = document.querySelector('.muneca');
const disparos = document.querySelector('.disparos');
const comer = document.querySelector('.comer');

muneca.addEventListener('click', () => {
    munecaSound.play();
});

guardias.forEach(guardia => {
    guardia.addEventListener('click', () => {
        guardia.style.filter = "contrast(700%)";
        guardia.classList.add("saltar");
        disparos.play();
        contadorSquid.textContent = parseInt(contadorSquid.textContent) + 1;
    });
});

galletas.forEach(galleta => {
    galleta.addEventListener('click', () => {
        galleta.style.animation = "salto 2s ease forwards";
        galleta.classList.add("saltar");
        comer.play();
        contadorF.textContent = parseInt(contadorF.textContent) + 1;
    });
});

const escenas = document.querySelectorAll('.escena');
const siguienteBtn = document.querySelector('.siguiente');
const anteriorBtn = document.querySelector('.anterior');
const miniaturas = document.querySelectorAll('.miniatura');

function mostrarEscenas(i) {
for (let j = 0; j < escenas.length; j++) {
    escenas[j].classList.remove('activa');

}
 escenas[i].classList.add('activa');

    indice = i;

}
mostrarEscenas(0);

anteriorBtn.addEventListener('click', () => {
    indice = indice - 1;
    if (indice < 0) {
        indice = escenas.length - 1;
    }
    mostrarEscenas(indice);
});

siguienteBtn.addEventListener('click', () => {
    indice = indice + 1;
    if (indice >= escenas.length) {
        indice = 0;
    }
    mostrarEscenas(indice);
});

miniaturas.forEach((miniatura, i) => {
    miniatura.addEventListener('click', () => {
        mostrarEscenas(i);
    });
});


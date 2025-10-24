
const moneda1 = document.querySelector('.moneda1');
const moneda2 = document.querySelector('.moneda2');
const moneda3 = document.querySelector('.moneda3');
const contador = document.querySelector('.contador');
const enemigos = document.querySelector('.enemigos');
const enemigo1 = document.querySelector('.enemigo');
const enemigo2 = document.querySelector('.enemigo2');
const enemigo3 = document.querySelector('.enemigo3');
const vidas = document.querySelector('.vidas');

moneda1.addEventListener('click', () => {
 moneda1.style.display = 'none';
 contador.textContent = parseInt(contador.textContent) + 1;
    console.log('click en moneda 1');
});
moneda2.addEventListener('click', () => {
 moneda2.style.display = 'none';
 contador.textContent = parseInt(contador.textContent) + 1;
    console.log('click en moneda 2');
});

moneda3.addEventListener('click', () => {
 moneda3.style.display = 'none';
 contador.textContent = parseInt(contador.textContent) + 1;
    console.log('click en moneda 3');
});

enemigo1.addEventListener('click', () => {
 enemigo1.style.display = 'none';
 vidas.textContent = parseInt(vidas.textContent) + 1;
    console.log('click en enemigo 1');
});

enemigo2.addEventListener('click', () => {
 enemigo2.style.display = 'none';
 vidas.textContent = parseInt(vidas.textContent) + 1;
    console.log('click en enemigo 2');
});

enemigo3.addEventListener('click', () => {
 enemigo3.style.display = 'none';
 vidas.textContent = parseInt(vidas.textContent) + 1;
    console.log('click en enemigo 3');
});


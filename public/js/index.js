let main = document.querySelector('main');
let a = document.querySelector('a');
let h2 = document.querySelector('h2');
let p = document.querySelectorAll('p');
let body = document.querySelector('body');

let nombre = prompt('Ingrese su nombre');


if (nombre) {
    h2.innerHTML += nombre;
} else {
    h2.innerHTML += 'Invitado';
}

h2.style.textTransform = 'uppercase';

a.style.color = '#E51B3E'

let fondo = confirm('¿Desea colocar un fondo de pantalla?');

if (fondo) {
    body.classList.add('fondo');
}

p.forEach((parrafo, i) => {
    i % 2 === 0 ? parrafo.classList.add('destacadoPar') : parrafo.classList.add('destacadoImpar');
})

main.style.display = 'block';
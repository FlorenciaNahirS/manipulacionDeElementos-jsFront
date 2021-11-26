let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let li = document.querySelectorAll('a')

let dark = confirm('¿Desea modo oscuro?')

/*if(dark){
    body.style.backgroundColor = '#7f7f7f';
    body.classList.add('fondoMoviesList')
}*/

 
if(dark){
    body.style.backgroundColor = '#fff';
    body.style.backgroundColor = '#7f7f7f';
    h1.style.color = '#7f7f7f';
    body.classList.add('fondoMoviesList');
    for (let i = 0; i < li.length; i++) {
        li[i].style.color = '#fff'        
    }
}

h1.innerText = 'LISTADO DE PELÍCULAS';
h1.style.color = 'white';
h1.style.backgroundColor = 'teal';
h1.style.padding = '20px'
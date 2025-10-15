
// Función para manejar el parpadeo y cambio de tamaño suave del botón
function parpadearBoton(boton) {
    setInterval(() => {
        // Cambia el tamaño del botón con una transición suave
        boton.style.transition = 'transform 0.5s ease-in-out';

        // Alterna entre escala 1 y 1.2
        boton.style.transform = boton.style.transform === 'scale(1)' ? 'scale(1.2)' : 'scale(1)';
    }, 1000); // Cambiado a 1000ms (1 segundo) para una mejor experiencia visual
}

// Función principal que se ejecuta cuando el DOM está completamente cargado
function main() {
    const boton = document.getElementById('parpadeante');

    if (boton) {
        // Llama a la función de parpadeo si el botón existe
        parpadearBoton(boton);
    } else {
        console.error('El botón con el ID "parpadeante" no fue encontrado.');
    }
}

// Vincula la función principal al evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', main);

/* boton */

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('parpadeante');

    button.addEventListener('click', function () {
        // Redirige a menu.html cuando el botón es clicado
        window.location.href = 'menus.html';
    });

});


function realizarBusqueda() {
    // Aquí debes agregar la lógica para realizar la búsqueda
    // Puedes usar el valor del input para buscar
    var busqueda = document.getElementById("search").querySelector("input").value;
    alert("Realizando búsqueda: " + busqueda);
}


var backgrounds = [
    "images/fundacionFondo.jpeg",
    "images/InvasionFondo.jpeg",
    "images/SpiderFondo.jpeg",
    "images/skywalkerFondo.png",
    "images/warcraftFondo.jpeg"
];

var section1 = document.getElementById("section1");
var currentIndex = 0;

function changeBackground() {
    // Elige la imagen de fondo actual del array
    var currentBackground = backgrounds[currentIndex];

    // Cambia el fondo de #section1
    section1.style.backgroundImage = "url('" + currentBackground + "')";
    section1.style.backgroundSize = "cover"; // Puedes ajustar a 'contain' u otros valores
    section1.style.backgroundRepeat = "no-repeat";
    section1.style.backgroundPosition = "center center";

    // Incrementa el índice para la próxima imagen
    currentIndex = (currentIndex + 1) % backgrounds.length;
}

// Llama a la función inicialmente y luego cada 3000 milisegundos (3 segundos)
changeBackground(); // Llama inicialmente para tener un fondo desde el principio
setInterval(changeBackground, 3000); // Cambia cada 3 segundos (ajusta el tiempo según sea necesario)

function redirectToPage(buttonId, pageUrl) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', function () {
        // Redirige a la página correspondiente cuando se hace clic en el botón
        window.location.href = pageUrl;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    redirectToPage('s1', 'peliculasHTML/starwars.html');
    redirectToPage('s2', 'peliculasHTML/avatar.html');
    redirectToPage('s3', 'peliculasHTML/rebelmoon.html');
    redirectToPage('s4', 'peliculasHTML/lovemonster.html');
    redirectToPage('s5', 'peliculasHTML/5thwave.html');
    redirectToPage('s6', 'peliculasHTML/invasion.html');
    redirectToPage('s7', 'peliculasHTML/fundation.html');
    redirectToPage('s8', 'peliculasHTML/mandalorian.html');
    redirectToPage('s9', 'peliculasHTML/the100.html');
    redirectToPage('s10', 'peliculasHTML/monarch.html');
    redirectToPage('s11', 'peliculasHTML/jurasicWorld.html');
    redirectToPage('s12', 'peliculasHTML/dune.html');
    redirectToPage('s13', 'peliculasHTML/hungerGames.html');
    redirectToPage('s14', 'peliculasHTML/endersGame.html');
    redirectToPage('s15', 'peliculasHTML/mazeRunner.html');
});

/* mostrar solo peliculas */

function mostrarSoloPeliculas() {
    // Cambiar el texto de los elementos que dicen "Series" y "Últimas publicaciones"
    document.querySelector('.series').innerText = '';
    document.querySelector('.ultimasP').innerText = '';

    var backgrounds = [
        'url("images/bladeRunnerFondo.jpeg")',
        'url("images/proyectoAdamFondo.jpeg")',
        'url("images/thecreatorFondo.webp")',
        'url("images/oblivionFondo.jpeg")',
        'url("images/warcraftFondo2.jpeg")'
    ];

    var squares = document.querySelectorAll('.square');
    for (var i = 5; i < 10; i++) {
        squares[i].style.backgroundImage = backgrounds[i - 5];
    }

    // Cambiar las redirecciones de los botones
    redirectToPage('s6', 'peliculasHTML/bladerunner.html');
    redirectToPage('s7', 'peliculasHTML/adamproject.html');
    redirectToPage('s8', 'peliculasHTML/thecreator.html');
    redirectToPage('s9', 'peliculasHTML/oblivion.html');
    redirectToPage('s10', 'peliculasHTML/warcraft.html');
}

function restaurarRedireccionesInicio() {
    // Restaurar las redirecciones originales de los botones
    redirectToPage('s6', 'peliculasHTML/invasion.html');
    redirectToPage('s7', 'peliculasHTML/fundation.html');
    redirectToPage('s8', 'peliculasHTML/mandalorian.html');
    redirectToPage('s9', 'peliculasHTML/the100.html');
    redirectToPage('s10', 'peliculasHTML/monarch.html');
}

document.addEventListener('DOMContentLoaded', function () {
    redirectToPage('s1', 'peliculasHTML/starwars.html');
    redirectToPage('s2', 'peliculasHTML/avatar.html');
    redirectToPage('s3', 'peliculasHTML/rebelmoon.html');
    redirectToPage('s4', 'peliculasHTML/lovemonster.html');
    redirectToPage('s5', 'peliculasHTML/5thwave.html');
    redirectToPage('s6', 'peliculasHTML/invasion.html');
    redirectToPage('s7', 'peliculasHTML/fundation.html');
    redirectToPage('s8', 'peliculasHTML/mandalorian.html');
    redirectToPage('s9', 'peliculasHTML/the100.html');
    redirectToPage('s10', 'peliculasHTML/monarch.html');
    redirectToPage('s11', 'peliculasHTML/jurasicWorld.html');
    redirectToPage('s12', 'peliculasHTML/dune.html');
    redirectToPage('s13', 'peliculasHTML/hungerGames.html');
    redirectToPage('s14', 'peliculasHTML/endersGame.html');
    redirectToPage('s15', 'peliculasHTML/mazeRunner.html');
});

/* Mostrar series */

function mostrarSoloSeries() {
    // Cambiar el texto de los elementos que dicen "Series" y "Últimas publicaciones"
    document.querySelector('.peliculas').innerText = 'Series';
    document.querySelector('.series').innerText = '';
    document.querySelector('.ultimasP').innerText = '';
    

    var backgrounds = [
        'url("images/haloFondo.png")',
        'url("images/twdFondo.jpeg")',
        'url("images/elavatarFondo.jpeg")',
        'url("images/obiwanFondo.jpeg")',
        'url("images/thelasofusFondo.jpeg")',

        'url("images/raisedbywolfFondo.jpeg")',
        'url("images/thepowerringFondo.jpeg")',
        'url("images/thewheeloftimeFondo.jpeg")',
        'url("images/gameofthroneFondo.jpeg")',
        'url("images/houseofdragonFondo.jpeg")'
        
    ];

    var squares = document.querySelectorAll('.square');

    // Cambiar el fondo de los elementos del 1 al 5 y del 11 al 15
    for (var i = 0; i < 5; i++) {
        squares[i].style.backgroundImage = backgrounds[i];
    }

    for (var i = 10; i < 15; i++) {
        squares[i].style.backgroundImage = backgrounds[i - 5];
    }
}


  


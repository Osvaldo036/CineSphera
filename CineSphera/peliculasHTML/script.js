// Función para mostrar la ventana emergente de comentarios
function mostrarVentanaEmergente() {
    // Mostrar la ventana emergente
    document.getElementById('comment-popup').style.display = 'block';
}

// Función para agregar un comentario
function agregarComentario() {
    // Obtener el texto del comentario ingresado por el usuario
    var comentario = document.getElementById('comment-text').value;

    // Crear un elemento de párrafo para mostrar el comentario
    var nuevoComentario = document.createElement('p');
    nuevoComentario.textContent = comentario;

    // Obtener el contenedor de comentarios
    var comentariosContainer = document.getElementById('comments-container');

    // Vaciar el contenedor de comentarios antes de agregar el nuevo comentario
    comentariosContainer.innerHTML = '';

    // Agregar el nuevo comentario al contenedor de comentarios
    comentariosContainer.appendChild(nuevoComentario);

    // Limpiar el campo de texto después de agregar el comentario
    document.getElementById('comment-text').value = '';

    // Ocultar la ventana emergente
    document.getElementById('comment-popup').style.display = 'none';
}

// Event listener para el botón "Agregar comentario"
document.getElementById('open-comment-popup').addEventListener('click', mostrarVentanaEmergente);

// Event listener para el botón "Enviar" dentro de la ventana emergente
document.getElementById('submit-comment').addEventListener('click', agregarComentario);

document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
  
    stars.forEach(function(star) {
      star.addEventListener("click", function() {
        const value = parseInt(star.getAttribute("data-value"));
        alert("Has valorado la película con " + value + " estrellas.");
        resetStars();
        highlightStars(value);
      });
  
      star.addEventListener("mouseover", function() {
        const value = parseInt(star.getAttribute("data-value"));
        highlightStars(value);
      });
  
      star.addEventListener("mouseleave", function() {
        resetStars();
      });
    });
  
    function resetStars() {
      stars.forEach(function(star) {
        star.classList.remove("active");
      });
    }
  
    function highlightStars(value) {
      stars.forEach(function(star, index) {
        if (index < value) {
          star.classList.add("active");
        }
      });
    }
  });
  

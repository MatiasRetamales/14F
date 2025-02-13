document.getElementById("surprise-btn").addEventListener("click", function() {
  const heart = document.getElementById("corazon");

  // Primero, asegúrate de que el corazón está completamente oculto
  heart.classList.add("hidden");

  // Espera un pequeño tiempo antes de mostrarlo nuevamente, para garantizar que la animación anterior haya terminado
  setTimeout(function() {
    // Mostrar el corazón
    heart.classList.remove("hidden");

    // Asegurarnos de que el corazón aparezca dentro de los límites de la pantalla
    const heartSize = 300; // Tamaño del corazón
    const maxWidth = window.innerWidth - heartSize; // Restamos el tamaño del corazón para que no se salga por la derecha
    const maxHeight = window.innerHeight - heartSize; // Restamos el tamaño del corazón para que no se salga por abajo

    heart.style.left = `${Math.random() * maxWidth}px`;
    heart.style.top = `${Math.random() * maxHeight}px`;

    // El corazón desaparece después de 10 segundos (ajusta este tiempo si lo prefieres)
    setTimeout(function() {
      heart.classList.add("hidden");
    }, 10000); // El corazón se oculta después de 10 segundos
  }, 200); // Espera 200ms antes de mostrar el corazón nuevamente para garantizar que se oculta bien
});

document.querySelectorAll('.nb').forEach(boton => {
  boton.setAttribute('title', 'Copiar código en portapapeles');
});

function copiar(identificador) {
  //alert(identificador);
  const contenido = document.getElementById(identificador).textContent;

  navigator.clipboard.writeText(contenido).then(() => {
    //alert(`¡Código HTML en el portapapeles! Ctrl-V para pegar el código en tu archivo.`);
    mostrarMensaje();
  }).catch(err => {
    console.error("Error al copiar: en el portapapeles:", err);
  });
}

function mostrarMensaje() {
  const mensaje = document.getElementById('mensaje');
  mensaje.style.display = 'block'; // Mostramos el mensaje
  setTimeout(() => {
    mensaje.style.display = 'none'; // Ocultamos el mensaje después de 2 segundos
  }, 2000); // Temporizador de 2 segundos
}

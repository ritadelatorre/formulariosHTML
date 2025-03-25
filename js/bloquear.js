// Bloquear la tecla "Ctrl + C":
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'c') { // Detecta Ctrl + C
      event.preventDefault();
      alert('¡La copia está deshabilitada en este sitio web!');
  }
});

// Deshabilitar clic derecho
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});
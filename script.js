// Validación del formulario
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let nombre = document.getElementById('nombre');
  let correo = document.getElementById('correo');
  let mensaje = document.getElementById('mensaje');
  let valido = true;

  if (!nombre.value.trim()) {
    nombre.classList.add('is-invalid');
    valido = false;
  } else {
    nombre.classList.remove('is-invalid');
  }

  if (!correo.value.includes('@')) {
    correo.classList.add('is-invalid');
    valido = false;
  } else {
    correo.classList.remove('is-invalid');
  }

  if (!mensaje.value.trim()) {
    mensaje.classList.add('is-invalid');
    valido = false;
  } else {
    mensaje.classList.remove('is-invalid');
  }

  if (valido) {
    alert('Formulario enviado correctamente');
    this.reset();
  }
});

// Botón de alerta
document.getElementById('alertButton').addEventListener('click', function () {
  alert('¡Gracias por visitar nuestra página!');
});

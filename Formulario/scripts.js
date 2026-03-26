const formulario = document.getElementById('formulario');
const display = document.getElementById('resultado');

// GUARDAR: Agrupamos todo en un objeto
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const usuario = {
    nombre: document.getElementById('nombre').value,
    id: document.getElementById('identificacion').value,
    email: document.getElementById('correo').value
  };

  // Convertimos el objeto a texto para guardarlo
  localStorage.setItem('datosUsuario', JSON.stringify(usuario));
  
  alert('Datos de ' + usuario.nombre + ' guardados.');
  formulario.reset();
});

// VER: Recuperamos y convertimos de nuevo a objeto
document.getElementById('btnVer').addEventListener('click', () => {
  const datosJson = localStorage.getItem('datosUsuario');

  if (datosJson) {
    const datos = JSON.parse(datosJson); // Convertimos el texto a objeto
    display.innerHTML = `
      <p><strong>Nombre:</strong> ${datos.nombre}</p>
      <p><strong>ID:</strong> ${datos.id}</p>
      <p><strong>Email:</strong> ${datos.email}</p>
    `;
  } else {
    display.textContent = "No hay registros.";
  }
});

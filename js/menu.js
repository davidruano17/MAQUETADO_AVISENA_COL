function mostrarSeccion(id) {
      const secciones = document.querySelectorAll('main section');
      secciones.forEach(sec => sec.classList.remove('visible'));
      document.getElementById(id).classList.add('visible');
    }


    document.getElementById('cerrar-sesion').addEventListener('click', () => {
      window.location.href = "index.html"; 
    });
document.getElementById('botonLogin').addEventListener('click', () => {
      const usuario = document.getElementById('usuario').value;
      const pass = document.getElementById('password').value;

      // Validación simulada
      if (usuario === "admin" && pass === "1111") {
        window.location.href = "instuctor_lider.html"; // Redirección correcta
      }
      if (usuario === "aprendiz" && pass === "2222") {
        window.location.href = "aprendiz.html";
      }
      if (usuario === "investigador" && pass === "3333") {
        window.location.href = "investigador.html";
      }
            
      else {
        alert("acepto los terminos y condiciones");
      }
    });
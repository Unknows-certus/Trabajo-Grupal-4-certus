/*Evidencia numero 3
    Autor: Abel Atrews Noa Condemayta
    Fecha: 1/05/2024
    Descripcion: Contactanos*/

//alert("Bienvenidos a CONTACTAME - Mr.");

// promesa
var saludar = new Promise((resolve, reject) => {
  setTimeout(() => {
    let saludo = "Bienvenido a mi avanze con NOA con JS";
    // saludo = false; (alert)--> para invertir (eliminar)
    // saludo = false;

    if (saludo) {
      resolve(saludo);
    } else {
      reject(`Dile hasta luego al avanze de NOA con JS`);
    }
  }, 1500);
});

saludar
  .then((resultado) => {
    alert(resultado);
  })
  .catch((err) => {
    alert(err); //(error) & saludo = false; --> invertir
  });

//revisando funcionalidades
/*
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que se envíe el formulario por defecto

  // Obtener los valores de los campos del formulario
  const nombre = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const mensaje = document.querySelector("textarea").value;

  // Validar que los campos no estén vacíos
  if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
    alert("Por favor completa todos los campos del formulario.");
    return;
  }

  // Validar el formato del correo electrónico utilizando una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor ingresa un correo electrónico válido.");
    return;
  }

  // Si todos los campos están completos y el correo electrónico es válido, puedes enviar el mensaje
  enviarMensaje(nombre, email, mensaje);
});

function enviarMensaje(nombre, email, mensaje) {
  // Aquí puedes implementar el envío del mensaje utilizando AJAX
  // Por ejemplo, puedes utilizar la API Fetch para enviar los datos al servidor
  fetch("url_del_servidor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, mensaje }),
  })
    .then((response) => {
      if (response.ok) {
        // Mostrar mensaje de confirmación
        alert("¡Mensaje enviado con éxito!");
        // Limpiar los campos del formulario
        document.querySelector("form").reset();
      } else {
        throw new Error("Ha ocurrido un error al enviar el mensaje.");
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}
*/

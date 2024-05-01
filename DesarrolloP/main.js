//alertas
// alert("Bienvenido a mi js.");

//varianble
let nombre = "Noa Condemayta abel Atrews";
nombre = "Abel Atrews";

//mostrar por consola
console.log(nombre);

//constantes
const apellido = "Noa Condemayta";
const altura = 169;

//contatenacion

let contatenacion = nombre + " " + apellido;

//seleccionar elementos de la pagina

let datos = document.querySelector("#datos");
datos.innerHTML = `
<hr/>
<h1>Soy tu caja de datos</h1>
<h2>Mi nombre es : ${contatenacion}</h2>
<h3>Mido : ${altura}</h3>
`;

//condiciones
if (altura <= 168) {
  datos.innerHTML += "<h1>Eres una persona de estatura alta</h1>";
} else {
  datos.innerHTML += "<h1>Eres una persona de estatura baja</h1>";
}

//bucles
for (let year = 2022; year <= 2024; year++) {
  datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`;
}
//arrays
let nombres = ["alanis", "susana", "zoe"];
let divNombres = document.querySelector("#nombres");

// divNombres.innerHTML = nombres[0];
// divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>";
nombres.forEach((nombre) => {
  divNombres.innerHTML += "<li>" + nombre + "</li>";
});

/*for (let nombre of nombres) {
  divNombres.innerHTML += "<li>" + nombres + "</li>";
}*/

divNombres.innerHTML += "</ul>";

// funciones
const miInformacion = (nombre, altura) => {
  let misDatos = `
  <h1>Soy una caja de datos</h1>
  <h2>mi nombre es: ${nombre}</h2>
  <h3>mido: ${altura}</h3>`;

  return misDatos;
};

// console.log(miInformacion("abel noa", 169));

const imprimir = () => {
  let datos = document.querySelector("#datos");
  datos.innerHTML = miInformacion("abel noa", 187);
  // datos.innerHTML += miInformacion("abel noa", 187); !OJO! (Eliminar el ´e invertir con el que esta arriba)
};

imprimir();

var coche = {
  modelo: `Mercedes Clase A`,
  maxima: 500,
  antiguedad: 2021,
  mostrarDatos() {
    console.log(this.modelo, this.maxima, this.antiguedad);
  },
  propiedad1: "valor aleatorio",
};

//document.write("<h1>" + coche.antiguedad + "</h1>");
coche.mostrarDatos();
console.log(coche);

// promesa
var saludar = new Promise((resolve, reject) => {
  setTimeout(() => {
    let saludo = "Saludando a jacob en JS";
    // saludo = false; (alert)--> invertir (eliminar)
    saludo = false;

    if (saludo) {
      resolve(saludo);
    } else {
      reject(`Sin saludar a jacob en JS`);
    }
  }, 2000);
});

saludar
  .then((resultado) => {
    alert(resultado);
  })
  .catch((err) => {
    alert(err); //(error) & saludo = false; --> invertir
  });

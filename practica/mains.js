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
for (let year = 2020; year <= 2024; year++) {
  datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`;
}
//arrays
let nombres = ["alanis", "liliana", "gimena"];
let divNombres = document.querySelector("nomnres");

divNombres.innerHTML = nombres[0];
// divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>";
/*nombres.forEach((nombre) => {
  divNombres.innerHTML += "<li>" + nombre + "</li>";
});*/

/*for (let nombre of nombres) {
  divNombres.innerHTML += "<li>" + nombre + "</li>";
}
divNombres.innerHTML += "</ul>";
*/
// funciones

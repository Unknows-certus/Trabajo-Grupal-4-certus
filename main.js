//alertas
alert(Bienvenido a mi web);

//varianble
let nombre = "Noa Condemayta abel";
nombre = "Abel";

//mostrar por consola
console.log(nombre);

//constantes
const apellido = "Noa";
const altura = 187;

//mostrar por consola
console.log(nombre);
console.log(apellido);

//contatenacion

let contatenacion = nombre + " " apellido;

//seleccionar elementos de la pagina

let datos = document.querySelector("#datos");
datos.innerHTML = `
<hr/>
<h1>soy la caja de datos</h1>
<h2>Mi nombre es : ${contatenacion}</h2>
<h3>Mido : ${altura}</h3>
`;

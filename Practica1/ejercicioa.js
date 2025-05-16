/*Corrige el siguiente código para que siga las buenas prácticas de JavaScript
moderno (usa let y const en lugar de var) y asegúrate de que las variables no se
puedan reasignar si no es necesario.*/
let nombre = "Juan";
const edad = 25;

nombre = "Ana Maria";

const Saludo = "Hola, soy " + nombre + ". Tienes  " + edad + " años.";

console.log(Saludo);
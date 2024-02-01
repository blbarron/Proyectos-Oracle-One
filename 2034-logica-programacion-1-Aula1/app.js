/*practica 18.01.2024
01. Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
02. Declara una variable llamada nombre y asígnale el valor "Luna".
03. Crea una variable llamada edady asígnale el valor 25.
04. Establece una variable numeroDeVentas y asígnale el valor 50.
05. Establece una variable saldoDisponible y asígnale el valor 1000.
06. Muestra una alerta con el texto "¡Error! Completa todos los campos".
07. Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". 
    Ahora muestra una alerta con el valor de la variable mensajeDeError .
08. Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
09. Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
10. Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje 
    "¡Puedes obtener tu licencia de conducir!".

alert("Bienvenida y bienvenido a nuestro sitio web");
let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

let mensajeDeError = "Error! Completa los campos";
alert(mensajeDeError);

let nombre = prompt("Nombre de usuario");
console.log(nombre);
let edad = prompt("Ingresa tu edad");
console.log(edad);


if (edad >= 18) {
    alert("Puedes obtener tu licencia de conducir!");
}
*/

/*codigo del primer ejercicio*/
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un n�mero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el n�mero');
}
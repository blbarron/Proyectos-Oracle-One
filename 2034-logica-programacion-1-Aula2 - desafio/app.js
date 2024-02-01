/*desafío
*/

//1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
/*
let diaSemana = prompt("Que día de la semana es?");
console.log(diaSemana);

if (diaSemana === "Sabado" || diaSemana === "Domingo" ) {
    alert("Buen fin de semana");
} else{
    alert("Buena semana");
}
*/
//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
/* let numeroIngresado = prompt("Agrega un número");
console.log(numeroIngresado);

if (numeroIngresado <0){
    alert("El número ingresado es negativo");
}else{
    alert("El número ingresado es positivo");
}

el instructor agreso un else if y un else para indicar cuando es cero el numero que ingresan
así quedó el codigo del instructor
let numero = prompt('Escribe un número positivo o negativo');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}
*/

//3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
/*
let numeroPuntuacion = prompt("Ingresa un número de puntuación");

if (numeroPuntuacion >= 100){
    alert("Felicidades has ganado");
}else{
    alert("intenta nuevamente ganar");
}
*/

//4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
//utilizando un template string para incluir el valor del saldo.
//este codigo no me salio-------
/*
let saldoCuenta = prompt("Indica saldo de su cuenta");
console.log(saldoCuenta);
saldoCuenta = parseFloat(saldoCuenta);

alert(`Tu saldo en la cuenta es `+ ${saldoCuenta});

----el instructor puso
let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo es de $${saldoCuenta}.`);

*/
/*
//5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombreUsuario = prompt("Ingresa tu nombre");

alert("bienvenid@ "+nombreUsuario);
*/

// este es el codigo que usaron para explicar en el video***************************
//Variables
let numeroSecreto = 2;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}

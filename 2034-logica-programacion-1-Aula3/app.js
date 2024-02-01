/* desafío
---------no supe como hacerlos, no le entendí a los desafios y no corre el programa

//1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;
while (contador <= 10) {
console.log(contador);
contador++;
}
//2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador = 10;
while (contador >= 0) {
console.log(contador);
contador--;
}
//3. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}

//4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");
let contador = 0;

while (contador <= numeroMaximo) {
console.log(contador);
contador++;
}
*/
// ------------ejemplo operador and &&
let idad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (idad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}

//------------eje operador or
// si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
    console.log("Tienes frutas!");
  } else {
    console.log("No tienes frutas.");
  }

  
/*ejercicio
let contador = 1;

while (contador < 4) {
  console.log('Ejecutando la iteración ' + contador);
  contador = contador + 1;
}
*/



// codigo del video*********************************
/*
//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
*/
/* desafío
//01. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
//let mensajeBienvenida = prompt("Cual es tu mensaje de bienvenida");
//alert(mensajeBienvenida);
console.log('hola');

//02. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Blanca";
console.log(`Bienvenida ${nombre}`);

//03. Crea una variable llamada "nombre" y asígnale tu nombre. 
//Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

let nombre = "Blanca";
alert(`¡Hola, ${nombre}!`);

//04. Utiliza prompt y haz la siguiente pregunta: 
//¿Cuál es el lenguaje de programación que más te gusta?. 
//Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguaje);

//05. Crea una variable llamada "valor1" y otra llamada "valor2", 
//asignándoles valores numéricos de tu elección. 
//Luego, realiza la suma de estos dos valores y 
//almacena el resultado en una tercera variable llamada "resultado". 
//Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]."
// en la consola.
let valor1 = 1;
let valor2 = 2;
let resultado = valor1 + valor2;
console.log(`el resultado es ${resultado}`);

//06. Crea una variable llamada "valor1" y otra llamada "valor2", 
//asignándoles valores numéricos de tu elección. 
//Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada
// "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] 
//es igual a [resultado]." en la consola.
let valor1 = 1;
let valor2 = 2;
let resultado = valor1 - valor2;
console.log(`el resultado es ${resultado}`);

//07. Pide al usuario que ingrese su edad con prompt. 
//Con base en la edad ingresada, utiliza un if para verificar si la persona 
//es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt("cual es tu edad");
if (edad > 18){
    alert("Es mayor de edad");
}else {
    alert("Es menor de edad");
}

//08. Crea una variable "numero" y solicita un valor con prompt. 
//Luego, verifica si es positivo, negativo o cero utilizando un if-else y 
//muestra el mensaje correspondiente.
let numero = prompt("VAlor del numero");
if (numero >0){
    alert("Elnumero es positivo");
}else {
    alert("el numero es negativo");
}

//09. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let numero = 1;
while (numero < 11){
    console.log(numero);
    numero++;
}

//10. Crea una variable "nota" y asígnale un valor numérico. 
//Utiliza un if-else para determinar si la nota es mayor o igual a 7 y 
//muestra "Aprobado" o "Reprobado" en la consola.
let nota = 10;
if (nota >= 7){
    console.log("aprobado");
}else{
    console.log("Reprobado");
}

//11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numero = Math.random();
console.log(numero);

//12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numero = parseInt(Math.floor(Math.random()*10)+1);
console.log(numero);

//13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numero = parseInt(Math.floor(Math.random()*1000)+1);
console.log(numero);
*/
/* codigo del video************************
//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
*/
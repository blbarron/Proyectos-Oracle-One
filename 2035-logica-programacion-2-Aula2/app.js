/*desafio

//01. Crear una función que muestre "¡Hola, mundo!" en la consola.
function mostrarHola(){
    console.log("Hola mundo");
}

mostrarHola();
//02. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
  }
  
  mostrarHolaNombre("Blanca");

//03. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
//------------no le entendí muy bien
function mostrarNumero(numero){
    return(numero*2);
    
}
let resultado = mostrarNumero(3);
console.log(resultado);

//04. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioNumeros(numero1, numero2, numero3){
     return((numero1+numero2+numero3)/3);
}
let resultado = promedioNumeros(6,6,6);
console.log(resultado);

//05. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(a,b){
    return a>b ? a:b;
}
let resultado = numeroMayor(10,2);
console.log(resultado);

//06. Crear una función que reciba un número como parámetro y 
//devuelva el resultado de multiplicar ese número por sí mismo.
function numeroMultiplicado(a){
    return a*a;
}
let resultado = numeroMultiplicado(6);
console.log(resultado);
*/

/*
*************codigo el video
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);
*/
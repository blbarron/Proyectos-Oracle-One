/*------------------- desafío
//01. Crea una función que calcule el índice de masa corporal (IMC) 
//de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

//primero declarar la funcion y el calculo dentro de ella y retornar el valor
function masaCorporal(metros, kilos){
    let imc = kilos / (metros * kilos);
    return imc; 
}
//crear las variables de los parametros dentro de la funcion
let kilos = 67;
let metros = 1.6;
//crear la variable del resultado llamando a la funcion con los parametros utilizados
let resultadoIMC = masaCorporal(metros,kilos);
//mostrar en consola el resultado
console.log(`La masa corporal es ${resultadoIMC}`);

//02. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
//--------copie del codigo del instructor y lo desglose con chatgpt porque no me salio
function calcularFactorial(numero) {
//Este es el caso base de la recursión. Si numero es 0 o 1, el factorial es 1, y la función devuelve 1.
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
//significa que el factorial de numero es igual a numero multiplicado por el factorial del número anterior 
//(numero - 1), y esto se hace de manera recursiva hasta llegar al caso base.
      return numero * calcularFactorial(numero - 1);
    }
  }
  // se declara la variable
  let numero = 5;
  //se declara variable llamando a la funcion con el parametro
  let resultado = calcularFactorial(numero);
  //Se imprime en la consola el resultado del cálculo del factorial utilizando una plantilla de cadena 
  //para mostrar el valor de numero y resultado.
  console.log(`El factorial de ${numero} es ${resultado}`);

//03. Crea una función que convierta un valor en dólares, pasado como parámetro, 
//y devuelva el valor equivalente en reales(moneda brasileña,
//si deseas puedes hacerlo con el valor del dólar en tu país). 
//Para esto, considera la cotización del dólar igual a R$4,80.
function convertidorDeDolares(dolar){
    let moneda = 4.8;
    let conversion = dolar * moneda;
    return conversion;
}
let valordolar = 20;
let resultado = convertidorDeDolares(valordolar);
console.log(`La conversión de ${valordolar} dolares es de ${resultado} pesos`);

//04. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
//utilizando la altura y la anchura que se proporcionarán como parámetros.
//el codigo del instructor no sirvio, no muestra nada....este es mi codigo
function area(altura, anchura){
    let resultadoArea = altura / anchura;
    return resultadoArea;    
}
function perimetro(altura, anchura){
    let resultadoPerimetro = altura * anchura;
    return resultadoPerimetro;
}
let altura = 3;
let anchura = 3;
let ra = area(altura,anchura);
let rp = perimetro(altura,anchura);
console.log(`El resultado del área es ${ra} y del perimetro es ${rp}`);

//05. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function area(radio){
    let resultadoArea = (pi*radio)*(pi*radio);
    return resultadoArea;    
}
function perimetro(diametro){
    let resultadoPerimetro = pi * diametro;
    return resultadoPerimetro;
}
let pi = 3.14;
let radio = 6;
let diametro = 6;
let ra = area(radio);
let rp = perimetro(diametro);
console.log(`El resultado del área es ${ra} y del perimetro es ${rp}`);

//06. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numero){
    // Verificar que el número sea un entero positivo
    if (Number.isInteger(numero) && numero > 0) {
    // Imprimir un encabezado indicando la tabla de multiplicar del numero que utilizaremos
        console.log(`Tabla de multiplicar del ${numero}:`);
    // Usar un bucle 'for' para iterar de 1 a 10
        for (let i = 1; i <= 10; i++) {
    // Calcula el resultado y lo integra a la variable
            let resultado = numero * i;
    // Muestra el resultado de la multiplicación linea por linea hasta llegar al limite marcado en el ciclo
            console.log(`${numero} x ${i} = ${resultado}`);
        }
    } else {
    // si no, muestra mensaje donde solicita un numero positivo como parametro
        console.log("Por favor, proporciona un número entero positivo como parámetro.");
    }

}
// llamado de la funcion y entre parentesis el numero que vamos a usar
tablaMultiplicar(-1);
*/

/*----------------------- codigo del video de oracle
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
*/
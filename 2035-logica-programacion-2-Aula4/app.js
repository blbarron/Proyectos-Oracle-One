/* desafio
//01. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//02. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes
// elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
const lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
console.log('Lenguajes de programación ',lenguajesDeProgramacion);

//03. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
const lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
console.log('Lenguajes de programación ',lenguajesDeProgramacion);
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log('Lenguajes de programación ',lenguajesDeProgramacion);

//04. Crea una función que muestre en la consola todos los elementos de la lista 
//"lenguagesDeProgramacion.
const lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
function mostrarLenguajes (){
    console.log('Lenguajes de programación ',lenguajesDeProgramacion);
    return;    
}
mostrarLenguajes();

//05. Crea una función que muestre en la consola todos los elementos de la lista 
//"lenguagesDeProgramacion en orden inverso.
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
function mostrarLenguajesReverso (){
    for(let i = lenguajesDeProgramacion.length-1; i>=0; i--){
       console.log('Lenguajes de programación ',lenguajesDeProgramacion[i]);
    
    }
    return;    
}
mostrarLenguajesReverso();

//06. Crea una función que calcule el promedio de los elementos en una lista de números.
//---copie la del instructor porque no entiendo

/*--------mi codigo del problema 06
let listaNumeros = [5,5,5,5,5];
function promedioNumeros(promedio){
    let suma = 0;
    for(let i = 0; i < listaNumeros.length; i++){
    suma += listaNumeros[i];

    return suma/listaNumeros.length;
    }
}
promedioNumeros();
console.log(promedio);
*/

/*// Declaración de la función calcularMedia
function calcularMedia(lista) {
    // Inicialización de la variable suma
    let suma = 0;
  
    // Bucle for para sumar los elementos de la lista
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
  
    // Cálculo de la media y retorno del resultado
    return suma / lista.length;
  }
  
  // Creación de la lista de números
  let numeros = [5, 5, 5, 5, 5];
  
  // Llamada a la función calcularMedia con la lista de números y 
  //almacenamiento del resultado en la variable media
  let media = calcularMedia(numeros);
  
  // Impresión de la media en la consola
  console.log('Media:', media);

//07. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
//------------use codigo de instructor no entendí como resolverlo
// Declaración de la función encontrarMayorMenor
function encontrarMayorMenor(lista) {
    // Inicialización de las variables mayor y menor con el primer elemento de la lista
    let mayor = lista[0];
    let menor = lista[0];
  
    // Bucle for para recorrer los elementos de la lista
    for (let i = 1; i < lista.length; i++) {
      // Comprobación si el elemento actual es mayor que el valor almacenado en la variable mayor
      if (lista[i] > mayor) {
        mayor = lista[i];  // Si es mayor, actualizar el valor de mayor
      }
  
      // Comprobación si el elemento actual es menor que el valor almacenado en la variable menor
      if (lista[i] < menor) {
        menor = lista[i];  // Si es menor, actualizar el valor de menor
      }
    }
  
    // Impresión en la consola del mayor y menor encontrados
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  // Creación de la lista de números
  let numeros = [15, 8, 25, 5, 12];
  
  // Llamada a la función encontrarMayorMenor con la lista de números
  encontrarMayorMenor(numeros);

//08. Crea una función que devuelva la suma de todos los elementos en una lista.

// Declaración de la función calcularMedia
function calcularSuma(lista) {
    // Inicialización de la variable suma
    let suma = 0;
  
    // Bucle for para sumar los elementos de la lista
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
  
    // Cálculo de la media y retorno del resultado
    return suma;
  }
  
  // Creación de la lista de números
  let numeros = [5, 5, 5, 5, 5];
  // Llamada a la función calcularMedia con la lista de números y 
  //almacenamiento del resultado en la variable media
  let suma = calcularSuma(numeros);
    
  // Impresión de la media en la consola
  console.log('Suma:', suma);

  //09. Crea una función que devuelva la posición en la lista donde se encuentra 
//un elemento pasado como parámetro, o -1 si no existe en la lista.
//--------------no entendi el problema
// Declaración de la función encontrarPosicionElemento
function encontrarPosicionElemento(lista, elemento) {
    // Bucle for para recorrer los elementos de la lista
    for (let i = 0; i < lista.length; i++) {
      // Comprobación si el elemento actual es igual al elemento buscado
      if (lista[i] === elemento) {
        // Si es igual, retorna la posición (índice + 1) en la lista
        return i + 1;
      }
    }
  
    // Si el elemento no se encuentra en la lista, retorna -1
    return -1;
  }
  
  // Creación de la lista de elementos
  let elementos = ['manzana', 'banana', 'pera', 'uva', 'naranja'];
  
  // Llamada a la función encontrarPosicionElemento con un elemento existente en la lista
  let posicionExistente = encontrarPosicionElemento(elementos, 'pera');
  console.log('Posición del elemento existente:', posicionExistente);
  
  // Llamada a la función encontrarPosicionElemento con un elemento no existente en la lista
  let posicionNoExistente = encontrarPosicionElemento(elementos, 'sandía');
  console.log('Posición del elemento no existente:', posicionNoExistente);
//10. Crea una función que reciba dos listas de números del mismo tamaño y
// devuelva una nueva lista con la suma de los elementos uno a uno.
// Declaración de la función sumarListas
function sumarListas(lista1, lista2) {
    // Verificar que ambas listas tengan la misma longitud
    if (lista1.length !== lista2.length) {
      // Si no tienen la misma longitud, lanzar un error
      throw new Error('Las listas deben tener la misma longitud');
    }
  
    // Inicialización de la nueva lista para almacenar la suma de elementos
    let nuevaLista = [];
  
    // Bucle for para recorrer los elementos de las listas
    for (let i = 0; i < lista1.length; i++) {
      // Suma de los elementos de las dos listas
      let sumaElementos = lista1[i] + lista2[i];
  
      // Agregar la suma a la nueva lista
      nuevaLista.push(sumaElementos);
    }
  
    // Retorno de la nueva lista con la suma de elementos
    return nuevaLista;
  }
  
  // Creación de las listas de números
  let listaA = [1, 2, 3, 4, 5];
  let listaB = [5, 4, 3, 2, 1];
  
  // Llamada a la función sumarListas con las dos listas
  let listaSumada = sumarListas(listaA, listaB);
  console.log('Lista Sumada:', listaSumada);

//11. Crea una función que reciba una lista de números y 
//devuelva una nueva lista con el cuadrado de cada número.
// Declaración de la función calcularCuadrados
function calcularCuadrados(lista) {
    // Inicialización de la nueva lista para almacenar los cuadrados
    let listaCuadrados = [];
  
    // Bucle for para recorrer los elementos de la lista
    for (let i = 0; i < lista.length; i++) {
      // Cálculo del cuadrado del elemento actual
      let cuadrado = lista[i] ** 2;
  
      // Agregar el cuadrado a la nueva lista
      listaCuadrados.push(cuadrado);
    }
  
    // Retorno de la nueva lista con los cuadrados
    return listaCuadrados;
  }
  
  // Creación de la lista de números
  let numeros = [2, 4, 6, 8, 10];
  
  // Llamada a la función calcularCuadrados con la lista de números
  let cuadrados = calcularCuadrados(numeros);
  
  // Impresión de la lista de cuadrados en la consola
  console.log('Cuadrados de la lista:', cuadrados);
*/
      
/* codigo que usaron en el video-------------------------------------------------------
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



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
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
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
/*desafio
01. Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
*/
//02. Cambia el contenido de la etiqueta h1 con document.querySelector y 
//asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';
//03. Crea una función que muestre en la consola el mensaje "El botón fue clicado" 
//siempre que se presione el botón "Console".
function botonClicadoConsola(){
    console.log("El botón fue clicado");
}
//04. Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
//preguntando el nombre de una ciudad de Brasil. 
//Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: 
//"Estuve en {ciudad} y me acordé de ti".
function alertaPrompt(){
    let ciudad = prompt("Nombre de una ciudad de Brasil:");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}
//05. Crea una función que muestre una alerta con el mensaje: 
//"Yo amo JS" siempre que se presione el botón "Alerta".
function botonAlerta(){
    alert("Yo amo JS");
}
//06. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function sumaNumeros(){
    let numero1 = parseInt(prompt("Teclea el primer número"));
    let numero2 = parseInt(prompt("Teclea el segundo número"));
    let resultado = numero1 + numero2;
    alert (`El resultado es ${resultado}`);
}
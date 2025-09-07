// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Arrary para introducir los nombres de los amigos.
let listaAmigos = [];





function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto.'); 
    asignarTextoElemento('p', `Selecciona un número del 1 al ${numeroMaximo}.`); 
    numeroSecreto = generarNumeroSecretro();
    intentos = 1;
}

condicionesIniciales();
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Arrary para introducir los nombres de los amigos (inicia vacío).
let listaAmigos = [];


//Esta función busca en el html el nombre del 
function agregarAmigo () {
    let nombre = document.getElementById("nombreDelAmigo").value;
    // Mirar en internet sobre cómo poner las condiciones de que no se introduzcan espacios y solo se ingrese un nombre (letras y sin espacios). 
    //Push antes de acutalizar para evitar retrasos
    listaAmigos.push(nombre);
    actualizarListaDeAmigos();
    document.getElementById("nombreDelAmigo").value = "";

}

//Si el nombre cumple con las condiciones, debe iniciarse esta función.
function actualizarListaDeAmigos() { 
    //Busca el elemento que tenga el atributo del id en el html y lo guarda lo que se introduce en la variable lista
    let lista = document.getElementById ("listaAmigos");
    //Borra y vuelve a poner los valores para evitar repetir los nombres (acepta los nombres duplicados, pero no menciona más de una vez cada uno de los valores de la lista) cada vez que se usa la función
    lista.innerHTML = ""; 
    //recorre el array y mdice cuantos elementos tiene
    for (let i=0 ; i<listaAmigos.length; i++) { 
        //para el "ul" de html se utiliza el "li"
        //crea un li nuevo y vacío en el array
        let li = document.createElement("li");
        //cambia el contenido dl nuevo li para ponerle el nombre del amigo.
        li.textContent = listaAmigos[i]; 
        //ingresa el li en el id para constuir la lista y su bucle
        lista.appendChild (li);
        console.log(listaAmigos);
    }
}





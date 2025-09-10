// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Arrary para introducir los nombres de los amigos (inicia vacío).
let listaAmigos = [];


//Esta función busca en el html el nombre del 
function agregarAmigo () {
    let nombre = document.getElementById("nombreDelAmigo").value;
    //Identifica caracteres especiales (no usuales en nombres en Español).
    let restricciónLetras = /^[A-Za-zñÑáéíóúÁÉÍÓÚ]+$/;
    //Alimina los espacios en el nombre
    if (nombre.trim() === "") 
        {
            //Mira sí contiene espacios el nombre
            if (nombre=="") 
                {
                    alert("Por favor, ingrese un nombre (Texto Vacío).");
                    return false;
                }
    } 
    //Comprueba que no existan caracteres especiales en el nombre
    else if (!restricciónLetras.test(nombre)) 
        {
            alert("Por favor, solamente ingrese nombre sin espacios, ni números."); 
    } 
    //Restricción de largo de nombre; Nombre largo en España con 38 caracteres sin espacios "GargantilladelLozoyayPinilladeBuitrago" 
    else if ((nombre.length > 38)) {
        alert("Solo se permite ingresar un nombre de máximo 38 letras sin espacios,")
        return false;
    }
    else 
        {
            listaAmigos.push(nombre);
            actualizarListaDeAmigos();
            document.getElementById("nombreDelAmigo").value = "";
    }

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


// Función para sortear un solo amigo
// Función para sortear un solo amigo
function sortearAmigo() {
    // Restricción: para que haya mínimo dos nombres en la lista.
    if (listaAmigos.length < 2) { 
        alert("Se necesita mínimo dos nombres para poder realizar el sorteo.");
        return; 
    }
    // Asigna un valor aleatorio a los nombres del array.
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    // Obtiene el nombre del amigo secreto usando el índice aleatorio.
    let amigoSecreto = listaAmigos[indiceAleatorio];
    // Busca en el HTML el nombre.
    let resultado = document.getElementById('resultado');
    //En caso de sortear de nuevo, borra el resultado anterior.
    resultado.innerHTML = ""; 
    // Muestra el nombre del amigo secreto
    resultado.innerHTML = `<p>El amigo secreto es: ${amigoSecreto}</p>`;
}


// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let indiceSorteado = null;

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.querySelector("#amigo").value;
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else if (amigos.includes(nombre)) {
        alert("El nombre ya existe.");
    } else {
        amigos.push(nombre);
    }

    // Limpiar el campo de entrada después de agregar el amigo
    document.querySelector("#amigo").value = "";

    actualizarListaAmigos();
}

// Función para listar amigos en la interfaz
function actualizarListaAmigos() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length <= 0) {
        alert("Por favor, agregue al menos un amigo.");
        return;
    }

    let indiceAleatorio = generarIndiceAleatorio();
    let amigoSorteado = amigos[indiceAleatorio];

    document.querySelector("#resultado").innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
}

// Función para generar un índice aleatorio que no se repita solo entre un sorteo y el siguiente sorteo
function generarIndiceAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);

    if (indiceSorteado !== numeroAleatorio) {
        indiceSorteado = numeroAleatorio;
        return numeroAleatorio;
    }

    return generarIndiceAleatorio();
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    amigos = [];
    indiceSorteado = null;
    document.querySelector("#listaAmigos").innerHTML = "";
    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#amigo").value = "";
}
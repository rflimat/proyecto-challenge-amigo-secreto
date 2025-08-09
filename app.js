// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.querySelector("#amigo").value;
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else if (amigos.includes(nombre)) {
        alert("El nombre ya existe.");
    } else {
        amigos.push(nombre);
    }

    document.querySelector("#amigo").value = "";
    
    // actualizarListaAmigos();
}
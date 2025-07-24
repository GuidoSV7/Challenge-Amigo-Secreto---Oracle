// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoElegido = amigos[indexAleatorio];

    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoElegido}`;
    resultado.appendChild(li);

    amigos = [];
    mostrarLista();
}

// Criar lista zerada
let amigos = []
// Capturar o valor do campo de entrada
function adicionarAmigo(){
    let amigo = document.querySelector("input").value;
    console.log(amigo);
    if (amigo == ""){
        alert("Por favor, insira um nome.");
    }else{
        amigos.push(amigo);
        console.log(`O amigo ${amigo} foi adicionado na lista`, amigos);
        document.querySelector("input").value = "";
    }
}

function atualizarListaDeAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i]; 
        lista.appendChild(li);
    }
}
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
    let lista = document.querySelector("listaAmigos");
    lista.innerHTML = ""
    while(i > amigos){

    }
}
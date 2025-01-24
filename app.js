// Criar lista zerada
let amigo = []
// Capturar o valor do campo de entrada
function adicionarAmigo(){
    let amigos = document.querySelector("input").value;
    console.log(amigos);
    if (amigos == ""){
        alert("Por favor, insira um nome.");
    }else{
        amigo.push(amigos);
        console.log(`O amigo ${amigos} foi adicionado na lista`, amigo);
    }
    
}

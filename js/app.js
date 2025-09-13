let nomes = [];

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if(nomeAmigo.value === ''){
        alert('Por favor, insira um nome.');
    }
    else{
        nomes.push(nomeAmigo.value);
        lista.innerHTML += `<li>${nomeAmigo.value}</li>`;
    }
    nomeAmigo.value = '';
}

function sortear(){
    if(nomes.length === 0){
        alert('A lista está vazia. Adicione nomes antes de sortear.');
        return;
    }
}
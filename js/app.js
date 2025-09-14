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

function sortear(){//em
    let lista = document.getElementById('lista-sorteio');
    if(nomes.length === 0){
        alert('A lista está vazia. Adicione nomes antes de sortear.');
        return;
    }
    embaralhar(nomes);
    let tamanho = nomes.length;
    //lista.innerHTML = `<li>${nomes[0]} tirou ${nomes[1]}</li>`;
    for(let i = 0; i < tamanho ; i++){
        lista.innerHTML += `<li>${nomes[i]} tirou ${nomes[(i + 1) % tamanho]}</li>`;
    }
}

function embaralhar(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function reiniciar(){
    nomes = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
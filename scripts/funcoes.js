import posts from './dados.js';
let container = document.getElementById('container_principal'); //Section responsável por armazerar os posts


function embaralharLista(lista){ //Função para embaralhar a lista de dados

    return lista.sort(() => Math.random() - 0.5).slice(0, 5);

}

function exibirPosts (){

    let dadosAleatorios = embaralharLista(posts); //Variavél com os posts aleatórios

    container.style.visibility = 'visible'; //Torna o container visivel
    container.innerHTML = dadosAleatorios.map((data, index) => 
        `
            <article class="card1 cor_${index +1}">
                <div>
                    <div class="container-user">
                        <img src="./assets/user.png" alt="icone de usuário" title="Imagem do usuário">
                        <div class="container-names">
                            <p>${data.usuario}</p>
                            <p>${data.profissao}</p>
                        </div>
                    </div>
                    <div class="container-postagem">
                        <h2>${data.titulo}</h2>
                        <p>${data.postagem}</p>
                    </div>
                </div>
            </article>
        `
    ).join("") //Evita aparecer "," após cada elemento
}

function exibirComLoader(){
    const loader = document.getElementById('loader');
    loader.style.display = 'block'; //Mostrar o loader
    container.style.visibility =  'hidden'; //esconde os posts

    setTimeout(() => {
        loader.style.display = 'none';    
        exibirPosts();
    }, 2000);
}


exibirComLoader()
setInterval(() => exibirComLoader(), 30000) //Atualiza os posts a cada 30 segundos
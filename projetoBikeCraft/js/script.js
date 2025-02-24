//Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
        link.classList.add("ativo")
    }

}

links.forEach(ativarLink);

//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProdutos(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
    console.log(elemento);
}

parametros.forEach(ativarProdutos)


//Perguntas Frequentes 

const perguntas = document.querySelectorAll("button");

function ativarPergunta (event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);


    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa")
    if (ativa){
        pergunta.setAttribute("aria-expanded", "true");
        }
        console.log(ativa)
}

function eventosPerguntas (pergunta){
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicleta

const galeria = document.querySelectorAll('.bicicleta-imagem img');
const galeriaContainer = document.querySelector('.bicicleta-imagem');

function trocarImagem (event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width:1000px');
    if(media){
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);
/*
OBJETIVO -  Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

PASSO 1 - Dar um jeito de pegar o elemento HTML dos botões
Passo 2 - Dar um jeito de identificar o clique do usuário no botão
Passo 3 - Desmarcar o Botão selecionado anterior
Passo 4 - Marcar o botão clicando como se estivesse selecionada
Passo 5 - Esconder a imagem de fundo anterior
Passo 6 - Fazer aparecer a imagem de fundo correspondete ao botão clicado
*/

//PASSO 1 - Dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//Passo 2 - Dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao,  indice) => {
    botao.addEventListener('click', () => {
        //Passo 3 - Desmarcar o Botão selecionado anterior
        desativarBotaoSelecionado();

        //Passo 4 - Marcar o botão clicando como se estivesse selecionado
        botao.classList.add('selecionado');

        //Passo 5 - Esconder a imagem ativa de fundo 
        esconderImagemAtiva();

        //Passo 6 - Fazer aparecer a imagem de fundo correspondete ao botão clicado
        imagens[indice].classList.add('ativa')
    })
})
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}


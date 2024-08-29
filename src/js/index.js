/* OBJETIVO 1- quando clicar no botão do personagem da lista, marcar o botao como selecionado
    passo 1- pegar os botoes no JS para poder verificar quando o usuário clicar em cima de um deles
    passo 2- adicionar a classe "selecionado" no botao que o usuario clicou
    passo 3- verificar se já existe um botao selecionado, se sim, devemos remover a seleção dele.
   OBJETIVO 2- quando clicar no botão do personagem, mostrar as informações do personagem
    passo 1- pegar os personagens no JS pra poder mostrar ou esconder ele
    passo 2- adicionar a classe "selecionado" no personagem que o usuario selecionou
    passo 3- verificar se já existe um personagem selecionado, se sim, devemos remover a seleçao dele
*/

const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();
        
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

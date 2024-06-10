console.log(document.getElementById("btn-avancar"));

const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
const btnVoltar = document.getElementById("btn-voltar")

btnAvancar.addEventListener("click", function () {

    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;

    esconderCartoeSelecionado();

    cartaoAtual++;
    mostraCartao();

});

btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0
    if (ehPrimeiroCartao) return;

    esconderCartoeSelecionado();

    cartaoAtual--;
    mostraCartao();

});

function mostraCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoeSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

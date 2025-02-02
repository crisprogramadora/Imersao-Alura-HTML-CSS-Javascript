const resultadoArtista = document.getElementById("resultado-artista");
const resultadoPlaylists = document.getElementById('resultado-playlists');
const inputPesquisa = document.getElementById('input-pesquisa');

function requestApi(termoPesquisa) {
    fetch(`http://localhost:3000/artistas?nome_like=${termoPesquisa}`)
        .then((response) => response.json())
        .then((result) => exibirResultados(result))
}

function exibirResultados(result) {
    resultadoPlaylists.classList.add("hidden");
    const nomeArtista = document.getElementById('nome-artista');
    const imagemArtista = document.getElementById('img-artista');

    result.forEach((element) => {
        nomeArtista.innerText = element.nome;
        imagemArtista.src = element.urlImg;
    });

    resultadoArtista.classList.remove("hidden");
}

inputPesquisa.addEventListener("input", function () {
    const termoPesquisa = inputPesquisa.value.toLowerCase();
    if (termoPesquisa === "") {
        resultadoPlaylists.classList.add("hidden");
        resultadoArtista.classList.remove("hidden");
        return;
    }
    requestApi(termoPesquisa);
});
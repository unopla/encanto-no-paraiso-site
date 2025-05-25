 const imagens = [
      "img/cabana.jfif",
      "img/airbnb.jpg",
      "img/montanha.jpg"
    ];
    let indiceAtual = 0;
    const imgElemento = document.getElementById('imagem');
    const setaEsquerda = document.getElementById('setaEsquerda');
    const setaDireita = document.getElementById('setaDireita');

    setaEsquerda.onclick = function() {
      indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
      imgElemento.src = imagens[indiceAtual];
    }
    setaDireita.onclick = function() {
      indiceAtual = (indiceAtual + 1) % imagens.length;
      imgElemento.src = imagens[indiceAtual];
    }
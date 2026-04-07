document.addEventListener('DOMContentLoaded', () => {
  const imgElement = document.getElementById('imagem');
  const setaEsquerda = document.getElementById('setaEsquerda');
  const setaDireita = document.getElementById('setaDireita');
  const animacao = document.getElementById('animacao');

  if (!imgElement || !setaEsquerda || !setaDireita || !animacao) {
    // Carrossel não existe nesta página, sai do script
    return;
  }

  const imagens = [
    "img/imgcabanas.webp",
    "img/img1.webp",
    "img/img2.webp",
    "img/img3.webp",
    "img/img4.webp",
    "img/img5.webp",
    "img/img6.webp",
    "img/img8.webp",
    "img/img9.webp"
  ];

  let indiceAtual = 0;
  let isAnimating = false;

  function trocarImagem(novoIndice, direcao) {
    if (isAnimating || novoIndice === indiceAtual) return;
    isAnimating = true;

    animacao.classList.remove('ativa');
    animacao.classList.add(direcao === 'esquerda' ? 'saindo-esquerda' : 'saindo-direita');

    setTimeout(() => {
      animacao.classList.remove('saindo-esquerda', 'saindo-direita');

      imgElement.onload = () => {
        animacao.classList.add('ativa');
        animacao.classList.remove('entrando-direita', 'entrando-esquerda');
        isAnimating = false;
        imgElement.onload = null;
      };

      animacao.classList.add(direcao === 'esquerda' ? 'entrando-direita' : 'entrando-esquerda');
      imgElement.src = imagens[novoIndice];
      indiceAtual = novoIndice;
    }, 500);
  }

  setaEsquerda.addEventListener('click', () => {
    const novoIndice = (indiceAtual - 1 + imagens.length) % imagens.length;
    trocarImagem(novoIndice, 'esquerda');
  });

  setaDireita.addEventListener('click', () => {
    const novoIndice = (indiceAtual + 1) % imagens.length;
    trocarImagem(novoIndice, 'direita');
  });

  imgElement.src = imagens[indiceAtual];
  animacao.classList.add('ativa');
});

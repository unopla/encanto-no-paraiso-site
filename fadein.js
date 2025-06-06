  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  
   const imagens = [
      "img/imgcabanas.jpg",
      "img/img1.jpg",
      "img/img2.PNG",
      "img/img3.jpg",
      "img/img4.jpg",
      "img/img5.jpg",
      "img/img6.jpg",
      "img/img8.jpg",
      "img/img9.PNG"
    ];

 let indiceAtual = 0;
const imgElement = document.getElementById('imagem');
const setaEsquerda = document.getElementById('setaEsquerda');
const setaDireita = document.getElementById('setaDireita');
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

// Sincroniza a imagem inicial
imgElement.src = imagens[indiceAtual];
animacao.classList.add('ativa');
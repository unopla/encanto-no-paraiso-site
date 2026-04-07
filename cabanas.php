<!DOCTYPE html>
<html lang="pt-BR">
	<head>
		<meta charset="UTF-8">
		<title>Cabanas</title>
		<link rel="stylesheet" href="css/cabanas.css">
		<link rel="stylesheet" href="css/header.css">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="icon" type="image/png" href="img/favicon.ico">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">  
	</head>
	<body>
<!-- header -->
		<header>
			<div class="logo">
				<a href="index.php"><img src="img/logo.webp" alt="Logo" class="logo"></a>
			</div>
			<div id="titulo">
			
				<h3>Encanto no paraíso</h3>
			</div>
			<div id="menu">	 
				<a class="bottom1" href="index.php"> <div class="bottom"> Inicio </div> </a>
				<a class="bottom1" href="turismos.php"><div class="bottom"> Turismos  </div> </a>
			</div>
		</header>	
<!-- fim header -->
<!-- div para não ficar alguma coisa dentro do header -->
		  <div id="fim"> </div>
<!-- escrita sobre as cabanas -->
		<section id="inicio" class="fade-in">
<!-- div que cobre todo o espaço para  centralizar as outras coisas -->
			<div id="quadrado">
<!-- div para que cobre o titulo  -->
				<div id="titlediv">
<!-- div que serve para centralizar isso  -->
					<div id="titletexto">
						<h2 id="nossa"> Nossa Cabana</h2>
					</div>
				</div>
				<div id="textocaixa">
					<div id="texto">
							<p>Contamos com uma cabana extremamente acolhedora, situada em meio à natureza, onde você pode desfrutar da tranquilidade do conforto e se conectar com o ambiente natural. É um refúgio ideal para quem busca paz, descanso e harmonia, longe da correria do dia a dia. Cercada por paisagens exuberantes, a cabana oferece um ambiente sereno, perfeito para renovar as energias e aproveitar momentos únicos junto à natureza com sua família.</p>
					</div>
				</div>
			</div>
		</section>
<!-- container que fica a parte da imagem e o texto no lado -->
		<section class="container">
			<div class="foto fade-in">
			  <div class="animacao ativa" id="animacao">
				<button id="setaEsquerda" class="seta" aria-label="Anterior">‹</button>
				<img src="img/imgcabanas.webp" alt="Cabana" class="imagem" id="imagem" onerror="this.src='img/imgcabanas.webp'">
				<button id="setaDireita" class="seta" aria-label="Próxima">›</button>
			  </div>
			</div>
			<div id="texto1" class="fade-in">	
				<p class="descricao"> Conta com lareira interna a lenha, TV, Wi-Fi, ar-condicionado split e portátil, cozinha completa com fogão, geladeira, freezer e utensílios, além de varanda com rede e churrasqueira, contamos também com um espaço perfeito para fazer um lual enquanto aprecia a lua. Lugar perfeito para relaxar e apreciar o canto dos pássaros no amanhecer e o pôr do sol ao anoitecer.<br>
					<li class="escritas"><strong>Com ar-condicionado<br></strong></li>
					<li class="escritas"><strong>Lareira aconchegante a lenha<br></strong></li>
					<li class="escritas"><strong>TV disponível<br></strong></li>
					<li class="escritas"><strong>Conexão Wi-Fi estável<br></strong></li>
					<li class="escritas"><strong>Estrutura de cozinha equipada<br></strong></li>
					<li class="escritas"><strong>Área externa com churrasqueira<br></strong></li>
					<li class="escritas"><strong>Varanda com rede para descanso</strong></li>
					<li class="escritas"><strong>Espaço para um lual<br></strong></li>
				</p>
			</div>

<!-- script js  -->
			<script src="fadein.js" defer></script>
			<script src="fotos.js" defer></script>		
		  <!-- fim js -->
		</section>
		
	</body>
	<footer>
<!-- informacoes do footer -->
		<section class="rodape">

<!-- cobre todas as informacoes -->
			<div class="infos">
				<div id="titlerodape">
					<h2>Midias Sociais</h2>
				</div>

				<div class="caixainteira">
					<a class="learnmorebtn" target="_blank" href="https://www.instagram.com/encantonoparaiso/">
						<div class="imgr">
							<img src="img/inta.webp" title="instagram" alt="Instagram">
						</div>
						Instagram
					</a>
				</div>

				<div class="caixainteira">
					<a class="learnmorebtn" target="_blank" href="https://www.tiktok.com/@encanto.no.paraso?lang=en">
						<div class="imgr">
							<img src="img/tiktok3.webp" title="tiktok" alt="TikTok">
						</div>
						Tik Tok
				  </a>
				</div>
			</div>
<!-- outra de informações -->
			<div class="infos">
				<div id="titlerodape">
					<h2>Contatos</h2>
				</div>

				<div class="caixainteira">
					<a class="learnmorebtn" target="_blank" href="https://api.whatsapp.com/send?phone=5551997851245">
						<div class="img">
							<img src="img/whats.webp" title="whatsapp" alt="Whatsapp">
						</div>
						(51) 5199785-1245
					</a>
				</div>

				<div class="caixainteira">
					<a class="learnmorebtn" target="_blank" href="mailto:encantonoparaiso@gmail.com">
						<div class="img">
							<img src="img/email.webp" title="email" alt="Email">
						</div>
						encantonoparaiso@gmail.com
					</a>
				</div>
			</div>

			<div class="infosf">
				<div id="titlerodapep">
					<h2>Informações Importantes</h2>
				</div>
				<div class="caixainteiraf">
					<a class="learnmorebtnf" href="sobrenos.php">Sobre a Encanto no Paraíso</a>
				</div>
				<div class="caixainteiraf">
					<a class="learnmorebtnf" href="reserve.php">Onde Reservar</a>
				</div>
			</div>
		</section>

		<section id="caixadireitos">
			<div id="caixapequena">
				<div id="titulop">
					<h3> Encanto no Paraiso </h3>
				</div>
				<div id="localizacão">
					<p> Rua José Wilrich - 905 - Estrada Vale Suiço - Interior</p>
					<p> São Vendelino, Rio Grande Do Sul - Brasil</p>
				</div>
				<div id="direitosreservados">
					<p> Desenvolvido por: </p>
					<p>2025 © Kelvin Adam Arcari | Todos os direitos reservados.</p>
				</div>
			</div>
		</section>
	</footer>
</html>
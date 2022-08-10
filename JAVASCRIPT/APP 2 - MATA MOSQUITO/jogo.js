
var altura = 0
var largura = 0
var vidas=1
var tempo=15

var criarMosquitoTempo = 1500

//serch só retorna o que está na carry streang da url (isto é o que está a direita 
//da interrogação, inclusive a interrogação)
var nivel = window.location.search

nivel = nivel.replace('?','') // substitui o caractere ? por vazio ('')


if (nivel === 'normal'){
	//1500 ms
	criarMosquitoTempo = 1500
} else if (nivel === 'dificil'){
	// 1000 ms
	criarMosquitoTempo = 1000
} else if (nivel === 'chucknorris'){
	//750 ms
	criarMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()


var cronometro=setInterval(function(){

	tempo -= 1


	if (tempo < 0){
		
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'

	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}

	
	
}, 1000)

// Obs: em teoria, escopo da variável do js 
//deveria impedir o acesso às variáveis 
//internas à funçao.

function posicaoRandomica(){


	//Remover mosquito anterior (caso exista)
	if(document.getElementById('mosquito')){

		document.getElementById('mosquito').remove()
		// console.log('Elemento selecionado foi: v'+vidas)

		if (vidas>3){
			window.location.href='fim_de_jogo.html'
			
		} else{
			document.getElementById('v'+vidas).src="imagens/coracao_vazio.png"

			vidas++
		}
		
	}
	


	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90


	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)


	// Criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.classname = tamanhoAleatorio() + ' ' + ladoAleatorio()
	//mosquito.className = 'mosquito1'
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}


	document.body.appendChild(mosquito)

	// console.log(tamanhoAleatorio())

	// console.log(ladoAleatorio())
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	

	switch(classe){
		case 0:
			return 'mosquito1'
		// o return tira a necessidade do break.

		case 1:
			return 'mosquito2'
		

		case 2:
			return 'mosquito3'
		
	}
}

function ladoAleatorio(){


	var classe = Math.floor(Math.random() * 2)


	switch(classe){
		case 0:
			return 'ladoA'
		// o return tira a necessidade do break.

		case 1:
			return 'ladoB'
	}
}
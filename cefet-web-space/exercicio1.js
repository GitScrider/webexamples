// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botaoCalcular = document.querySelector('#calcular');

botaoCalcular.addEventListener('click', calcula);

function calcula() {

	let constante = document.querySelector('#constante');
	let M1 = document.querySelector('#massa1');
	let M2 = document.querySelector('#massa2');
	let dist = document.querySelector('#distancia');
	let resultado = document.querySelector('#resultado');

	resultado.value = parseFloat((constante.value * M1.value * M2.value) / (dist.value * dist.value));
}


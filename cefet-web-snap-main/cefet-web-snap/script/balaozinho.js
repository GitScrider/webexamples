let marcacao = document.querySelectorAll('.marcacao');

for (let i = 0; i < marcacao.length; i++) {

    marcacao[i].addEventListener('mouseenter', mousein);

    marcacao[i].addEventListener('mouseleave', mouseout);

    marcacao[i].addEventListener('mousemove',balaozinhoposition)

}

let balaozinho = document.querySelector('#balaozinho');

function mousein(event) {

    let titulo = document.createElement("h2");
    titulo.innerHTML = event.target.dataset.titulo;
    titulo.style.color = event.target.dataset.cor;
    balaozinho.appendChild(titulo);

    let conteudo = document.createElement("p");
    conteudo.innerHTML = event.target.dataset.conteudo;
    conteudo.style.color = event.target.dataset.cor;
    balaozinho.appendChild(conteudo);
}

function mouseout(event) {

    balaozinho.innerHTML = '';

}

function balaozinhoposition(event) {


    balaozinho.style.left = event.pageX + "px";
    balaozinho.style.top = event.pageY + "px";

}
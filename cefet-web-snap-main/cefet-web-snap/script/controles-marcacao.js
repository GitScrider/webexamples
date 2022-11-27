let marcacaoselect = document.querySelectorAll('.marcacao');

let marcacaoselecionada = marcacaoselect[0].classList.contains('selecionada') ? marcacaoselect[0] : marcacaoselect[1];

let x = document.getElementById("x-da-marcacao");
let y = document.getElementById("y-da-marcacao");
let largura = document.getElementById("largura-da-marcacao");
let altura = document.getElementById("altura-da-marcacao");
let titulo = document.getElementById("titulo-da-marcacao");
let conteudo = document.getElementById("conteudo-da-marcacao");
let cordotexto = document.getElementById("cor-da-marcacao");


let formatocheked = document.getElementsByName("formato-da-marcacao");



console.log(formatocheked);

x.addEventListener('change', changex);
y.addEventListener('change', changey);
largura.addEventListener('change', changelargura);
altura.addEventListener('change', changealtura);
titulo.addEventListener('change', changetitulo);
conteudo.addEventListener('change', changeconteudo);
cordotexto.addEventListener('change', changecordotexto);

for (let x = 0; x < formatocheked.length; x++) {
    formatocheked[x].addEventListener('change', changeformatocheked);

}


let formato;

for (let i = 0; i < marcacaoselect.length; i++) {

    marcacaoselect[i].addEventListener('click', selected);

}


function selected(event) {

    marcacaoselecionada = event.target;

    for (let i = 0; i<marcacaoselect.length; i++) {

        marcacaoselect[i].classList.remove("selecionada")
    }
    marcacaoselecionada.classList.add("selecionada");


    x.value = parseInt(event.target.style.left);
    y.value = parseInt(event.target.style.top);
    largura.value = parseInt(event.target.style.width);
    altura.value = parseInt(event.target.style.height);
    titulo.value = event.target.dataset.titulo;
    conteudo.value = event.target.dataset.conteudo;
    cordotexto.value = event.target.dataset.cor;

    formatocheked[1].checked = marcacaoselecionada.classList.contains('formato-oval') ? true : false;
    formatocheked[0].checked = marcacaoselecionada.classList.contains('formato-oval') ? false : true;

}


function changex(event) {


    marcacaoselecionada.style.left = event.target.value + "px";

}

function changey(event) {

    marcacaoselecionada.style.top = event.target.value + "px";

}

function changelargura(event) {
    marcacaoselecionada.style.width = event.target.value + "px";
}

function changealtura(event) {
    marcacaoselecionada.style.height = event.target.value + "px";
}

function changetitulo(event) {


    marcacaoselecionada.setAttribute('data-titulo', titulo.value);



}

function changeconteudo(event) {

    marcacaoselecionada.setAttribute('data-conteudo', conteudo.value);

}

function changecordotexto(event) {
    marcacaoselecionada.setAttribute('data-cor', cordotexto.value)
}

function changeformatocheked(event) {

    console.log(event.target.defaultValue);


    marcacaoselecionada.setAttribute('data-formato', event.target.defaultValue);
    marcacaoselecionada.classList.remove('formato-retangular');
    marcacaoselecionada.classList.remove('formato-oval');
    marcacaoselecionada.classList.add(event.target.defaultValue);

}
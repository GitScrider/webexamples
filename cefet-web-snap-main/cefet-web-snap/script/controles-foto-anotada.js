
let botaohidden = document.querySelector('#visibilidade-das-marcacoes');

botaohidden.addEventListener('change', ocultarmarcacao);

let ishidden = false;

let selecionar = document.querySelector('#filtro-da-foto');

selecionar.addEventListener('change', selected);

let filtro = document.querySelector('.foto-anotada > img');

function ocultarmarcacao() {

    let ocultarmarc = document.getElementsByClassName("marcacao");
    ishidden = !ishidden;

    for (let i = 0; i < ocultarmarc.length; i++) {
        ocultarmarc[i].style.visibility = ishidden? "hidden": "visible" ;
    }

}

function selected(event) {

    console.log(selecionar.value);
    console.log(filtro.style.filter);
    filtro.style.filter = selecionar.value;

}
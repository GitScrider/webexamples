import {friendlyFetch} from '/friendly-fetch.js'
import {restartAnimation} from '/restart-animation.js'
import {play} from '/music-sem-private.js'
// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

const API_ENDPOINT = 'https://swapi.dev/api';

// const musica = new Audio("/audio/tema-sw.mp3");
// musica.play();



let audioUrl = "audio/tema-sw.mp3";
let coverImageUrl = "imgs/logo.svg";
let title = "Intro";
let artist = "John Williams";

play({audioUrl,coverImageUrl,title,artist}, document.body);

let maça  = "🍎";

console.log(maça);

let x= friendlyFetch(API_ENDPOINT)
 

const resposta = await fetch(API_ENDPOINT)
const dados = await resposta.json()

//console.log(dados["films"]);

const respostafilms = await fetch(dados["films"])
const dadosfilms = await respostafilms.json();

let filmes = dadosfilms.results

//console.log(filmes);

filmes.sort(function (a, b) {
	
	return (a.episode_id > b.episode_id) ? 1 : ((b.episode_id > a.episode_id) ? -1 : 0);
 
});

//console.log(filmes);

let El = document.getElementById("filmes");

//console.log(El)


filmes.forEach(preenchefilmes);

function preenchefilmes(value){

    //console.log(value.title);

    let newelement= document.createElement('li');



    let episode = "Episode " + romanize(value.episode_id);


    episode=episode.padEnd(12," ");

    let titulo = episode +"- "+value.title;

    newelement.innerHTML =titulo;

    //console.log(newelement);

    El.appendChild(newelement);

    newelement.addEventListener("click",e =>{

        tituloclicado(value.episode_id)
    });

}

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function tituloclicado(value){

    //console.log(value);

    let texto= document.querySelector(".introducao");

    texto.innerHTML="";

    //console.log(filmes)

    for(let i=0;i<filmes.length;i++){
        if(filmes[i].episode_id===value){
           // console.log(filmes[i].title)
            texto.innerHTML="Episode " +romanize(value) +"\n"+filmes[i].title+"\n\n"+filmes[i].opening_crawl;
        }
    }




}
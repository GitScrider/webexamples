// importação de dependência(s)


// variáveis globais deste módulo
const PORT = 3000
const db = {}


// abrir servidor na porta 3000 (constante PORT)
// dica: 1-3 linhas de código

const express = require("express");
const app = express();


const server = app.listen(PORT, function () {
    console.log("Listening on 3000");
});
// EXERCÍCIO 1
// configurar para servir os arquivos estáticos da pasta "client"
// dica: 1 linha de código

app.use(express.static("client/"));

// carregar "banco de dados" (data/jogadores.json e data/jogosPorJogador.json)
// você pode colocar o conteúdo dos arquivos json no objeto "db" logo abaixo
// dica: 1-4 linhas de código (você deve usar o módulo de filesystem (fs))

const filesystem = require("fs");

let DataNoJson1 = filesystem.readFileSync("server/data/jogadores.json");
let DataJson1 =  JSON.parse(DataNoJson1);
let DataNoJson2 = filesystem.readFileSync("server/data/jogosPorJogador.json");
let DataJson2 =  JSON.parse(DataNoJson2);

// configurar qual templating engine usar. Sugestão: hbs (handlebars)
//app.set('view engine', '???qual-templating-engine???');
//app.set('views', '???caminho-ate-pasta???');
// dica: 2 linhas
app.set("view engine", "hbs");
app.set('views', 'server/views');

// EXERCÍCIO 2
// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json (~3 linhas)

app.get("/",function(req,res){
    res.render("index.hbs",DataJson1);});



// EXERCÍCIO 3
// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter ~15 linhas de código



app.get("/jogador/:path",function(req,res){
    for(let jogador of DataJson1.players){
        if(jogador.steamid == req.params.path){

            let jogadorgd = DataJson2[jogador.steamid];

            let jogos = [];
            let jogosjogados = 0;
            for(let jogo of jogadorgd.games){
                if(jogo.playtime_forever !=0){
                    jogosjogados=jogosjogados+1;
                    jogos.push(jogo.playtime_forever);
                }
            }

            let maisjogados = jogos.sort(function(a, b){return b-a}).slice(0,5);
			let maisjogadoslist = [];

            for(let jogo1 of maisjogados){
                for(let jogo2 of jogadorgd.games){
                    if(jogo2.playtime_forever== jogo1){
                        maisjogadoslist.push(jogo2);
                        break;
                    }
                }
            }

            for(let jogo of maisjogadoslist){
                jogo.playtime_forever = Math.floor(jogo.playtime_forever/60);
            }

            res.render("jogador.hbs",{
                jogador: jogador,
                numjogos: jogadorgd.game_count,
                numjogosnaojogados: jogadorgd.game_count - jogosjogados,
                top5: maisjogadoslist,
                top:maisjogadoslist[0]
            });
        }
    }

});


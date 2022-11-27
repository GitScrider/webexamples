// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML



botoes = document.querySelectorAll('.botao-expandir-retrair');


botoes.forEach(function (botao) {
    botao.addEventListener('click', function (evento) {
        const expandiu = evento.currentTarget.parentNode.classList.toggle('expandido');
        if (expandiu) {
            evento.currentTarget.innerHTML = '-' 

        }
        else
        {
            evento.currentTarget.innerHTML = '+' 
            
        }

    });
});
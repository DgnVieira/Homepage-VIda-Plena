const feedBtn = document.getElementById("feed-btn");
feedBtn.addEventListener('click', function() {
    window.location.href = "Feed.html";
})



const firstCard = document.getElementById('first-card');
const secondCard = document.getElementById('second-card');

function createH5() {
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    return h5;
}

function createP () {
    const p = document.createElement('p');
    p.classList.add('card-text');
    return p;
}

function createCardInfo (card,noticia, descricao) {
    const h5 = createH5();
    const p = createP();
    h5.innerText = noticia;
    p.innerText = descricao;
    card.appendChild(h5);
    card.appendChild(p);
}

function shuffleArray (array) {
    for(let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function ReadCardInfo () {
    const dados = localStorage.getItem('db');
    const noticias = JSON.parse(dados).noticias;

    if(noticias.length > 0) {
        const shuffleNoticias = shuffleArray(noticias);

        if(shuffleNoticias[0]) {
            createCardInfo(firstCard, shuffleNoticias[0].titulo_caixa, shuffleNoticias[0].descricao_caixa);
        }

        if(shuffleNoticias[1]) {
            createCardInfo(secondCard, shuffleNoticias[1].titulo_caixa, shuffleNoticias[1].descricao_caixa);
        }
    }
}
ReadCardInfo();



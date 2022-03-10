/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */

//| dobbiamo crearci un arrey di oggetti con all'interno nome del luogo/soggetto immagine - titolo/descrizione dell'img - img



const elements = [
    {
        image: '-1637768345162.jpg',
        title: 'Gino Spadaccino',
        description: 'significativa immagine di Gino mentre pela le patate',
    },
    {
        image: 'elden-ring-art.jpeg',
        title: 'Marco ed il cane Ugo',
        description: 'Marco che porta a spasso il cane, a sua insaputa però incombeva una giornata ventosa',
    },
    {
        image: 'elden-ring-scaled-1.jpg',
        title: 'Foto di Delfina e ricordi di un estate a Foggia',
        description: 'Delfina ricordava bene quell\'estate, faceva un caldo torrido, tando che riuscì a fotografare un passante mentre duellava con il Caldo Torrido',
    },
    {
        image: 'sf_wvns.jpg',
        title: 'Pierino e la marachella ',
        description: 'Pierino che viene rinproverato dalla madre per i suoi svariati giri di scommesse clandestine',
    },
    {
        image: 'the-witcher-stagione-2-serie-2021-geralt.jpg',
        title: 'Geralt e i postumi',
        description: 'Geralt dopo una serata con gli elfi, non andata proprio benissimo ',
    },
    {
        image: 'zV8oTyn3AEfXibuuFLKez8.jpg',
        title: 'Geralt il Macellaio di Rivia',
        description: 'Geral in procinto di tagliare una libbra di carne alla signra Carmeala',
    }
]

console.log(elements);

//| ciclo for per inserire le proprietà nel DOM

let itemsElements;
let thumbnailsElements;

for (let i = 0; i < elements.length; i++){
    itemsElements = document.querySelector('.my-carousel-images').innerHTML += `
    <div class= "item">
        <img src="img/${elements[i].image}" alt= "image of ${elements[i].title}">
        <div class="item-text">
            <h2>${elements[i].title}</h2>
            <p>${elements[i].description}</p>
        </div>
    </div>`

    thumbnailsElements = document.querySelector('.my-thumbnails').innerHTML += `
    <div class="thumbnail">
        <img src="img/${elements[i].image}" alt="Thumbnail of ${elements[i].title} picture">
    </div>`
}

let counter = 0;

function active() {
    document.getElementsByClassName('item')[counter].classList.add('active');
    document.getElementsByClassName('thumbnail')[counter].classList.add('active')
}

function unactive() {
    document.getElementsByClassName('item')[counter].classList.remove('active');
    document.getElementsByClassName('thumbnail')[counter].classList.remove('active')
}

active();

function next() {
    unactive();
    if (counter === elements.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    active();
}

function prev() {
    unactive();
    if (counter === 0) {
        counter = elements.length - 1;
    } else {
        counter--;
    }
    active();
}



document.querySelector('.my-next').addEventListener('click', next);
document.querySelector('.my-previous').addEventListener('click', prev);



//!testing
/* function toggleActive(activeElement, unactiveElement) {

} */
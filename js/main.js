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
//| ciclo for per inserire le proprietà nel DOM


const elements = [
    {
        item: '-1637768345162.jpg',
        title: 'Gino Spadaccino',
        description: 'significativa immagine di Gino mentre pela le patate',
    },
    {
        item: 'elden-ring-art.jpeg',
        title: 'Marco ed il cane Ugo',
        description: 'Marco che porta a spasso il cane, a sua insaputa però incombeva una giornata ventosa',
    },
    {
        item: 'elden-ring-scaled-1.jpg',
        title: 'Foto di Delfina e ricordi di un estate a Foggia',
        description: "Delfina ricordava bene quell'estate, faceva un caldo torrido, tando che riuscì a fotografare un passante mentre duellava con il Caldo Torrido",
    },
    {
        item: 'sf_wvns.jpg',
        title: 'Pierino e la marachella ',
        description: 'Pierino che viene rinproverato dalla madre per i suoi svariati giri di scommesse clandestine',
    },
    {
        item: 'the-witcher-stagione-2-serie-2021-geralt.jpg',
        title: 'Geralt e i postumi',
        description: 'Geralt dopo una serata con gli elfi, non andata proprio benissimo ',
    },
    {
        item: 'zV8oTyn3AEfXibuuFLKez8.jpg',
        title: 'Geralt il Macellaio di Rivia',
        description: 'Geral in procinto di tagliare una libbra di carne alla signra Carmeala',
    }
]

console.log(elements);

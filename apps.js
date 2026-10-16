const body = document.querySelector('body');
const quoteBtn = document.getElementById('newQuoteBtn');

const colors = [
    {color: "#421A1A"},
    {color: "#C65B39"},
    {color: "#A5C0BB"},
    {color: "#004242"},
    {color: "#006F6F"},
]
const quotes = [
    {
        quote: "What is it that you seek child?",
        author: "'Mother'",
    },
    {
        quote: "I come to seek my birthright stolen by the heels.",
        author: "'Rana'",
    },
    {
        quote: "What you seek will only end in your suffering. But that does not disuade you, does it child.",
        author: "'Mother'",
    },
    {
        quote: "I've desired this for so long, anything is worth the sacrifice",
        author: "'Rana'",
    },
    {
        quote: "Very well then. The price is high, you will give up your peace, your authority, and your flesh for the that is most desired.",
        author: "'Mother'",

    },
    
];



const changeQuote =() =>{
    let index = [Math.floor(Math.random() * quotes.length)];

    document.getElementById("quoteText").innerText = quotes[index].quote
    document.getElementById("author").innerText = quotes[index].author

    let randomColor = colors[Math.floor(Math.random() * colors.length)].color;

    body.style.backgroundColor = randomColor;
}

quoteBtn.addEventListener('click', changeQuote, randomImg1);


function randomImg1() {
      var myImages1 = new Array ();
      myImages1[1] = "ceiba stream frog.jpeg";
      myImages1[2] = "Cochranella_albomaculata.jpg";
      myImages1[3] = "copan brook frog.jpg";
      var rnd = Math.floor( Math.random() * myImages1.length );
      if( rnd == 0 ) {
        rnd =1;
      }
      html_code = '<img class="who" src="' + myImages1[rnd] + '" />"';
      document.write(html_code);
    }

        const frog = [
    { id: 1, img: 'ceiba stream frog.jpeg'},
    { id: 2, img: 'Cochranella_albomaculata.jpg' },
    { id: 3, img: 'copan brook frog.jpg' },
    { id: 4, img: 'desert rain frog.jpg' },
    { id: 5, img: 'glass frog.jpg' },
    ];

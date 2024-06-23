

/*
const randomElement = document.getElementById("randomSentence");
const genButton = document.getElementById("generateButton");

genButton.addEventListener("click", () => {
    if (sentences.length === 0) {

        return;
    }

    const randomIndex = Math.floor(Math.random() * sentences.length);
    const selectedSentence = sentences.splice(randomIndex, 1)[0];
    randomElement.textContent = selectedSentence;


    /*const randomIndex = Math.floor(Math.random() * sentences.length);
    randomSentenceElement.textContent = sentences[randomIndex];
});*/


function* sentenceGenerator() {
    const sentences = [
        "I have controversial food opinions. Exhibit A: Avocados are versatile and can work in any meal at any time :)",
        "Pink is my favourite colour (not that surprising). I firmly believe it is one of the best colours to exist.",
        "I am super quiet except when I yap about apologetics or why Mr Sunshine is the best kdrama to exist.",
        "I have a love-hate relationship with cooking. Love experimenting but hate the cleaning up part.",
        "Barbie: The 12 Dancing Princesses, is the movie that convinced me to continue pursuing ballet seriously. I have a soft spot for that movie",
        "I sometimes sit in the car, look outside the window, and pretend I am shooting a music video",
        "I unironically love drinking hot water or tea at any time of the day. I have turned into my mom...",
        "I truly believe The book of Ecclesiastes is a literary masterpiece.",
        "I enjoy sitting in silence...I'm not in a bad mood, I just have nothing to say and that's ok.",
        "I used to have an obsession with Dinosaurs...I just think they are such cool creatures...",
    ];
    

    while (true) {
        for (const sentence of sentences) {
            yield sentence;
        }
    }
}

const randomElement = document.getElementById("randomSentence");
const genButton = document.getElementById("generateButton");
const sentenceIterator = sentenceGenerator();
genButton.addEventListener("click", () => {
    randomElement.textContent = sentenceIterator.next().value;
});
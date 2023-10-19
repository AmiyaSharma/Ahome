// Array of quotes with authors
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    // Add more quotes here
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const generateButton = document.getElementById("generate");


function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote.quote;
    authorText.textContent = `- ${randomQuote.author}`;
}


generateButton.addEventListener("click", generateRandomQuote);

generateRandomQuote();

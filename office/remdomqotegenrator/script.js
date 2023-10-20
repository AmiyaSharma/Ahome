
// let quotes = [
//     {
//         quote: "The only way to do great work is to love what you do.",
//         author: "Steve Jobs"
//     },
//     {
//         quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
//         author: "Martin Luther King Jr."
//     },
//     {
//         quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
//         author: "Winston Churchill"
//     },
   
// ];

// 

const quotes = document.getElementById("quotes");
const author = document.getElementById("author")
const newq = document.getElementById("newq")
let realdata="";


const getnewquote = ()=>{   
    let random= Math.floor(Math.random()*10);
//     console.log(realdata[random].text)  
    
// console.log(realdata[random].author)
quotes.innerText = `${realdata[random].text}`
author.innerText = `${realdata[random].author}`
}

const getquote = async()=>{
    const api ="https://type.fit/api/quotes" 
try {
    let data = await fetch(api);
     realdata =  await data.json()
    // console.log(realdata.text)
    getnewquote();

} catch (error) {
    console.log(error)
}

}

newq.addEventListener("click", getnewquote)
    
getquote()



// const quoteText = document.getElementById("quote");
// const authorText = document.getElementById("author");
// const generateButton = document.getElementById("generate");


// function generateRandomQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];
//     quoteText.textContent = randomQuote.quote;
//     authorText.textContent = `- ${randomQuote.author}`;
// }


// generateButton.addEventListener("click", generateRandomQuote);

// generateRandomQuote();

import React, { Component } from "react";

class QuoteGenerator extends Component {
  state = {
    quote: "",
    author: "",
  };

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        this.setState({
          quote: randomQuote.text,
          author: randomQuote.author || "Unknown",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="quote-generator">
        <div className="quote-text">
          <p>"{this.state.quote}"</p>
        </div>
        <div className="quote-author">
          <p>- {this.state.author}</p>
        </div>
        <button onClick={this.getQuote}>Generate Random Quote</button>
      </div>
    );
  }
}

export default QuoteGenerator;




// import React from "react"

// const Random = ()=>{   
// //     let random= Math.floor(Math.random()*10);
// // //     console.log(realdata[random].text)  
    
// // // console.log(realdata[random].author)
// // quotes.innerText = `${realdata[random].text}`
// // author.innerText = `${realdata[random].author}`
// // }

// // const getquote = async()=>{
// //     const api ="https://type.fit/api/quotes" 
// // try {
// //     let data = await fetch(api);
// //      realdata =  await data.json()
// //     // console.log(realdata.text)
// //     getnewquote();

// // } catch (error) {
// //     console.log(error)
// // }


// return (<>
//     <div>
//         <h1>
//             Random Quote Gentrator
//         </h1>

//         <div id="quotes">

//         </div>
//         <div id="Autor">
// <button> New Quotes</button>
//         </div>
//     </div>
// </>)
// }


// export default Random
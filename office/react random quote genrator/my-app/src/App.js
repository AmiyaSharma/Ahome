import React from "react";
import QuoteGenerator from "./Random";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <QuoteGenerator />
      </header>
    </div>
  );
}

export default App;

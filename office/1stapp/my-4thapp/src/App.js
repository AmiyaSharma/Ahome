// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useState } from 'react';

const App = () => {
  // Step 1: Declare React state to store the accordion state (open/closed)
  const [isOpen, setIsOpen] = useState(false);

  // Step 3: Toggle visibility of accordion body on click of title
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Step 1: Display accordion header (title) */}
      <div
        style={{
          cursor: 'pointer',
          padding: '10px',
          border: '1px solid #ddd',
          background: '#f9f9f9',
          
        }}
        onClick={toggleAccordion}
      >
        Accordion Title
      </div>

      {/* Step 2 and 3: Conditional rendering of accordion body based on state */}
      {isOpen && (        <div
          style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderTop: 'none',
          }}
        >
          Accordion Body Content
        </div>
      )}
    </div>
  );
};




export default App;

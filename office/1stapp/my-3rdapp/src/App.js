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


import React from 'react';

// const App = () => {
//   // Step 1: Declare list of items as JS Array
//   const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

//   // Step 2 and 3: Access each item using Array.map() and return JSX code in the callback function
//   const renderItems = () => {
//     return items.map((item, index) => (
//       <li key={index}>{item}</li>
//     ));
//   };

//   return (
//     <div>
//       <h2>List of Items</h2>
//       <ul>
//         {/* Step 2 and 3: Render items using the renderItems function */}
//         {renderItems()}
//       </ul>
//     </div>
//   );
// };


const App=()=>{
const items =  ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','item 6'];

const renderitems = items.map((item, index)=>(
  <li key={index}>{item}</li>
))

return <>
  <h1>Here is the items</h1>
  <ul>{renderitems}</ul>
</>
}



export default App;

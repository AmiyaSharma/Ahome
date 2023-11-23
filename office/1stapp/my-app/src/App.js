// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
    
//   );
// }

// export default App;

// import React, { useState } from 'react';

// const App = () => {
//   // Step 1: Declare React states for search input values
//   const [searchTerm, setSearchTerm] = useState('');
//   const [items, setItems] = useState([
//     'Apple',
//     'Banana',
//     'Cherry',
//     'Date',
//     'Grape',
//     'Lemon',
//     'Orange',
//   ]);

//   // Step 2: Create HTML input text for entering search term and update state in onChange function
//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   // Step 3: Add Array.filter() on the list of items with the search term value
//   const filteredItems = items.filter((item) =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       {/* Step 2: Create HTML input text */}
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />

//       {/* Step 3: Display filtered list */}
//       <ul>
//         {filteredItems.map((item, index) => (
//           <li key={index}>{item}</li>   
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

import React, {useState} from 'react';

const App= ()=>{

  const [searchitem , setSearchTerm]= useState('')
  const [items ]=useState([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Lemon',
    'Orange',

  ])
const handleSearch=(e)=>{
  console.log(e.target.value)
  setSearchTerm(e.target.value);
}
const filteredItems=items.filter((item)=>(
  

item.toLowerCase().includes(searchitem.toLowerCase())

))

return (
<div>
<p>Search</p>
<input type="text" value={searchitem} onChange={handleSearch}/>

<ul>

  {filteredItems.map((item, index)=>(
    
    <li key={index}>{item}
    </li>
  ))}
</ul>


</div>


)



}

export default App;

import './App.css';

import React, { useState } from 'react';

const App = () => {
  // Step 1: Create React state to track checkbox values
  const [checkedItems, setCheckedItems] = useState({});

  // Step 2: Function to update checkbox values based on event.target.checked
  const handleCheckboxChange = (option) => {
    setCheckedItems({ ...checkedItems, [option]: !checkedItems[option] });
  };
  
const array= ['Option 1', 'Option 2', 'Option 3', 'Option 4']
  // Step 3: Add checkbox input elements to JSX code with onChange function
  return (
    <div>
      <h2>Checklist</h2>
      <ul>
        {array.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={checkedItems[option] || false}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>

      {/* Display selected options dynamically */}
      <div>
        <h3>Selected Options:</h3>
        <ul>
          {Object.keys(checkedItems).map((option) => (
            checkedItems[option] && <li key={option}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};




export default App;

// Form.js
import React, { useState } from 'react';

const Form = () => {
  // State to manage the input field value
  const [inputValue, setInputValue] = useState('');

  // State to store the displayed value when the button is clicked
  const [displayedValue, setDisplayedValue] = useState('');

  // Event handler for input field changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler for button click
  const handleButtonClick = () => {
    // Set the displayed value to the current input value
    setDisplayedValue(inputValue);
    // Clear the input field after displaying the value
    setInputValue('');
  };

  return (
    <div>
      {/* Input field with onChange event handler */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
      />

      {/* Button with onClick event handler */}
      <button onClick={handleButtonClick}>Display Value</button>

      {/* Display the entered value below the input field */}
      <p>Displayed Value: {displayedValue}</p>
    </div>
  );
};

export default Form;

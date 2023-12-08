// Toggle.js
import React, { useState } from 'react';

const Toggle = () => {
  // State to manage the visibility of the paragraph
  const [isVisible, setIsVisible] = useState(false);

  // Event handler for button click to toggle visibility
  const handleToggleClick = () => {
    // Toggle the visibility state
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Button with onClick event handler to toggle visibility */}
      <button onClick={handleToggleClick}>Toggle Visibility</button>

      {/* Paragraph with conditional rendering based on visibility state */}
      {isVisible && <p>The paragraph is now visible!</p>}
    </div>
  );
};

export default Toggle;

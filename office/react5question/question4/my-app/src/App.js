// App.js
import React from 'react';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>React Parent-Child Components Example</h1>
      {/* Render the ParentComponent */}
      <ParentComponent />
    </div>
  );
}

export default App;

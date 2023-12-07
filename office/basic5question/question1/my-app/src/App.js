import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      <Greeting name="John" />
      {/* You can use the Greeting component with different names */}
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
};

export default App;

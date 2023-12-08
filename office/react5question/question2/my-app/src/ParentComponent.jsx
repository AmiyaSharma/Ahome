// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  render() {
    // Define the message to be passed to the child component
    const messageToChild = "Hello from Parent Component!";

    return (
      <div>
        {/* Pass the message prop to the ChildComponent */}
        <ChildComponent message={messageToChild} />
      </div>
    );
  }
}

export default ParentComponent;

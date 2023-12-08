// ChildComponent.js
import React from 'react';

class ChildComponent extends React.Component {
  render() {
    // Access the message prop passed from the ParentComponent
    const { message } = this.props;

    return (
      <div>
        {/* Display the value of the message prop */}
        <p>{message}</p>
      </div>
    );
  }
}

export default ChildComponent;

// ChildComponent1.js
import React from 'react';

class ChildComponent1 extends React.Component {
  render() {
    // Access the color prop passed from the ParentComponent
    const { color } = this.props;

    return (
      <div>
        {/* Display the value of the color prop in ChildComponent1 */}
        <p>ChildComponent1 Color: {color}</p>
      </div>
    );
  }
}

export default ChildComponent1;

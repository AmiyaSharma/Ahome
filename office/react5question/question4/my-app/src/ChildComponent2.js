// ChildComponent2.js
import React from 'react';

class ChildComponent2 extends React.Component {
  render() {
    // Access the color prop passed from the ParentComponent
    const { color } = this.props;

    return (
      <div>
        {/* Display the value of the color prop in ChildComponent2 */}
        <p>ChildComponent2 Color: {color}</p>
      </div>
    );
  }
}

export default ChildComponent2;

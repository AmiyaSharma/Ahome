// ParentComponent.js
import React from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

class ParentComponent extends React.Component {
  render() {
    // Define the color to be passed to the child components
    const colorValue = "blue";

    return (
      <div>
        {/* Pass the color prop to ChildComponent1 */}
        <ChildComponent1 color={colorValue} />

        {/* Pass the color prop to ChildComponent2 */}
        <ChildComponent2 color={colorValue} />
      </div>
    );
  }
}

export default ParentComponent;

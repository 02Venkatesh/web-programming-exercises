import React from 'react';
import Child from './Child';
const parent1 = () => {
  const msg = "Hello from the Parent component!";
  return (
    <div>
      <h2>Parent Component</h2>
      <Child message={msg} />
    </div>
  );
};
export default parent1;

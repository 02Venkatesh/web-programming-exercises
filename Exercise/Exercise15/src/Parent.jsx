import React from 'react';
import Child from './Child';
const Parent = () => {
  const msg = "Hello from the Parent component!";
  return (
    <div>
      <h2>Parent Component</h2>
      <Child message={msg} />
    </div>
  );
};
export default Parent;

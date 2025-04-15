import React, { useRef } from 'react';

const FocusInputForm = () => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input field
  };

  return (
    <div>
      <h3>Focus Input using useRef</h3>
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <br /><br />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
};

export default FocusInputForm;

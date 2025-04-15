import React from 'react';

const StyledButton = ({ label, onClick }) => {
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    fontSize: '16px',             
    color: 'white',               
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default StyledButton;

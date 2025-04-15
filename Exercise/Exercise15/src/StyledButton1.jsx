import React from 'react';

const StyledButton1 = ({ label, onClick }) => {
  return (
    <div>
      {/* Internal CSS using <style> tag */}
      <style>{`
        .styled-btn {
          background-color: #4CAF50;
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .styled-btn:hover {
          background-color: #45a049;
        }
      `}</style>

      <button className="styled-btn" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default StyledButton1;

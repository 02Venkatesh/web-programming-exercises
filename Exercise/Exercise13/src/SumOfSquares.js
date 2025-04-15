import React from "react";
const SumOfSquares = ({ a, b }) => {
  const sum = a * a + b * b;
  return <p>Sum of squares: {sum}</p>;
};
export default SumOfSquares;

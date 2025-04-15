import React from "react";
const ReverseString = ({ text }) => {
  const reversed = text.split("").reverse().join("");
  const isPalindrome = text.toLowerCase() === reversed.toLowerCase();
  return (
    <div>
      <p>Reversed: {reversed}</p>
      <p>{isPalindrome ? "It's a palindrome" : "It's not a palindrome"}</p>
    </div>
  );
};
export default ReverseString;

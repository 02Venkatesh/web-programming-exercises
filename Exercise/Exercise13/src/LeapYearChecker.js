import React from "react";
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
const LeapYearChecker = ({ year }) => {
  return (
    <p>
      {year} is {isLeapYear(year) ? "a Leap Year" : "not a Leap Year"}.
    </p>
  );
};
export default LeapYearChecker;

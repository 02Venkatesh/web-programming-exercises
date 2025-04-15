import React from "react";
const HelloReact = () => {
  return React.createElement("h1", null, "Hello, React!");
};
export function HelloReact2() {
  return <h1>Hello, React!</h1>;
}
export function HelloReact3() {
  let message = "Hello";
  return <h1>{message}</h1>;
}
export default HelloReact;

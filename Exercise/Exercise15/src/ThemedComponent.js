import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`themed-box ${theme}`}>
      <p>This is a {theme} themed component.</p>
    </div>
  );
};

export default ThemedComponent;

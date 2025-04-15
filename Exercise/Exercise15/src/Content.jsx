import React, { useState } from 'react';

const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Why did the computer go to the doctor? Because it had a virus!",
  "Why don’t programmers like nature? It has too many bugs.",
  "Why did the developer go broke? Because he used up all his cache."
];

const Content = () => {
  const [joke, setJoke] = useState('');

  const handleClick = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke);
  };

  return (
    <div>
      <button onClick={handleClick}>Tell me a joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
};

export default Content;

import React, { useState, useEffect } from 'react';

const JokeFetcher = () => {
  const [joke, setJoke] = useState('');
  const [refresh, setRefresh] = useState(0);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke('Failed to fetch joke.');
    }
  };

  useEffect(() => {
    fetchJoke();
  }, [refresh]); 

  return (
    <div>
      <h3>Random Joke</h3>
      <p>{joke}</p>
      <button onClick={() => setRefresh(prev => prev + 1)}>Get Another Joke</button>
    </div>
  );
};

export default JokeFetcher;

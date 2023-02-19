import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jokes = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await axios.get('http://localhost:8080/jokes');
      setJoke(response.data.joke);
    };
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Jokes</h2>
      <p>{joke}</p>
    </div>
  );
};

export default Jokes;

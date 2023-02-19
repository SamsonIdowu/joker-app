import React from 'react';
import Jokes from './Jokes';
import Messages from './Messages';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Jokes />
      <Messages />
    </div>
  );
};

export default App;

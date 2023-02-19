import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await axios.get('http://localhost:8081/messages');
      setMessage(response.data.message);
    };
    fetchMessage();
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      <p>{message}</p>
    </div>
  );
};

export default Messages;

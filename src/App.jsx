import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState(() => {
    const storedName = window.localStorage.getItem('name');
    return storedName || 'YourName';
  });

  useEffect(() => {
    window.localStorage.setItem('name', name);
  }, [name]);

  return (
    <div className="App">
      <h1>Welcome, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default App;

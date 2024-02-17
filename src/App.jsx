import React from 'react';
import { useLocalStorage } from './useLocalStorage'; 

const App = () => {
  const [name, setName] = useLocalStorage('name', 'Jacop'); 
  const [subject, setSubject] = useLocalStorage('subject', 'React Hooks'); 

  return (
    <div className="App">
      <h1>Welcome, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <p>Continue learning {subject}.</p>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Enter subject"
      />
    </div>
  );
};

export default App;

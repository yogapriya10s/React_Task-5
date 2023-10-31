import React, { useState } from 'react';
import './App.css'; // Use a separate CSS file

function App() {
  const [result, setResult] = useState('');
  const [date, setDate] = useState(null);

  const calculateAge = () => {
    if (!date) {
      setResult('Please enter your date of birth');
      return;
    }

    const birthDate = new Date(date);
    const today = new Date();
    if (birthDate > today) {
      setResult('Invalid date. You cannot be born in the future!');
      return;
    }

    const age = today.getFullYear() - birthDate.getFullYear();
    setResult(`Your age is ${age} years.`);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button onClick={calculateAge}>Calculate age</button>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
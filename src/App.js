import React from 'react';
import weather from './weather';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello from React</h1>
        <weather city="paris" />
        {weather} 
      </header>
    </div>
  );
}

export default App;

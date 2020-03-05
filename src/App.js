import React from 'react';
import logo from './logo.svg';
import './App.css';

import GetApiData from './components/GetApiData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>API DATA</h1>
       <GetApiData />
      </header>
    </div>
  );
}

export default App;

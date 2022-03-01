import React from 'react';
import './App.css';
import Info from './info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Info titulo ='Titulo 1' texto = 'Texto 1' />
        <Info titulo ='Titulo 2' texto = 'Texto 2' />
        <Info titulo ='Titulo 3' texto = 'Texto 3' />
      </header>
    </div>
  );
}

export default App;

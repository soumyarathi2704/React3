import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';
function App() {
  return (
    <div className="App">
      <h1 className="app-title">Color Picker</h1>
      <div className="content">
        <ColorPicker />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

function clickButton() {
  return window.alert('This is a test app!')
}

function App() {
  return(
    <div className="App">
      <h1>
        Serene Sea Front
      </h1>
      <img 
        width="800px"
        alt="random image" 
        src="https://machinelearningmastery.com/wp-content/uploads/2018/07/How-to-Generate-Random-Numbers-in-Python.jpg" />
      <p>
        Relax! breathe in and breathe out, feel the wind through you. 
      </p>
      <button onClick={clickButton}>Click for info</button>
      <br />
      <p></p>
    </div>
  );
}

export default App;

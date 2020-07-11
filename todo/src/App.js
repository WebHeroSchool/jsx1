import React from 'react';
import logo from './logo.svg';
import './App.css';

const num = 45;
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style = {{ color: 'green' }}>
          Hello World!
        </p>
        {num}
        {' '}
        {num + 35}
        {' '}
        {47}
        {' '}
        {flag && 'Flag is true'}
        {' '}
        {flag ? 'Flag is true' : 'Flag is false'}
        {true}
        {false}
        {undefined}
        {null}
      </header>
    </div>
  );
}

export default App;

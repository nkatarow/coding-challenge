import React from 'react';
import logo from '../_ui/logo.svg';
import './App.css';

import FormComponent from './FormComponent';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>

    <main>
      <FormComponent />
    </main>
  </div>
);
export default App;

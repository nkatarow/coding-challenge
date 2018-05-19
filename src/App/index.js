import React from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from '../_ui/logo.svg';
import './App.css';

import Navigation from './Navigation';
import Filter from './Filter';
import Landing from './Landing';
import FormComponent from './FormComponent';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>

      <Navigation />
    </header>

    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/form" component={FormComponent} />
      <Route path="/filter" component={Filter} />
    </Switch>
  </div>
);
export default App;

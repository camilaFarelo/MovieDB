import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movies from './containers/Movies';
import Movie from './containers/Movie';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Movies} />
        <Route exact path='/:id' component={Movie} />
      </Switch>
    );
  }
}

export default App;

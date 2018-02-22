import React, { Component } from 'react';
import ProblemsList from '../containers/ProblemsList';
import MainSearch from '../containers/MainSearch';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <MainSearch/>
        </header>
          <ProblemsList/>
      </div>
    );
  }
}

export default App;

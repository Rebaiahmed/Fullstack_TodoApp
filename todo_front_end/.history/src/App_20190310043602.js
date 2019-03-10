import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import SignInPage from './Containers/SignInPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello </h1>
        <SignInPage />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import SignInPage from './Containers/SignInPage';
import Navbar from './Components/Navbar';



class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
        <SignInPage />
      </div>
    );
  }
}

export default App;

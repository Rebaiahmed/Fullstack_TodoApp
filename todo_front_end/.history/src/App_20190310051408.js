import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import SignInPage from './Containers/SignInPage';
import  SignUpPage from './Containers/SignUpPage';
import Navbar from './Components/Navbar';



class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
        <SignInPage />
        <SignUpPage />
      </div>
    );
  }
}

export default App;

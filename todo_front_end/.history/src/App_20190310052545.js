import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SignInPage from './Containers/SignInPage';
import SignUpPage from './Containers/SignUpPage';

import Navbar from './Components/Navbar';



class App extends Component {





  render() {
    return (
      <Router>
      <div>
       <Navbar />
      
     
         <Route path="/" exact component={SignInPage} />
        <Route path="/signin/" component={SignInPage} />
        <Route path="/signup/" component={SignUpPage} />

      </div> 
      </Router>
    );
  }
}

export default App;

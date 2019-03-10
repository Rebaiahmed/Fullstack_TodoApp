
import React from 'react';
import { Link } from "react-router-dom";

const   Navbar = () =>

(
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Formalab</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">SignUp</a></li>
      <li>  <Link to="/signup/">SignIn</Link></li>


    </ul>
  </div>
</nav>
)


export default Navbar ;
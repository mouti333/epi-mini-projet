import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import { ButtonContainer } from "./Button";

export default function Navbar() {
  return (
    <div className="navbar nav-bar-expand-sm navbar-dark px-sm-5 NavBar">
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5 logo">
          <Link to="/" className="nav-link">
           Mercedes STORE
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer/>
      </Link>
    </div>
  );
}


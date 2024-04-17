import React from "react";
import "./Nav.css";

import NavLink from "./../UI/NavLink/NavLinks";

export default function Nav(props) {
  return (
    <nav className="header__nav">
      <ul className="header__ul">
        <NavLink href="/section">Get Started</NavLink>
        <NavLink href="/quiz">Quiz</NavLink>
        <NavLink href="/learn">Learn</NavLink>
        {/* <NavLink href="/guidance">Guidance</NavLink> 
         <NavLink href="/Feature_Teacher">Features</NavLink>
        */}
        </ul>
    </nav>
  );
}

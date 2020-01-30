import React from 'react';
import { Link } from "react-router-dom";

import "../../assets/css/navbar.scss";

import LogoTictactrip  from "../../assets/icons/logo-tictactrip.svg";
import BurgerMenu  from "../../assets/icons/burger-menu.svg";


/** NAVBAR | website navbar with logo & main sections */

const Navbar = () => {
    return (
      <>
        <div className="NavbarContainer">
          <Link to="/" ><img className="NavbarLogo" src={LogoTictactrip} alt="Logo-Tictactrip"/></Link>
          <ul className="NavbarLinks">
              <li>Train</li>
              <li>Bus</li>
              <li>Covoiturage</li>
              <li>Top Trajets</li>
              <li>Contact</li>
          </ul>
          <img className="NavbarBurgerMenu" src={BurgerMenu} alt="Burger Menu"/>
        </div>
      </>
    );
  }

  export default Navbar
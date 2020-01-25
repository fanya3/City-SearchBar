import React from 'react';
import "../../assets/css/footer.scss";
import LogoTictactripWhite  from "../../assets/icons/logo-tictactrip-white.svg";

const Footer = () => {
    return (
      
      <div className="FooterContainer">
         <img className = "FooterLogo" src={LogoTictactripWhite} alt="Logo White"/>
         <p>© Tictactrip 2020 </p>
      </div>
      
    );
  }

  export default Footer
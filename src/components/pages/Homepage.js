import React from 'react';

import "../../assets/css/homepage.scss";

import DinoTictactrip  from "../../assets/icons/dino-tictactrip.svg";




const Homepage = () => {
    return (
      <>
        <div className="HomepageContainer">
          <img className="Dino" src={DinoTictactrip} alt="Dino-Tictactrip"/>
        </div>
      </>
    );
  }

  export default Homepage
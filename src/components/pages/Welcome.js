import React from "react";
import { Button } from "../common/"


/** WELCOME | Section to welcome users
* 
* @param {Props} props.setActiveScreen - function to switch on top z-index the active screen (for mobile)*/


const Welcome = (props) => {
  return (
    <div className="WelcomeContainer">
      <h1>Bienvenue sur tictactrip!</h1>
      <div className="line"></div>
      <h5>Voyagez partout en Europe!</h5>
      <p>
        Premier comparateur intermodal! Réservez trains, bus &amp; covoiturage !
      </p>
      <div className="ButtonGo">
        <Button text="C'EST PARTI !" onClick={() => props.setActiveScreen(true)} />
      </div>
    </div>
  );
};

export default Welcome;

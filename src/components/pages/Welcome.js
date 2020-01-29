import React from "react";
import { Button } from '../common/'

const Welcome = (props) => {
  return (
    <div className="welcomeContainer">
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

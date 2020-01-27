import React from 'react';

import "../../assets/css/card.scss";


const Card = (props) => {
    return (
      <>
        <div className="CardContainer">
          <h4>{props.title}</h4>
          {props.children}
        </div>
      </>
    );
  }

  export default Card
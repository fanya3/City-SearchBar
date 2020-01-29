import React from 'react';

import "../../assets/css/card.scss";


const Card = (props) => {
    return (
      <>
        <div className="CardContainer">
          {props.children}
        </div>
      </>
    );
  }

  export default Card
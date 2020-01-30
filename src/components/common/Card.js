import React from "react";

/** CARD | transversal white card to display content
 * @param {Props} props.children - all content
 */

const Card = props => {
  return (
    <>
      <div className="CardContainer">{props.children}</div>
    </>
  );
};

export default Card;

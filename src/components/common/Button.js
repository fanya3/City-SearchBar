import React from "react";


/** BUTTON | transversal button
 * @param {Props} props.onClick - function with specific action when clicked
 * * @param {Props} props.text - string for button title
 */

const Button = props => {
  return (
    <>
      <button type="submit" className="ButtonGlobal" onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
};

export default Button;

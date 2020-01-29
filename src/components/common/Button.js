import React from 'react';


const Button = (props) => {
    return (
      <>
        <button type="submit" className="ButtonSearch" onClick={props.onClick}>{props.text}</button>
      </>
    );
  }

  export default Button
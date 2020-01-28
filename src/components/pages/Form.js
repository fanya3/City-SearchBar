import React, { useState, useEffect } from "react";
import { Button } from '../common/'

import "../../assets/css/card.scss";
import "../../assets/css/button.scss";


const Form = props => {

  return (
    <>
      <div className="FormContainer">
        <form>
          <input
            name="cityStart"
            type="text"
            placeholder="Saisissez votre gare de départ"
            onFocus={() => props.handleChangeInput("cityStart")}
            required
            value={props.chosenStartCity}
            onChange = {props.handleChosenStartCity}
            className={props.activeInput === "cityStart" ? "inputActive" : ""}
          />
          <input
            name="cityEnd"
            type="text"
            placeholder="Saisissez votre gare d'arrivée"
            onFocus={() => props.handleChangeInput("cityEnd")}
            required
            value={props.chosenEndCity}
            onChange = {props.handleChosenEndCity}
            className={props.activeInput === "cityEnd" ? "inputActive" : ""}
            />

          <input
            name="dateStart"
            type="text"
            placeholder="Saisissez votre date de départ"
            onFocus={() => props.handleChangeInput('dateStart')}
            required
            value={props.finalStartDate}
            className={props.activeInput === "dateStart" ? "inputActive" : ""}
          /> 
          <input
            name="dateEnd"
            type="text"
            placeholder="Saisissez votre date de retour"
            onFocus={() => props.handleChangeInput("dateEnd")}
            required
            value={props.finalEndDate}
            className={props.activeInput === "dateEnd" ? "inputActive" : ""}
          />
          <input
            name="passenger"
            type="text"
            placeholder="Renseignez le passager"
            onFocus={() => props.handleChangeInput("passenger")}
            required
            value="1 adulte (26-59 ans)"
            // onChange={validateNewData}
            className={props.activeInput === "passenger" ? "inputActive" : ""}
          />  
        </form>
        <Button/>
      </div>
    </>
  );
};

export default Form;

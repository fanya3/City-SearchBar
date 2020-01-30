import React from "react";
import { Button } from "../common/";

/** FORM | Form to enter all the data to search the journey
* 
* @param {Props} props.setActiveScreen - function to switch on top z-index the active screen (for mobile)

* @param {Props} props.handleChangeInput - function to choose which section is displayed on the second card

* @param {Props} props.switchCities - function to switch cities of arrival and departure
* */

const Form = props => {
  return (
    <>
      <div className="FormContainer">
        <form>
          <div className="InputCityGroup">
            <input
              name="cityStart"
              type="text"
              placeholder="Saisissez votre gare de départ"
              onFocus={() =>
                props.handleChangeInput(
                  "cityStart",
                  props.setActiveScreen(false)
                )
              }
              required
              value={props.chosenStartCity}
              onChange={props.handleChosenStartCity}
              className={props.activeInput === "cityStart" ? "inputActive" : ""}
            />
            <button
              onClick={() => props.switchCities()}
              type="button"
              className="ButtonSwitch"
            ></button>
            <input
              name="cityEnd"
              type="text"
              placeholder="Saisissez votre gare d'arrivée"
              onFocus={() =>
                props.handleChangeInput("cityEnd", props.setActiveScreen(false))
              }
              required
              value={props.chosenEndCity}
              onChange={props.handleChosenEndCity}
              className={props.activeInput === "cityEnd" ? "inputActive" : ""}
            />
          </div>
          <div className="InputDateGroup">
            <input
              name="dateStart"
              type="text"
              placeholder="Saisissez votre date de départ"
              onFocus={() =>
                props.handleChangeInput(
                  "dateStart",
                  props.setActiveScreen(false)
                )
              }
              required
              value={props.finalStartDate}
              className={props.activeInput === "dateStart" ? "inputActive" : ""}
            />
            <input
              name="dateEnd"
              type="text"
              placeholder="Saisissez votre date de retour"
              onFocus={() =>
                props.handleChangeInput("dateEnd", props.setActiveScreen(false))
              }
              required
              value={props.finalEndDate}
              className={props.activeInput === "dateEnd" ? "inputActive" : ""}
            />
          </div>
          <input
            name="passenger"
            type="text"
            onFocus={() =>
              props.handleChangeInput("passenger", props.setActiveScreen(false))
            }
            required
            value={props.totalPassengers}
            className={`inputPassenger ${
              props.activeInput === "passenger" ? "inputActive" : ""
            }`}
          />
        </form>
        <div className="FinalForm">
          <p>Utiliser un code de réduction</p>
          <Button text="RECHERCHER" />
        </div>
      </div>
    </>
  );
};

export default Form;

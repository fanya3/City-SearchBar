import React, { useState, useEffect } from "react";
import Select from 'react-select';

import { Button } from '../common/'



/** PASSENGER | Section to enter, modify passengers
* 
* @param {Props} props.setActiveScreen - function to switch on top z-index the active screen (for mobile)

* @param {Props} props.chosenPassenger - the state with the selected passengers

* @param {Props} props.validateChosenPassenger - function to modify a passenger

* @param {Props} props.deletePassenger - function to delete a passenger

* @param {Props} props.newPassenger - state to display the section to add a passenger

* */


const Passenger = (props) => {


  const passengersTypes = [
    { value: 'jeune (0-25)', label: 'jeune (0-25)' },
    { value: 'adulte (26-59)', label: 'adulte (26-59)' },
    { value: 'senior (60+)', label: 'senior (60+)' },
  ];


  
  return (
    <>
      <h4>Choisissez vos passagers:</h4>
      
        <div className="formPassenger">
        
        {props.chosenPassenger  && props.chosenPassenger.map( 
          (passenger,i) => (
        <div key = {i} className="eachPassenger">
          <p> Passager {i+1}</p>  
          <Select
            id = {i} 
            className="selectPassenger"
            name="passengerType"
            value={passenger}
            onChange={props.validateChosenPassenger}
            options={passengersTypes}
          />
          <input type = "button" className ="ButtonDelete" value ="X" style = {props.chosenPassenger.length === 1 ? {display:"none"} : { display:"block"}} onClick = {() => props.deletePassenger(i)}/>
        </div>
        
           )
          ) 
        }
  
        <div className="eachPassenger" style = {props.newPassenger ? {display:"flex"} :{ display:"none"}} >
          <p> Nouveau Passager</p>  
          <Select
            className="selectNewPassenger"
            name="passengerNew"
            placeholder ="Choix du passager"
            value={props.selectedOption}
            onChange={props.addNewPassenger}
            options={passengersTypes}
          />
        </div>     
        
        <div className = "ButtonAdd">
          <Button
            text = "AJOUTER 1 PASSAGER"
            onClick= { () => props.setNewPassenger(true)}
            />
            <div>
              <div className = "ButtonOk">
              <Button
                text = "OK"
                onClick= { () => props.setActiveScreen(true)}/>
              </div>
            </div>
        </div>

      </div>
    </>
  )
}


  export default Passenger
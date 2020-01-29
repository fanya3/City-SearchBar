import React from "react";
import { Button } from '../common/'

const Passenger = (props) => {


  const passengersTypes = [
    {type: "jeune (0-25)"},
    {type: "adulte (26-59)"},
    {type: "senior (60+)"}
  ]
  

  return (
    <>
      <h4>Choisissez vos passagers:</h4>
      <div className="formPassenger">
        
        {props.chosenPassenger  && props.chosenPassenger.map( 
          (passenger,i) => (
        <div className="eachPassenger">
          <p> Passager {i+1}</p>  
          <select
            className="selectPassenger"
            name="passengerType"
            onChange = {props.validateChosenPassenger}
            id = {i} >
            <option value ={passenger} selected>{passenger}</option>
            {passengersTypes && passengersTypes
              .filter( data => data.type !== props.chosenPassenger[i])
              .map(data2 => {
                return <option value={data2.type} >{data2.type} </option>;
              })}
          </select>
        </div>
           )
          ) 
        }
        
        <div className = "ButtonAdd">
          <Button
            text = "AJOUTER D'AUTRES PASSAGERS"
            onClick= { () => props.addPassenger}
            />
            <div className = "ButtonOk">
            <Button
              text = "OK"
              onClick= { () => props.setActiveScreen(true)}/>
            </div>
        </div>

      </div>
    </>
  )
}


  export default Passenger
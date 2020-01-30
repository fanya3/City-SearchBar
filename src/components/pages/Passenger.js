import React from "react";
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
            {passengersTypes
              .map(data2 => 
                 (<option value={data2.type} >{data2.type} </option>)
              )}
          </select>
          <input type = "button" className ="ButtonDelete" value ="X" style = {props.chosenPassenger.length === 1 ? {display:"none"} : { display:"block"}} onClick = {() => props.deletePassenger(i)}/>
        </div>
           )
          ) 
        }

        <div className="eachPassenger" style = {props.newPassenger ? {display:"flex"} :{ display:"none"}} >
          <p> Passager {props.chosenPassenger.length + 1}</p>  
          <select
            className="selectPassenger"
            name="passengerType"
            onChange = {props.addNewPassenger}
             >
            <option value ="" selected>Choix du type de passager</option>
            {passengersTypes
              .map(data2 => 
                 (<option value={data2.type} >{data2.type} </option>)
              )}
          </select>
        </div>     
        
        <div className = "ButtonAdd">
          <Button
            text = "AJOUTER D'AUTRES PASSAGERS"
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
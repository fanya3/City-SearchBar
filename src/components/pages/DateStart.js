import React from "react";
import Calendar from 'react-calendar'
import { Button } from '../common/'

const DateStart = (props) => {
    
    return (
      <div>
        <h4>Choix de la date de départ!</h4>
        <Calendar
            value={props.valueStartDate}
            minDate={props.currentStartDate}
            onChange={props.onChangeStart}
        />
        <ul className ="HourTime">
          <li onClick={()=> props.setStartTime('6h')} className={props.startTime === '6h' ? "activeHour" : ""} >6h</li>
          <li onClick={()=> props.setStartTime('8h')} className={props.startTime === '8h' ? "activeHour" : ""} >8h</li>
          <li onClick={()=> props.setStartTime('10h')} className={props.startTime === '10h' ? "activeHour" : ""} >10h</li>
          <li onClick={()=> props.setStartTime('12h')} className={props.startTime === '12h' ? "activeHour" : ""} >12h</li>
          <li onClick={()=> props.setStartTime('14h')} className={props.startTime === '14h' ? "activeHour" : ""} >14h</li>
          <li onClick={()=> props.setStartTime('16h')} className={props.startTime === '16h' ? "activeHour" : ""} >16h</li>
          <li onClick={()=> props.setStartTime('18h')} className={props.startTime === '18h' ? "activeHour" : ""} >18h</li>
          <li onClick={()=> props.setStartTime('20h')} className={props.startTime === '20h' ? "activeHour" : ""} >20h</li>
          <li onClick={()=> props.setStartTime('22h')} className={props.startTime === '22h' ? "activeHour" : ""} >22h</li>
        </ul>
        <div className = "ButtonOk">
          <Button
              text = "OK"
              onClick= { () => props.setActiveScreen(true)}/>
        </div>
      </div>
    );
  }


  export default DateStart

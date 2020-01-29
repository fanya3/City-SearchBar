import React from "react";
import Calendar from 'react-calendar'
import { Button } from '../common/'


const DateEnd = (props) => {
    
    return (
      <div>
        <h4>Choix de la date de retour!</h4>
        <Calendar
            value={props.valueEndDate}
            minDate={props.currentStartDate}
            onChange={props.onChangeEnd}
        />
        <ul className ="HourTime">
          <li onClick={()=> props.setEndTime('6h')} className={props.endTime === '6h' ? "activeHour" : ""}>6h</li>
          <li onClick={()=> props.setEndTime('8h')} className={props.endTime === '8h' ? "activeHour" : ""}>8h</li>
          <li onClick={()=> props.setEndTime('10h')} className={props.endTime === '10h' ? "activeHour" : ""}>10h</li>
          <li onClick={()=> props.setEndTime('12h')} className={props.endTime === '12h' ? "activeHour" : ""}>12h</li>
          <li onClick={()=> props.setEndTime('14h')} className={props.endTime === '14h' ? "activeHour" : ""} >14h</li>
          <li onClick={()=> props.setEndTime('16h')} className={props.endTime === '16h' ? "activeHour" : ""}>16h</li>
          <li onClick={()=> props.setEndTime('18h')} className={props.endTime === '18h' ? "activeHour" : ""}>18h</li>
          <li onClick={()=> props.setEndTime('20h')} className={props.endTime === '20h' ? "activeHour" : ""}>20h</li>
          <li onClick={()=> props.setEndTime('22h')} className={props.endTime === '22h' ? "activeHour" : ""}>22h</li>
        </ul>
        <div className = "ButtonOk">
          <Button
              text = "OK"
              onClick= { () => props.setActiveScreen(true)}/>
        </div>
      </div> 
    );
  }

  export default DateEnd

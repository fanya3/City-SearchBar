import React from "react";
import Calendar from 'react-calendar/dist/entry.nostyle'
// import Calendar from 'react-calendar'
import { Button } from '../common/'


/** DATEEND | display of the dates of arrival
 * @param {Props} props.currentStartDate - date of today, as the minimum date for calendar
 * 
 * @param {Props} props.valueStartDate - value of the date of departure for the calendar component
 * 
 * @param {Props} props.valueEndDate - value of the date of arrival for the calendar component 
 * 
 * @param {Props} props.onChangeStart - specific function of the calendar module to change the date of departure inside
 * 
 * @param {Props} props.onChangeEnd - specific function of the calendar module to change the date of arrival inside
 * 
 * @param {Props} props.startTime - state with value of the time of departure 
 * 
 * @param {Props} props.endTime - state with value of the time of arrival 
 * 
 * @param {Props} props.setStartTime - function to set the value of startTime 
 * 
 * @param {Props} props.setEndTime - function to set the value of endTime
 * 
 * @param {Props} props.setActiveScreen - function to switch on top z-index the active screen (for mobile)
 * */

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

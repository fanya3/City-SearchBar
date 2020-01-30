import React from "react";
// import Calendar from 'react-calendar'
import Calendar from 'react-calendar/dist/entry.nostyle'
import { Button } from '../common/'


/** DATESTART | display of the dates of departure
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

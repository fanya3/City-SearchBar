import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar'

import { getSpecificCity, getPopularCities, getCitiesFrom } from './CallApi'
import { Card } from '../common/'
import CityEnd from './CityEnd'
import CityStart from './CityStart'
import Form from './Form'

import "../../assets/css/homepage.scss";
import "../../assets/css/calendar.scss";
import DinoTictactrip  from "../../assets/icons/dino-tictactrip.svg";


// 
// value ={`${props.endDate} à partir de ${props.endTime}`}
// value ={`${props.startDate} à partir de ${props.startTime}`}

const Homepage = () => {

  const [activeInput, setActiveInput] = useState("welcome");

  const [chosenStartCity, setChosenStartCity] = useState("");
  const [chosenEndCity, setChosenEndCity] = useState("");

  const [popularCities, setPopularCities] = useState([]);
  const [citiesFrom, setCitiesFrom] = useState([]);
  const [specificStartCity, setSpecificStartCity] = useState("");
  const [specificEndCity, setSpecificEndCity] = useState("");

  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  



  ////// change le champ actif 
  const handleChangeInput = value => {
    setActiveInput(value);
  };

  ////// récupère les villes les + populaires par défaut au montage du component
  const getDataPopularCities = () => {
    getPopularCities()
    .then(res => (setPopularCities(res)));
  };
  
  ////// récupère les villes les + populaires selon la ville de départ
  const getDataCitiesFrom = () => {
    getCitiesFrom(chosenStartCity)
      .then(res => (setCitiesFrom(res)));
  };

      

 //// lance la recherche de la ville de départ selon la valeur de l'input
  const handleChosenStartCity = e => {
    setChosenStartCity(e.target.value);
    if (e.target.value.length >= 1) {
      getSpecificCity(chosenStartCity)
             .then(res => (setSpecificStartCity(res)))
    } else if (e.target.value.length < 1) {
        setSpecificStartCity("")
    }
  };
  
  ////// lance la recherche de la ville d'arrivée selon la valeur de l'input
  const handleChosenEndCity = e => {
    setChosenEndCity(e.target.value);
    if (e.target.value.length >= 1) {
      getSpecificCity(chosenEndCity)
      .then(res => (setSpecificEndCity(res)))
    } else if (e.target.value.length < 1) {
      setSpecificEndCity("")
    }
  };
  
  
    useEffect(() => {
      getDataPopularCities()
    }, []);
    
    
    const currentStartDate = new Date()
    const ValidDate = (date, setDate, newInput) => {
      const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      const newDate = date.toLocaleDateString(undefined, options)
      setDate(newDate, handleChangeInput(newInput))
    }
    
    let FinalStartDate =  () => {
      if (startTime.length > 0 ) {
      return `${startDate} à partir de ${startTime}`
      } else {
      return startDate
  }
}

  let FinalEndDate =  () => {
    if (endTime.length > 0 ) {
    return `${endDate} à partir de ${endTime}`
    } else {
    return endDate
  }
}


  console.log('FinalStartDate', FinalStartDate())
  console.log('FinalEndDate', FinalEndDate())

  const DateStart = () => {
    
    return (
      <div>
        <p>Choix de la date de départ!</p>
        <Calendar
            value={currentStartDate}
            minDate={currentStartDate}
            onChange={date => ValidDate(date, setStartDate, "dateStart")}
        />
        <ul className ="HourTime">
          <li onClick={()=> setStartTime('6h')} >6h</li>
          <li onClick={()=> setStartTime('8h')} >8h</li>
          <li onClick={()=> setStartTime('10h')} >10h</li>
          <li onClick={()=> setStartTime('12h')} >12h</li>
          <li onClick={()=> setStartTime('14h')} >14h</li>
          <li onClick={()=> setStartTime('16h')} >16h</li>
          <li onClick={()=> setStartTime('18h')} >18h</li>
          <li onClick={()=> setStartTime('20h')} >20h</li>
          <li onClick={()=> setStartTime('22h')} >22h</li>
        </ul>
      </div>
    );
  }

  const DateEnd = () => {
    
    return (
      <div>
        <p>Choix de la date d'arrivée!</p>
        <Calendar
            value={currentStartDate}
            minDate={currentStartDate}
            onChange={date => ValidDate(date, setEndDate, "dateEnd")}
        />
        <ul className ="HourTime">
          <li onClick={()=> setEndTime('6h')} >6h</li>
          <li onClick={()=> setEndTime('8h')} >8h</li>
          <li onClick={()=> setEndTime('10h')} >10h</li>
          <li onClick={()=> setEndTime('12h')} >12h</li>
          <li onClick={()=> setEndTime('14h')} >14h</li>
          <li onClick={()=> setEndTime('16h')} >16h</li>
          <li onClick={()=> setEndTime('18h')} >18h</li>
          <li onClick={()=> setEndTime('20h')} >20h</li>
          <li onClick={()=> setEndTime('22h')} >22h</li>
        </ul>
      </div>
    );
  }

  const Passenger = () => <p>Qui voyage?</p>;
  const Welcome = () => <p>Bienvenue sur tictactrip!</p>;

 

  ////// appelle le component selon le champ actif 
  const getInputContent = () => {
    switch (activeInput) {
      case "cityStart":
        return <CityStart 
          popularCities = {popularCities}
          handleChangeInput = {handleChangeInput}
          chosenStartCity = {chosenStartCity}
          chosenEndCity = {chosenEndCity}
          specificStartCity = {specificStartCity}
          setChosenStartCity = {setChosenStartCity}/>;
      case "cityEnd":
        return <CityEnd 
          popularCities = {popularCities}
          citiesFrom = {citiesFrom}
          handleChangeInput = {handleChangeInput}
          getDataCitiesFrom = {getDataCitiesFrom}
          chosenStartCity = {chosenStartCity}
          chosenEndCity = {chosenEndCity}
          specificEndCity = {specificEndCity}
          setChosenEndCity = {setChosenEndCity}/>;
      case "dateStart":
        return <DateStart/>;
      case "dateEnd":
        return <DateEnd />;
      case "passenger":
        return <Passenger />;
      case "welcome":
        return <Welcome />;
      default:
        return <Welcome />;
    }
  };



    return (

      <>
       {console.log('endTime', endTime)}
       {console.log('startTime', startTime)}
 
        <div className="HomepageContainer">
          <Card title="Quel est votre trajet ?">
            <Form
              activeInput = {activeInput}
              handleChangeInput = {handleChangeInput}
              chosenStartCity = {chosenStartCity}
              handleChosenStartCity = {handleChosenStartCity}
              chosenEndCity =  {chosenEndCity}
              handleChosenEndCity = {handleChosenEndCity} 
              startDate = {startDate}
              endDate = {endDate}
              finalStartDate = {FinalStartDate()}
              finalEndDate = {FinalEndDate()}
            >
            </Form> 
          </Card>
          
          <Card>
            {getInputContent()}
          </Card>

          <img className="Dino" src={DinoTictactrip} alt="Dino-Tictactrip" />
        </div>
      </>
    );
    
  }

  export default Homepage
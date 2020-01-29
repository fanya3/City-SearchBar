import React, { useState, useEffect } from "react";

import { getSpecificCity, getPopularCities, getCitiesFrom } from './CallApi'
import { Button, Card } from '../common/'
import CityEnd from './CityEnd'
import CityStart from './CityStart'
import DateStart from './DateStart'
import DateEnd from './DateEnd'
import Passenger from './Passenger'
import Form from './Form'
import Welcome from './Welcome'

import "../../assets/css/homepage.scss";
import "../../assets/css/calendar.scss";
import DinoTictactrip  from "../../assets/icons/dino-tictactrip.svg";



const Homepage = () => {

  const [activeInput, setActiveInput] = useState("welcome");
  const [activeScreen, setActiveScreen] = useState(false);

  const [chosenStartCity, setChosenStartCity] = useState("");
  const [chosenEndCity, setChosenEndCity] = useState("");

  const [popularCities, setPopularCities] = useState([]);
  const [citiesFrom, setCitiesFrom] = useState([]);
  const [specificStartCity, setSpecificStartCity] = useState([]);
  const [specificEndCity, setSpecificEndCity] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [valueStartDate, setValueStartDate] = useState("");
  const [valueEndDate, setValueEndDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const [chosenPassenger, setChosenPassenger] = useState([
    "adulte (26-59)", "adulte (26-59)"
  ]);
  

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
  

  // modification du type de passager
  const validateChosenPassenger = (e) => {
    let i =  e.target.id
    let modifiedPassenger = chosenPassenger; 
    modifiedPassenger[i] = e.target.value;
    setChosenPassenger([ ...chosenPassenger], modifiedPassenger)
  }



  
    useEffect(() => {
      getDataPopularCities()
    },[]);
    
    
    const currentStartDate = new Date()
    const ValidDate = (date, setDate, newInput) => {
      const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      const newDate = date.toLocaleDateString(undefined, options)
      setDate(newDate, handleChangeInput(newInput))
    }

 ////// concatène le jour et l'heure de départ
    const FinalStartDate =  () => {
      if (startTime.length > 0 ) {
      return `${startDate} à partir de ${startTime}`
      } else {
      return startDate
  }
}

 ////// concatène le jour et l'heure d'arrivée
  const FinalEndDate =  () => {
    if (endTime.length > 0 ) {
    return `${endDate} à partir de ${endTime}`
    } else {
    return endDate
  }
}

////// intervertit les villes de départ et d'arrivée
////// change les champs actifs uniquement si l'utilisateur est sur une des 2 dates
 const switchCities = () => {

    if (chosenStartCity.length > 0 || chosenEndCity.length > 0) {
    const temporaryStartCity = chosenStartCity 
    const temporaryEndCity = chosenEndCity
    setChosenStartCity(temporaryEndCity)
    setChosenEndCity(temporaryStartCity) 

    const temporarySpecificStartCity = specificStartCity
    const temporarySpecificEndCity = specificEndCity
    setSpecificStartCity(temporarySpecificEndCity)
    setSpecificEndCity(temporarySpecificStartCity)  
    }

    if (activeInput === "cityStart") {
      handleChangeInput("cityEnd")
    } else if (activeInput === "cityEnd") {
      handleChangeInput("cityStart")
  }
}

const onChangeStart = (date) => {
 ValidDate(date, setStartDate, "dateStart")
 setValueStartDate(date)
}
const onChangeEnd = (date) => {
  ValidDate(date, setEndDate, "dateEnd")
  setValueEndDate(date)
 }



 
  ////// appelle le component selon le champ actif 
  const getInputContent = () => {
    switch (activeInput) {
      case "cityStart":
        return <CityStart 
          popularCities = {popularCities}
          handleChangeInput = {handleChangeInput}
          activeScreen = {activeScreen}
          setActiveScreen = {setActiveScreen}
          chosenStartCity = {chosenStartCity}
          chosenEndCity = {chosenEndCity}
          specificStartCity = {specificStartCity}
          setChosenStartCity = {setChosenStartCity}/>;
      case "cityEnd":
        return <CityEnd 
          popularCities = {popularCities}
          citiesFrom = {citiesFrom}
          handleChangeInput = {handleChangeInput}
          activeScreen = {activeScreen}
          setActiveScreen = {setActiveScreen}
          getDataCitiesFrom = {getDataCitiesFrom}
          chosenStartCity = {chosenStartCity}
          chosenEndCity = {chosenEndCity}
          specificStartCity = {specificStartCity}
          specificEndCity = {specificEndCity}
          setChosenEndCity = {setChosenEndCity}
          setSpecificEndCity = {setSpecificEndCity}/>;
      case "dateStart":
        return <DateStart
        activeScreen = {activeScreen}
        setActiveScreen = {setActiveScreen}
        startTime = {startTime}
        setStartTime = {setStartTime}
        valueStartDate = {valueStartDate}
        currentStartDate = {currentStartDate}
        onChangeStart = {onChangeStart}/>;
      case "dateEnd":
        return <DateEnd
        activeScreen = {activeScreen}
        setActiveScreen = {setActiveScreen}
        endTime = {endTime}
        setEndTime = {setEndTime}
        valueEndDate = {valueEndDate}
        currentStartDate = {currentStartDate}
        onChangeEnd = {onChangeEnd}/>;
      case "passenger":
        return <Passenger
        activeScreen = {activeScreen}
        setActiveScreen = {setActiveScreen} 
        chosenPassenger = {chosenPassenger}
        validateChosenPassenger = {validateChosenPassenger}/>;
      case "welcome":
        return <Welcome 
        setActiveScreen = {setActiveScreen}/>;
      default:
        return <Welcome 
        setActiveScreen = {setActiveScreen}/>;
    }
  };



    return (

      <>
 
        <div className="HomepageContainer">
          <div className={activeScreen ? "cardFormFirst" : "cardForm"}>
          <Card>
            <h4>Quel est votre trajet ?</h4>
            <Form
              activeScreen = {activeScreen}
              setActiveScreen = {setActiveScreen}
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
              switchCities = {switchCities}
            >
            </Form> 
          </Card>
          </div>

          <div className="cardResult">
            <Card>
              {getInputContent()}
            </Card>
          </div>

          <img className="Dino" src={DinoTictactrip} alt="Dino-Tictactrip" />
        </div>
      </>
    );
    
  }

  export default Homepage
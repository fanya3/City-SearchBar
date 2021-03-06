import React, { useState, useEffect } from "react";

import { getSpecificCity, getPopularCities, getCitiesFrom } from './CallApi'
import { Card } from '../common/'
import CityEnd from './CityEnd'
import CityStart from './CityStart'
import DateStart from './DateStart'
import DateEnd from './DateEnd'
import Passenger from './Passenger'
import Form from './Form'
import Welcome from './Welcome'

import "../../assets/css/homepage.scss";
import "../../assets/css/calendar.scss";
import "../../assets/css/button.scss";
import "../../assets/css/card.scss";
import "../../assets/css/form.scss";

import DinoTictactrip  from "../../assets/icons/dino-tictactrip.svg";


/** HOMEPAGE | Central component to display the homepage */


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

  const [chosenPassenger, setChosenPassenger] = useState([]);
  const [newPassenger, setNewPassenger] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedIndex, setSelectedIndex] = useState();
  

  let totalPassengers = `${chosenPassenger.length} passager(s)`;



  /** @param {text} value - change the active input field to display a section */
  const handleChangeInput = value => {
    setActiveInput(value);
  };


  /**  - set  by default the state with the name of the 5 most popular cities */
  const getDataPopularCities = () => {
    getPopularCities()
    .then(res => (setPopularCities(res)));
  };
  
  /**  - set  by default the state with the name of the 5 most popular cities based on a city of departure */
  const getDataCitiesFrom = () => {
    getCitiesFrom(chosenStartCity)
      .then(res => (setCitiesFrom(res)));
  };
      
/**  - set the state with the name the searched city of departure, based on the event and clean th state when name is erased */
  const handleChosenStartCity = e => {
    setChosenStartCity(e.target.value);
    if (e.target.value.length >= 1) {
      getSpecificCity(chosenStartCity)
             .then(res => (setSpecificStartCity(res)))
    } else if (e.target.value.length < 1) {
        setSpecificStartCity("")
    }
  };
  
  /**  - set the state with the name the searched city of arrival, based on the event and clean th state when name is erased */
  const handleChosenEndCity = e => {
    setChosenEndCity(e.target.value);
    if (e.target.value.length >= 1) {
      getSpecificCity(chosenEndCity)
      .then(res => (setSpecificEndCity(res)))
    } else if (e.target.value.length < 1) {
      setSpecificEndCity("")
    }
  };



  /**  - function to modify a passenger */
  const validateChosenPassenger = (value) => {
    let modifiedPassenger = [...chosenPassenger];
    modifiedPassenger[selectedIndex] = value;
    setChosenPassenger(modifiedPassenger)
  }

  /**  - function to add a passenger */
  const addNewPassenger = (selectedOption) => {
    setSelectedOption(selectedOption)
    setChosenPassenger([ ...chosenPassenger, selectedOption])
    setNewPassenger(false)
    setSelectedOption("")
  }


  /**  - function to delete a passenger */
  const deletePassenger = (i) => {
    const temporaryPassenger = [...chosenPassenger]
    temporaryPassenger.splice(i, 1)
    setChosenPassenger(temporaryPassenger)
  }


  /**  - set the state of popular cities, when component Homepage is mounted */
    useEffect(() => {
      getDataPopularCities()
    },[]);
    
    useEffect(() => {

    },[selectedIndex]);

   /**  - defining the current date  */  
    const currentStartDate = new Date()
        
   /**  - a function that set the date received from the calendar to be easy to read for user and switch to next input */ 
    const ValidDate = (date, setDate, newInput) => {
      const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      const newDate = date.toLocaleDateString(undefined, options)
      setDate(newDate, handleChangeInput(newInput))
    }

 /**  - a function that combine the date and the time of departure to displayed on the form */
    const FinalStartDate =  () => {
      if (startTime.length > 0 ) {
      return `${startDate} à partir de ${startTime}`
      } else {
      return startDate
  }
}
 /**  - a function that combine the date and the time of arrival to displayed on the form */
  const FinalEndDate =  () => {
    if (endTime.length > 0 ) {
    return `${endDate} à partir de ${endTime}`
    } else {
    return endDate
  }
}

/**  - function to switch cities of arrival and departure and change active input on cities only if user is on the other date input*/
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

/**  - specific function of the calendar module to change the date of departure inside and in the corresponding state */
const onChangeStart = (date) => {
 ValidDate(date, setStartDate, "dateStart")
 setValueStartDate(date)
}
const onChangeEnd = (date) => {
  ValidDate(date, setEndDate, "dateEnd")
  setValueEndDate(date)
 }


 /**  - switch case to call the component based on which input of the form is active*/
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
        validateChosenPassenger = {validateChosenPassenger}
        addNewPassenger = {addNewPassenger}
        setNewPassenger = {setNewPassenger}
        newPassenger = {newPassenger}
        deletePassenger = {deletePassenger}
        selectedOption = {selectedOption}
        setSelectedOption = {setSelectedOption}
        setSelectedIndex = {setSelectedIndex}
       />;
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
      {console.log('selectedIndex', selectedIndex)}
      {console.log('chosenPassenger', chosenPassenger)}
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
              totalPassengers = {totalPassengers}
            >
            </Form> 
          </Card>
          </div>

          <div className="cardResult">
            <Card>
              {getInputContent()}
            </Card>
          </div>

          <img className="Dino" src={DinoTictactrip} alt="Dino-Tictactrip"/>
        </div>
      </>
    );
    
  }

  export default Homepage
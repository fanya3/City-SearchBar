import React, { useState, useEffect } from "react";
import { getSpecificCity, getPopularCities, getCitiesFrom } from './CallApi'
import { Card } from '../common/'
import CityEnd from './CityEnd'
import CityStart from './CityStart'
import Form from './Form'

import "../../assets/css/homepage.scss";
import DinoTictactrip  from "../../assets/icons/dino-tictactrip.svg";



const Homepage = () => {

  const [activeInput, setActiveInput] = useState("welcome");

  const [chosenStartCity, setChosenStartCity] = useState("");
  const [chosenEndCity, setChosenEndCity] = useState("");

  const [popularCities, setPopularCities] = useState([]);
  const [citiesFrom, setCitiesFrom] = useState([]);
  const [specificStartCity, setSpecificStartCity] = useState([]);
  const [specificEndCity, setSpecificEndCity] = useState([]);




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
    }
  };
  
  ////// lance la recherche de la ville d'arrivée selon la valeur de l'input
  const handleChosenEndCity = e => {
    setChosenEndCity(e.target.value);
    if (e.target.value.length >= 1) {
      getSpecificCity(chosenEndCity)
      .then(res => (setSpecificEndCity(res)))
    }
  };
  
  
    useEffect(() => {
      getDataPopularCities()
    }, []);
    

  const DateStart = () => <p>Choix de la date de départ!</p>;
  const DateEnd = () => <p>Choix de la date d'arrivée!</p>;
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
        return <DateStart />;
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
        <div className="HomepageContainer">
          <Card title="Quel est votre trajet ?">
            <Form
              activeInput = {activeInput}
              handleChangeInput = {handleChangeInput}
              chosenStartCity = {chosenStartCity}
              handleChosenStartCity = {handleChosenStartCity}
              chosenEndCity =  {chosenEndCity}
              handleChosenEndCity = {handleChosenEndCity} 
            />  
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
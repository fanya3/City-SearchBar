import React from "react";


  const CityStart = (props) => {

    const capitalize = (word) => {
      if (typeof word !== 'string') return ''
      return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const DisplayCityStartData = () => {

      if (props.chosenEndCity.length === 0) {

        if ((props.specificStartCity.length === 0)) {
          return (
            <>
              <h5>villes les + populaires</h5>
              <div className="citiesList">
              <ul>
                {props.popularCities && props.popularCities.map((city,i) => (
                    <li key={i} className={props.chosenStartCity === capitalize(city.unique_name) ? "activeCity" : ""} onClick={() => props.setChosenStartCity(capitalize(city.unique_name), props.handleChangeInput("cityEnd", props.setActiveScreen(true)))}>
                      {city.local_name}</li>
                  ))}
              </ul>
              </div>
            </>
          );
      } else if (props.specificStartCity.length > 0) {
        return (
          <>
            <h5>ville recherchée</h5>
            <div className="citiesList">
            <ul> {props.specificStartCity && props.specificStartCity.map ((city,i) => (
                (<li key={i} className={props.chosenStartCity === capitalize(city.unique_name) ? "activeCity" : ""} onClick={() => props.setChosenStartCity(capitalize(city.unique_name), props.handleChangeInput("cityEnd",props.setActiveScreen(true)))}>
                {city.local_name}</li>)
                
            ))}
            </ul>
            </div>
          </>
        );
      }
    } else if (props.chosenEndCity.length > 0) {

      if ((props.chosenStartCity.length === 0 || props.specificStartCity.length === 0)) {
        return (
          <>
            <h5>villes les + populaires</h5>
            <div className="citiesList">
            <ul>
              {props.popularCities && props.popularCities.map((city,i) => (
                  <li key={i} className={props.chosenStartCity === capitalize(city.unique_name) ? "activeCity" : ""} onClick={() => props.setChosenStartCity(capitalize(city.unique_name), props.handleChangeInput("dateStart", props.setActiveScreen(true)))}>
                    {city.local_name}</li>
                ))}
            </ul>
            </div>
          </>
        );
      } else if (props.specificStartCity.length > 0) {
        return (
          <>
            <h5>ville recherchée</h5>
            <div className="citiesList">
            <ul> {props.specificStartCity && props.specificStartCity.map ((city,i) => (
                (<li key={i} className={props.chosenStartCity === capitalize(city.unique_name) ? "activeCity" : ""} onClick={() => props.setChosenStartCity(capitalize(city.unique_name), props.handleChangeInput("dateStart", props.setActiveScreen(true)))}>
                {city.local_name}</li>)
                
            ))}
            </ul>
            </div>
          </>
        );
      }
    }}
      
   

    return (
      <div className="ResultsContainer">
      <p>Choix de la ville de départ!</p> 
      {DisplayCityStartData()}
      </div>
    );

  };



  export default CityStart
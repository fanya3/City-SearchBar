import React from "react";


  const CityStart = (props) => {

    const DisplayCityStartData = () => {

      if (props.chosenEndCity.length === 0) {

        if ((props.specificStartCity.length === 0)) {
          return (
            <>
              <h5>villes les + populaires</h5>
              <ul>
                {props.popularCities && props.popularCities.map((city,i) => (
                    <li key={i} onClick={() => props.setChosenStartCity(city.unique_name, props.handleChangeInput("cityEnd"))}>
                      {city.local_name}</li>
                  ))}
              </ul>
            </>
          );
      } else if (props.specificStartCity.length > 0) {
        return (
          <>
            <h5>ville recherchée</h5>
            <ul> {props.specificStartCity && props.specificStartCity.map ((city,i) => (
                (<li key={i} onClick={() => props.setChosenStartCity(city.unique_name, props.handleChangeInput("cityEnd"))}>
                {city.local_name}</li>)
                
            ))}
            </ul>
          </>
        );
      }
    } else if (props.chosenEndCity.length > 0) {

      if ((props.chosenStartCity.length === 0 || props.specificStartCity.length === 0)) {
        return (
          <>
            <h5>villes les + populaires</h5>
            <ul>
              {props.popularCities && props.popularCities.map((city,i) => (
                  <li key={i} onClick={() => props.setChosenStartCity(city.unique_name, props.handleChangeInput("dateStart"))}>
                    {city.local_name}</li>
                ))}
            </ul>
          </>
        );
      } else if (props.specificStartCity.length > 0) {
        return (
          <>
            <h5>ville recherchée</h5>
            <ul> {props.specificStartCity && props.specificStartCity.map ((city,i) => (
                (<li key={i} onClick={() => props.setChosenStartCity(city.unique_name, props.handleChangeInput("dateStart"))}>
                {city.local_name}</li>)
                
            ))}
            </ul>
          </>
        );
      }
    }}
      
   

    return (
      <div>
      <p>Choix de la ville de départ!</p> 
      {DisplayCityStartData()}
      </div>
    );

  };



  export default CityStart
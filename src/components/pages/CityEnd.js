import React, {useEffect} from "react";


const CityEnd = (props) => {


  const capitalize = (word) => {
    if (typeof word !== 'string') return ''
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  useEffect(() => {
    props.getDataCitiesFrom(props.chosenStartCity)
  },[]);


  
    const DisplayCityEndData = () => {      


      if (props.chosenStartCity.length === 0) {

        if (props.specificEndCity.length === 0) {
          return (
            <>
              <h5>Villes les plus populaires</h5>
              <div className="citiesList">
                <ul>
                  {props.popularCities && props.popularCities.map((city,i) => (
                      <li key={i} className={props.chosenEndCity === capitalize(city.unique_name) ? "activeCity" : ""} onClick={() => props.setChosenEndCity(capitalize(city.unique_name), props.handleChangeInput("cityStart", props.setActiveScreen(true)))}>
                        {city.local_name}
                      </li>
                    ))}
                </ul>
              </div>
            </>
          );
        } else if (props.specificEndCity.length > 0) {
          return (
            <>
              <h5>Ville recherchée</h5>
              <div className="citiesList">
                <ul>{props.specificEndCity && props.specificEndCity.map((city,i) => (
                      <li  key={i} className={props.chosenEndCity === capitalize(city.unique_name) ? "activeCity" : ""} onClick={() => props.setChosenEndCity(capitalize(city.unique_name), props.handleChangeInput("cityStart", props.setActiveScreen(true)))}>
                        {city.local_name}
                      </li>
                    ))
                    }
                </ul>
              </div>
            </>
          );
        }


      } else if (props.chosenStartCity.length > 0){

       if (props.chosenEndCity.length === 0 & props.specificEndCity.length === 0) {
        return (
          <>
            <h5>Villes les + populaires au départ de {props.chosenStartCity}</h5>
            <div className="citiesList">
              <ul>
                {props.citiesFrom && props.citiesFrom.map((city,i) => (
                  <li key={i} className={props.chosenEndCity === capitalize(city.unique_name) ? "activeCity" : ""} onClick={() => props.setChosenEndCity(capitalize(city.unique_name), props.handleChangeInput("dateStart", props.setActiveScreen(true)))}>
                      {city.local_name}
                    </li>
                  ))}
              </ul>
            </div>
          </>
        );
      } else if (props.specificEndCity.length > 0) {
        return (
          <>
            <h5>Ville recherchée</h5>
            <div className="citiesList">
              <ul>{props.specificEndCity && props.specificEndCity.map((city,i) => (
                    <li  key={i} className={props.chosenEndCity === capitalize(city.unique_name) ? "activeCity" : ""} onClick={() => props.setChosenEndCity(capitalize(city.unique_name), props.handleChangeInput("dateStart", props.setActiveScreen(true)))}>
                      {city.local_name}
                    </li>
                  ))
                  }
              </ul>
            </div>
          </>
        );
      } else if ((props.chosenEndCity.length > 0) & (props.specificEndCity.length === 0)) {
        return (
          <>
            <h5>Villes les plus populaires au départ de {props.chosenStartCity}</h5>
            <div className="citiesList">
              <ul>
                {props.citiesFrom && props.citiesFrom.map((city,i) => (
                  <li key={i} className={props.chosenEndCity === capitalize(city.unique_name) ? "activeCity" : ""} onClick={() => props.setChosenEndCity(capitalize(city.unique_name), props.handleChangeInput("dateStart", props.setActiveScreen(true)))}>
                      {city.local_name}
                    </li>
                  ))}
              </ul>
            </div>
          </>
        );
    }
  }  }

    return (
      <div className="ResultsContainer">
        <h4>Choix de la ville d'arrivée!</h4> 
        {DisplayCityEndData()}
      </div>
    );
  };



  export default CityEnd
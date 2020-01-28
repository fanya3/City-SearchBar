import React, {useEffect} from "react";




const CityEnd = (props) => {

  useEffect(() => {
    props.getDataCitiesFrom(props.chosenStartCity)
  }, []);


  
    const DisplayCityEndData = () => {      


      if (props.chosenStartCity.length === 0) {

        if (props.specificEndCity.length === 0) {
          return (
            <>
              <h5>villes les + populaires</h5>
              <ul>
                {props.popularCities && props.popularCities.map((city,i) => (
                    <li key={i} onClick={() => props.setChosenEndCity(city.unique_name, props.handleChangeInput("cityStart"))}>
                      {city.local_name}
                    </li>
                  ))}
              </ul>
            </>
          );
        } else if (props.specificEndCity.length > 0) {
          return (
            <>
              <h5>ville recherchée</h5>
              <ul>{props.specificEndCity && props.specificEndCity.map((city,i) => (
                    <li  key={i} onClick={() => props.setChosenEndCity(city.unique_name, props.handleChangeInput("cityStart"))}>
                      {city.local_name}
                    </li>
                  ))
                  }
              </ul>
            </>
          );
        }


      } else if (props.chosenStartCity.length > 0){

       if (props.chosenEndCity.length === 0 & props.specificEndCity.length === 0) {
        return (
          <>
            <h5>villes les + populaires au départ de {props.chosenStartCity}</h5>
            <ul>
              {props.citiesFrom && props.citiesFrom.map((city,i) => (
                <li key={i} onClick={() => props.setChosenEndCity(city.unique_name, props.handleChangeInput("dateStart"))}>
                    {city.local_name}
                  </li>
                ))}
            </ul>
          </>
        );
      } else if (props.specificEndCity.length > 0) {
        return (
          <>
            <h5>ville recherchée</h5>
            <ul>{props.specificEndCity && props.specificEndCity.map((city,i) => (
                  <li  key={i} onClick={() => props.setChosenEndCity(city.unique_name, props.handleChangeInput("dateStart"))}>
                    {city.local_name}
                  </li>
                ))
                }
            </ul>
          </>
        );
      } else if ((props.chosenEndCity.length > 0) & (props.specificEndCity.length === 0)) {
        return (
          <>
            <h5>villes les + populaires au départ de {props.chosenStartCity}</h5>
            <ul>
              {props.citiesFrom && props.citiesFrom.map((city,i) => (
                <li key={i} onClick={() => props.setChosenEndCity(city.unique_name, props.handleChangeInput("dateStart"))}>
                    {city.local_name}
                  </li>
                ))}
            </ul>
          </>
        );
    }
  }  }

    return (
      <div>
      <p>Choix de la ville d'arrivée!</p> 
      {DisplayCityEndData()}
      </div>
    );
  };



  export default CityEnd
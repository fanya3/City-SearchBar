import React, { useEffect } from "react";


/** CITYEND | display of cities of arrival
 * @param {Props} props.chosenStartCity - state with the name of the city of departure
 * 
 * @param {Props} props.chosenEndCity - state with the name of the city of arrival
 * 
 * @param {Props} props.popularCities - state with the name of the 5 most popular cities
 * 
 * @param {Props} props.citiesFrom - state with the name of the 5 most popular cities based on a city of departure
 * 
 * @param {Props} props.specificStartCity - state with the result of the research of a specific city of departure
 * 
 * @param {Props} props.specificEndCity - state with the result of the research of a specific city of arrival
 * 
 * @param {Props} props.setChosenStartCity - function to set the value of chosenStartCity
 * 
 * @param {Props} props.setChosenEndCity - function to set the value of chosenEndCity
 * 
 * @param {Props} props.handleChangeInput - function to choose which section is displayed on the second card
 * 
 * @param {Props} props.setActiveScreen - function to switch on top z-index the active screen (for mobile)
 */



const CityEnd = (props) => {


/** CAPITALIZE | function to capitalize first letter
* @param {text} word - name of the city */

  const capitalize = word => {
    if (typeof word !== "string") return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  useEffect(() => {
    props.getDataCitiesFrom(props.chosenStartCity);
  }, []);

  
  const DisplayCityEndData = () => {
    if (props.chosenStartCity.length === 0) {
      if (props.specificEndCity.length === 0) {
        return (
          <>
            <h5>Villes les plus populaires</h5>
            <div className="citiesList">
              <ul>
                {props.popularCities &&
                  props.popularCities.map((city, i) => (
                    <li
                      key={i}
                      className={
                        props.chosenEndCity === capitalize(city.unique_name)
                          ? "activeCity"
                          : ""
                      }
                      onClick={() =>
                        props.setChosenEndCity(
                          capitalize(city.unique_name),
                          props.handleChangeInput(
                            "cityStart",
                            props.setActiveScreen(true)
                          )
                        )
                      }
                    >
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
              <ul>
                {props.specificEndCity &&
                  props.specificEndCity.map((city, i) => (
                    <li
                      key={i}
                      className={
                        props.chosenEndCity === capitalize(city.unique_name)
                          ? "activeCity"
                          : ""
                      }
                      onClick={() =>
                        props.setChosenEndCity(
                          capitalize(city.unique_name),
                          props.handleChangeInput(
                            "cityStart",
                            props.setActiveScreen(true)
                          )
                        )
                      }
                    >
                      {city.local_name}
                    </li>
                  ))}
              </ul>
            </div>
          </>
        );
      }
    } else if (props.chosenStartCity.length > 0) {
      if (
        (props.chosenEndCity.length === 0) &
        (props.specificEndCity.length === 0)
      ) {
        return (
          <>
            <h5>
              Villes les + populaires au départ de {props.chosenStartCity}
            </h5>
            <div className="citiesList">
              <ul>
                {props.citiesFrom &&
                  props.citiesFrom.map((city, i) => (
                    <li
                      key={i}
                      className={
                        props.chosenEndCity === capitalize(city.unique_name)
                          ? "activeCity"
                          : ""
                      }
                      onClick={() =>
                        props.setChosenEndCity(
                          capitalize(city.unique_name),
                          props.handleChangeInput(
                            "dateStart",
                            props.setActiveScreen(true)
                          )
                        )
                      }
                    >
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
              <ul>
                {props.specificEndCity &&
                  props.specificEndCity.map((city, i) => (
                    <li
                      key={i}
                      className={
                        props.chosenEndCity === capitalize(city.unique_name)
                          ? "activeCity"
                          : ""
                      }
                      onClick={() =>
                        props.setChosenEndCity(
                          capitalize(city.unique_name),
                          props.handleChangeInput(
                            "dateStart",
                            props.setActiveScreen(true)
                          )
                        )
                      }
                    >
                      {city.local_name}
                    </li>
                  ))}
              </ul>
            </div>
          </>
        );
      } else if (
        (props.chosenEndCity.length > 0) &
        (props.specificEndCity.length === 0)
      ) {
        return (
          <>
            <h5>
              Villes les plus populaires au départ de {props.chosenStartCity}
            </h5>
            <div className="citiesList">
              <ul>
                {props.citiesFrom &&
                  props.citiesFrom.map((city, i) => (
                    <li
                      key={i}
                      className={
                        props.chosenEndCity === capitalize(city.unique_name)
                          ? "activeCity"
                          : ""
                      }
                      onClick={() =>
                        props.setChosenEndCity(
                          capitalize(city.unique_name),
                          props.handleChangeInput(
                            "dateStart",
                            props.setActiveScreen(true)
                          )
                        )
                      }
                    >
                      {city.local_name}
                    </li>
                  ))}
              </ul>
            </div>
          </>
        );
      }
    }
  };

  return (
    <div className="ResultsContainer">
      <h4>Choix de la ville d'arrivée!</h4>
      {DisplayCityEndData()}
    </div>
  );
};

export default CityEnd;

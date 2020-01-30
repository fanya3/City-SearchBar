/**
 * Call API to request Cities.
 */

import axios from "axios";

/** GET | /popular/5 | get a list of the 5 most popular cities on tictactrip */
export const getPopularCities = () => {
  return axios.get(`https://api.comparatrip.eu/cities/popular/5 `).then(res => {
    console.log(`5 popular cities`, res.data);
    return res.data;
  });
};

/** GET | cities/autocomplete/?q=city | get a city based on name
 * @param {text} city - name of the city
 */

export const getSpecificCity = city => {
  return axios
    .get(`https://api.comparatrip.eu/cities/autocomplete/?q=${city}`)
    .then(res => {
      console.log(`searched cities`, res.data);
      return res.data;
    });
};

/** GET | cities/popular/from/city/5 | get a list of the 5 most popular cities available from a specific city
 * @param {text} city - name of the city
 */

export const getCitiesFrom = city => {
  return axios
    .get(`https://api.comparatrip.eu/cities/popular/from/${city}/5`)
    .then(res => {
      console.log(`5 popular cities from ${city}`, res.data);
      return res.data;
    });
};


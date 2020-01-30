/**
 * Call API to request Cities.
 */

import { getSpecificCity, getPopularCities, getCitiesFrom } from '../../src/components/pages/CallApi'

import axios from "axios";


describe('Unit test our SDK functions', () => {
    context(' API direct url + axios functions ', () => { 

    /** GET | testing API direct url */
    it('online API should return the 5 most popular cities', () => {
        cy.request('https://api.comparatrip.eu/cities/popular/5').as('popular');
        cy.get('@popular').should(response => {
            expect(response.body).to.have.length(5);
            expect(response.body[0]).to.have.property('popular', true);
        });
    });

    /** GET | testing axios function  */
    it('Axios function should return the 5 most popular cities', () => {
        getPopularCities().then(response => {
        expect(response).toBeDefined();
        expect(response.body).to.have.length(5);
        expect(response.body[0]).to.have.property('popular', true);
        });
    });



    /** GET | testing API direct url */
    it('online API should return all the destinations when Paris is entered', () => {
        cy.request('https://api.comparatrip.eu/cities/autocomplete/?q=paris').as('search');
        cy.get('@search').should(response => {
            expect(response.body).to.have.length(3);
            expect(response.body[0]).to.have.property('unique_name', 'paris');
        });
    });

    /** GET | testing axios function */
    it('Axios function should return all the destinations when Paris is entered', () => {
        getSpecificCity('paris').then(response => {
            expect(response).toBeDefined();
            expect(response.body).to.have.length(3);
            expect(response.body[0]).to.have.property('unique_name', 'paris');
        });
    });



    /** GET | testing API direct url */
    it('online API should return most popular arrival cities based on another city', () => {
        cy.request('https://api.comparatrip.eu/cities/popular/from/lille/5').as('search');
        cy.get('@search').should(response => {
            expect(response.body).to.have.length(3);
            expect(response.body[0]).to.have.property('popular', true);
        });
    });

    /** GET | testing axios function */
    it('Axios function should return most popular arrival cities based on another city', () => {
        getCitiesFrom('lille').then(response => {
            expect(response).toBeDefined();
            expect(response.body).to.have.length(3);
            expect(response.body[0]).to.have.property('popular', true);
        });
    });


    });
});



// /** GET | cities/autocomplete/?q=city | get a city based on name
//  * @param {text} city - name of the city
//  */

// export const getSpecificCity = city => {
//   return axios
//     .get(`https://api.comparatrip.eu/cities/autocomplete/?q=${city}`)
//     .then(res => {
//       console.log(`searched cities`, res.data);
//       return res.data;
//     });
// };

// /** GET | cities/popular/from/city/5 | get a list of the 5 most popular cities available from a specific city
//  * @param {text} city - name of the city
//  */

// export const getCitiesFrom = city => {
//   return axios
//     .get(`https://api.comparatrip.eu/cities/popular/from/${city}/5`)
//     .then(res => {
//       console.log(`5 popular cities from ${city}`, res.data);
//       return res.data;
//     });
// };


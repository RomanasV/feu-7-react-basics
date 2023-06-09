import { useState } from "react";
import Container from "../../Components/Container/Container";
import CityItem from "../../Components/CityItem/CityItem";

import './CitiesPage.css';

const CitiesPage = () => {
  let citiesData = [
    {
        name: 'Vilnius',
        population: 500000,
        location: {
            continent: 'Europe',
            country: 'Lietuva',
        },
        touristAttractions: ['Gedimino pilies bokstas', 'Vilniaus katedra'],
        isCapital: true,
    },
    {
        name: 'New York',
        population: 8500000,
        location: {
            continent: 'North America',
            country: 'United States',
        },
        touristAttractions: [],
        isCapital: false,
    },
    {
        name: 'Tokyo',
        population: 14000000,
        location: {
            continent: 'Asia',
            country: 'Japan',
        },
        touristAttractions: ['Sensō-ji'],
        isCapital: true,
    },
    {
        name: 'Amsterdam',
        population: 1400000,
        location: {
            continent: 'Europe',
            country: 'Netherlands',
        },
        touristAttractions: ['Van gogh museum', 'Rijksmuseum', 'Anne Frank museum'],
        isCapital: true,
    },
    {
        name: 'Monaco',
        population: 40000,
        location: {
            continent: 'Europe',
            country: 'Monaco',
        },
        touristAttractions: [],
        isCapital: true,
    },
    {
        name: 'Havana',
        population: 2400000,
        location: {
            continent: 'North America',
            country: 'Cuba',
        },
        touristAttractions: ['National Capitol of Cuba', 'Plaza de la Catedral'],
        isCapital: true,
    },
    {
        name: 'Singapore',
        population: 5600000,
        location: {
            continent: 'Asia',
            country: 'Singapore',
        },
        touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Singapore Zoo'],
        isCapital: true,
    },
    {
        name: 'Melbourne',
        population: 5000000,
        location: {
            continent: 'Australia',
            country: 'Australia',
        },
        touristAttractions: ['Melbourne Skydeck'],
        isCapital: false,
    },
    {
        name: 'Sapporo',
        population: 1900000,
        location: {
            continent: 'Asia',
            country: 'Japan',
        },
        touristAttractions: ['Hokkaido Jingu'],
        isCapital: false,
    },
    {
        name: 'Miami',
        population: 400000,
        location: {
            continent: 'North America',
            country: 'United States',
        },
        touristAttractions: ['Miami Zoo', 'Ocean drive', 'Little Havana', 'Vizcaya Museum & Gardens'],
        isCapital: false,
    },
  ];

  const [name, setName] = useState('');
  const [population, setPopulation] = useState('');
  const [country, setCountry] = useState('');
  const [continent, setContinent] = useState('');
  const [isCapital, setIsCapital] = useState(false);
  const [touristAttractions, setTouristAttractions] = useState('');

  const [cities, setCities] = useState(citiesData);

  const citiesList = cities.map((city, index) => <CityItem key={index} data={city} />);

  const oddCitiesClass = cities.length % 2 !== 0 ? ' odd-cities' : '';
  
  const cityNameHandler = (event) => setName(event.target.value);
  const cityPopulationHandler = (event) => setPopulation(event.target.valueAsNumber);
  const cityCountryHandler = (event) => setCountry(event.target.value);
  const cityContinentHandler = (event) => setContinent(event.target.value);
  const cityCapitalHandler = (event) => setIsCapital(event.target.checked);
  const cityTouristAttractionsHandler = (event) => setTouristAttractions(event.target.value);

  const addCityHandler = (event) => {
    event.preventDefault();

    const newCity = {
        name: name,
        population: population,
        location: {
            continent: continent,
            country: country,
        },
        touristAttractions: touristAttractions.split(',').map(attraction => attraction.trim()),
        isCapital: isCapital,
    };

    setCities(prevState => [newCity, ...prevState]);
    
    setName('');
    setPopulation('');
    setCountry('');
    setContinent('');
    setIsCapital(false);
    setTouristAttractions('');
}

  return (
    <Container>
      <form onSubmit={addCityHandler} noValidate>
        <div className="form-control">
            <label htmlFor="city-name">Name:</label>
            <input type="text" id="city-name" name="name" value={name} onChange={cityNameHandler} />
        </div>

        <div className="form-control">
            <label htmlFor="city-population">Population:</label>
            <input type="number" id="city-population" name="population" step="1000" value={population} onChange={cityPopulationHandler} />
        </div>

        <div className="form-control">
            <label htmlFor="city-country">Country:</label>
            <input type="text" id="city-country" name="country" value={country} onChange={cityCountryHandler} />
        </div>

        <div className="form-control">
            <label htmlFor="city-continent">Continent:</label>
            <input type="text" id="city-continent" name="continent" value={continent} onChange={cityContinentHandler} />
        </div>

        <div className="form-control">
            <input type="checkbox" id="city-capital" name="capital" checked={isCapital} onChange={cityCapitalHandler} />
            <label htmlFor="city-capital">City is capital</label>
        </div>

        <div className="form-control">
            <label htmlFor="city-tourist-attractions">Tourist Attractions:</label>
            <textarea id="city-tourist-attractions" name="continent" value={touristAttractions} onChange={cityTouristAttractionsHandler}></textarea>
        </div>
        
        <input type="submit" id="city-submit" value="Add a city" />
      </form>
      
      <div className={`cities-list${oddCitiesClass}`}>
        {citiesList}
      </div>
    </Container>
  )
}

export default CitiesPage;
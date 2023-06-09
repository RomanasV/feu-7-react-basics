import { useState } from "react";

const CitiesForm = ({ onNewCity }) => {
  const [name, setName] = useState('');
  const [population, setPopulation] = useState('');
  const [country, setCountry] = useState('');
  const [continent, setContinent] = useState('');
  const [isCapital, setIsCapital] = useState(false);
  const [touristAttractions, setTouristAttractions] = useState('');

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
    
    onNewCity(newCity);

    setName('');
    setPopulation('');
    setCountry('');
    setContinent('');
    setIsCapital(false);
    setTouristAttractions('');
  }

  return (
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
  )
}

export default CitiesForm;
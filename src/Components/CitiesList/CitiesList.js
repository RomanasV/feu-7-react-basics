import CityItem from "../../Components/CityItem/CityItem";

const CitiesList = ({ citiesData, onEditCity, onRemoveCity }) => {
  const citiesList = citiesData.map((city, index) => <CityItem onEditCity={onEditCity} index={index} key={index} data={city} onRemoveCity={onRemoveCity} />);

  const oddCitiesClass = citiesData.length % 2 !== 0 ? ' odd-cities' : '';
  return (
    <div className={`cities-list${oddCitiesClass}`}>
      {citiesList}
    </div>
  )
}

export default CitiesList;
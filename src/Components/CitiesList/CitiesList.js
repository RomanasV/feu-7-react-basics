import CityItem from "../../Components/CityItem/CityItem";

const CitiesList = ({ citiesData }) => {
  const citiesList = citiesData.map((city, index) => <CityItem key={index} data={city} />);

  const oddCitiesClass = citiesData.length % 2 !== 0 ? ' odd-cities' : '';
  return (
    <div className={`cities-list${oddCitiesClass}`}>
      {citiesList}
    </div>
  )
}

export default CitiesList;
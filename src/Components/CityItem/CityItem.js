const CityItem = (props) => {
  const { name, isCapital, population, touristAttractions, location } = props.data;
  const { continent, country } = location;

  let capitalText = '';
  let capitalClass = '';
  let capitalDescription = '';

  if (isCapital) {
    capitalText = ' (capital)';
    capitalClass = ' capital';
    capitalDescription = ` ${name} is the capital of ${country}.`;
  }

  const description = `${name} city is located in ${continent}, ${country} and has population of ${population} people.${capitalDescription}`;

  let touristAttractionsElement = '';

  if (touristAttractions && touristAttractions.length > 0) {
    let touristAttractionsTitle = `Tourist attractions of ${name} are:`;

    if (touristAttractions.length === 1) {
      touristAttractionsTitle = `Tourist attraction of ${name} is:`;
    }

    touristAttractionsElement = (
      <div className="tourist-attractions-wrapper">
        <h3 className="tourist-attractions-title">{touristAttractionsTitle}</h3>
        
        <ul className="tourist-attractions-list">
          {touristAttractions.map((attraction, index) => <li key={index} className="tourist-attraction-item">{attraction}</li>)}
        </ul>
      </div>
    );
  }

  return (
    <div className={`city-item${capitalClass}`}>
      <h2 className="city-name">{name}{capitalText}</h2>

      <p className="city-description">{description}</p>
      {touristAttractionsElement}
    </div>
  )
}

export default CityItem;

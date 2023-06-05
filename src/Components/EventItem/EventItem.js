const EventItem = ({ data }) => {
  const { date, location, title, url, image } = data;

  if (!title || !url) {
    return '';
  }

  const locationElement = location && <span className="event location">{location}</span>;

  const imageElement = image && image.src && (
    <div className="image-wrapper">
      <img className="event-image" src={image.src} alt={image.alt ? image.alt : ''} />
    </div>
  )

  const { day, month } = date;

  let dateElement = '';

  if (date && (day || month)) {
    dateElement = (
      <div className="event-date">
        {day && <span className="event-day">{day}</span>}
        {month && <span className="event-month">{month}</span>}
      </div>
    );
  }

  return (
    <div className="event">
      <a href={url}>
        {imageElement}
        <div className="event-content">
          {dateElement}

          <div className="event-info">
            {locationElement}
            <h3 className="event-title">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  )
}

export default EventItem;
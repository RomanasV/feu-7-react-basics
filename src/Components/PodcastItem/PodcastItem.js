const PodcastItem = ({ data }) => {
  const { date, image, length, title } = data;

  if (!title) {
    return '';
  }

  const imageElement = image && <img className="podcast-image" src={image} alt='Podcast Host' />;
  const lengthElement = length && <span className="podcast-length">Trukmė: {length}</span>;
  const dateElement = date && <span className="podcast-date">{date}</span>;

  return (
    <div className="podcast">
      <div className="podcast-controls">
        {imageElement}
        {lengthElement}
        <button className="podcast-play">Play</button>
      </div>
      <div className="podcast-content">
        <h3 className="podcast-title">{title}</h3>
        {dateElement}
      </div>
    </div>
  )
}

export default PodcastItem;
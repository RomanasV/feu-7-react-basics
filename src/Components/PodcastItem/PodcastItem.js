import podcastImage from '../../images/podcast-image.jpg';

const PodcastItem = () => {
  return (
    <div className="podcast">
      <div className="podcast-controls">
        <img className="podcast-image" src={podcastImage} alt='Podcast Host' />
        <span className="podcast-length">Trukmė: 7:55</span>
        <button className="podcast-play">Play</button>
      </div>
      <div className="podcast-content">
        <h3 className="podcast-title">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
        <span className="podcast-date">2021-09-02</span>
      </div>
    </div>
  )
}

export default PodcastItem;
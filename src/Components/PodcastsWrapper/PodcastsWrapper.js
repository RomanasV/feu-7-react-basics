import PodcastItem from '../PodcastItem/PodcastItem';
import podcastImage from '../../images/podcast-image.jpg';

const PodcastsWrapper = () => {
  const podcastsData = [
    {
      image: podcastImage,
      length: '7:55',
      title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
    },
    {
      image: podcastImage,
      title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
      date: '2021-09-02',
    },
    {
      length: '7:55',
      title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
      date: '2021-09-02',
    },
    {
      image: podcastImage,
      length: '7:55',
      title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
      date: '2021-09-02',
    },
  ];

  const podcastElements = podcastsData.map((podcast, index) => <PodcastItem key={index} data={podcast} /> )

  return (
    <div className="podcasts-wrapper">
      <h2 className="section-title">Podcastai</h2>
      <div className="podcasts-wrapper">
        {podcastElements}
      </div>
    </div>
  )
}

export default PodcastsWrapper;
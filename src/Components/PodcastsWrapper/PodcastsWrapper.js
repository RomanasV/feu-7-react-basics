import PodcastItem from '../PodcastItem/PodcastItem';

const PodcastsWrapper = () => {
  return (
    <div className="podcasts-wrapper">
      <h2 className="section-title">Podcastai</h2>
      <div className="podcasts-wrapper">
        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
      </div>
    </div>
  )
}

export default PodcastsWrapper;
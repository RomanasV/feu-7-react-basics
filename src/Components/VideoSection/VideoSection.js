import LargeButton from "../partials/LargeButton/LargeButton";

const VideoSection = () => {
  return (
    <div className="video-section-wrapper">
      <h2 className="section-title">Vaizdo įrašai</h2>
      <div className="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <span className="video-extra-text">Jei galiu aš – gali ir tu!</span>
      {/* <a href="/#" className="button-large">Visi vaizdo įrašai</a> */}

      <LargeButton />
    </div>
  )
}

export default VideoSection;
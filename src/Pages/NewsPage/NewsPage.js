import Container from '../../Components/Container/Container';
import EventsWrapper from '../../Components/EventsWrapper/EventsWrapper';
import NewsWrapper from '../../Components/NewsWrapper/NewsWrapper';
import PodcastsWrapper from '../../Components/PodcastsWrapper/PodcastsWrapper';
import VideoSection from '../../Components/VideoSection/VideoSection';
import './NewsPage.css';

const NewsPage = () => {
  return (
    <Container>
      <div className="content-wrapper">
        <main className="main-content">
          <NewsWrapper />

          <VideoSection />
        </main>

        <aside className="sidebar-content">
          <PodcastsWrapper />
          <EventsWrapper />
        </aside>
      </div>
    </Container>
  )
}

export default NewsPage;
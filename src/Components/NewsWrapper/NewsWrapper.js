import NewsItem from "../NewsItem/NewsItem";
import LargeButton from "../partials/LargeButton/LargeButton";

const NewsWrapper = () => {
  return (
    <div className="news-wrapper">
      <h2 className="section-title">Naujienos</h2>

      <div className="main-news">
        <NewsItem />
        <NewsItem />
      </div>
      
      <div className="secondary-news">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>

      <LargeButton />
    </div>
  )
}

export default NewsWrapper;
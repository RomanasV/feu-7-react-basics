const NewsItem = ({ url, imgSrc, imgAlt, title, category, date }) => {
  // const { url, imgSrc, imgAlt, title, category, date } = props;

  if (!title || !url) {
    return '';
  }

  const imageElement = imgSrc && (
    <div className="image-wrapper">
      <img src={imgSrc} alt={imgAlt ? imgAlt : ''} />
    </div>
  );

  const categoryElement = category && <span className="news-category">{category}</span>;
  const titleElement = <h3 className="news-title">{title}</h3>;
  const dateElement = date && <span className="news-date">{date}</span>;

  return (
    <div className="news-item">
      <a href={url}>
        {imageElement}
        <div className="news-content">
          {categoryElement}
          {titleElement}
          {dateElement}
        </div>
      </a>
    </div>
  )
}

export default NewsItem;
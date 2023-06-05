const NewsItem = () => {
  return (
    <div className="news-item">
      <a href="/#">
        <div className="image-wrapper">
          <img src="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" alt='' />
        </div>
        <div className="news-content">
          <span className="news-category">AI & deep learning</span>
          <h3 className="news-title">Ar „ChatGPT“ užims mūsų darbo vietas?</h3>
          <span className="news-date">2023-01-27</span>
        </div>
      </a>
    </div>
  )
}

export default NewsItem;
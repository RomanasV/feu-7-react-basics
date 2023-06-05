import NewsItem from "../NewsItem/NewsItem";
import LargeButton from "../partials/LargeButton/LargeButton";

const NewsWrapper = ({ title }) => {
  // const title = props.title;
  // const { title } = props;

  const mainNewsData = [
    {
      title: 'Ar „ChatGPT“ užims mūsų darbo vietas?' ,
      url: '/#',
      category: 'AI & deep learning',
      date: '2023-01-27',
      imgSrc: 'https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg',
      imgAlt: '',
    },
    {
      title: 'Ar „ChatGPT“ užims mūsų darbo vietas?' ,
      url: '/#',
      category: 'AI & deep learning',
      date: '2023-01-27',
      imgSrc: 'https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg',
      imgAlt: '',
    }
  ];

  const mainNewsElements = mainNewsData.map((newsData) => {
    const { title, url, category, date, imgSrc, imgAlt } = newsData;

    return (
      <NewsItem 
        title={title} 
        url={url}
        category={category}
        date={date}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
      />
    )
  })

  return (
    <div className="news-wrapper">
      
      <h2 className="section-title">{title}</h2>

      <div className="main-news">
        {mainNewsElements}
      </div>
      
      <div className="secondary-news">
        <NewsItem 
          title='Ar „ChatGPT“ užims mūsų darbo vietas?' 
          url='/#'
          category='AI & deep learning'
          date='2023-01-27'
          imgSrc='https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg'
          imgAlt=''
        />
        <NewsItem 
          title='Naujiena' 
          url='/#'
          category='AI & deep learning'
          date='2023-01-27'
          imgSrc='https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg'
          imgAlt=''
        />
        <NewsItem 
          title='Ar „ChatGPT“ užims mūsų darbo vietas?' 
          url='/#'
          category='AI & deep learning'
          date='2023-01-27'
          imgSrc='https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg'
          imgAlt=''
        />
        <NewsItem 
          title='Ar „ChatGPT“ užims mūsų darbo vietas?' 
          url='/#'
          category='AI & deep learning'
          date='2023-01-27'
          imgSrc='https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg'
          imgAlt=''
        />
      </div>

      <LargeButton />
    </div>
  )
}

export default NewsWrapper;
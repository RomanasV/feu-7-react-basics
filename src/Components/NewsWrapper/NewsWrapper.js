import NewsItem from "../NewsItem/NewsItem";
import LargeButton from "../partials/LargeButton/LargeButton";

const NewsWrapper = ({ title }) => {
  // const title = props.title;
  // const { title } = props;

  const mainNewsData = [
    {
      title: 'Pavadinimas' ,
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

  const secondaryNewsData = [
    {
      title: 'Pavadinimas' ,
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
    },
    {
      title: 'Pavadinimas' ,
      url: '/#',
      category: 'AI & deep learning',
      imgSrc: 'https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg',
      imgAlt: '',
    },
    {
      title: 'Ar „ChatGPT“ užims mūsų darbo vietas?' ,
      url: '/#',
      date: '2023-01-27',
      imgSrc: 'https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg',
      imgAlt: '',
    }
  ];

  const mainNewsElements = mainNewsData.map((newsData, index) => <NewsItem key={index} data={newsData} />);

  const secondaryNewsElements = secondaryNewsData.map((newsData, index) => <NewsItem key={index} data={newsData} />);

  return (
    <div className="news-wrapper">
      
      <h2 className="section-title">{title}</h2>

      <div className="main-news">
        {mainNewsElements}
      </div>
      
      <div className="secondary-news">
        {secondaryNewsElements}
      </div>

      <LargeButton url='/#'>Naujienos</LargeButton>
    </div>
  )
}

export default NewsWrapper;
import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";

const ChuckNorrisPage = () => {
  const [joke, setJoke] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const categoryParam = selectedCategory ? `?category=${selectedCategory}` : '';

    fetch('https://api.chucknorris.io/jokes/random' + categoryParam)
      .then(res => res.json())
      .then(data => {
        setJoke(data.value);
      })
  }, [selectedCategory]);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(res => res.json())
      .then(categoriesData => {
        setCategories(categoriesData);
      })
  }, []);

  const categorySelectHandler = (event) => setSelectedCategory(event.target.value);

  const randomJokeHandler = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(data => {
        setJoke(data.value);
      })
  }

  return (
    <Container>
      {(categories.length > 0 && joke) ? (
        <div>
          
          <form>
            <select onChange={categorySelectHandler} defaultValue=''>
              <option value='' disabled>--- Select category ---</option>
              {categories.map((category, index) => <option value={category} key={index}>- {category}</option>)}
            </select>
          </form>

          <p>{joke}</p>

          <button onClick={randomJokeHandler}>Get a random Joke</button>

        </div>
      ) : 'Loading...'}

    </Container>
  )
}

export default ChuckNorrisPage;
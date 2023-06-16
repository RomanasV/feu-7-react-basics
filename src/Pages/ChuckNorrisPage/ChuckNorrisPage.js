import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import axios from "axios";

const ChuckNorrisPage = () => {
  const [joke, setJoke] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // async function fetchCategoriesData() {
    //   const res = await fetch('https://api.chucknorris.io/jokes/categories')
    //   const categoriesData = await res.json();
    //   setCategories(categoriesData)
    // }

    async function fetchCategoriesData() {
      const res = await axios.get('https://api.chucknorris.io/jokes/categories');
      setCategories(res.data)
    }

    fetchCategoriesData();
  }, []);

  useEffect(() => {
    const categoryParam = selectedCategory ? `?category=${selectedCategory}` : '';

    fetch('https://api.chucknorris.io/jokes/random' + categoryParam)
      .then(res => res.json())
      .then(data => {
        setJoke(data.value);
      })
  }, [selectedCategory]);

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
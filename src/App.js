import { Routes, Route, Link } from 'react-router-dom';

import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import DemoPage from './Pages/DemoPage/DemoPage';
import Container from './Components/Container/Container';
import Card from './Components/Card/Card';
import PageHeader from './Components/PageHeader/PageHeader';
import NewsPage from './Pages/NewsPage/NewsPage';
import CounterPage from './Pages/CounterPage/CounterPage';
import ShoppingListPage from './Pages/ShoppingListPage/ShoppingListPage';
import CitiesPage from './Pages/CitiesPage/CitiesPage';
import TodoPage from './Pages/TodoPage/TodoPage';
import ChuckNorrisPage from './Pages/ChuckNorrisPage/ChuckNorrisPage';
import DogsPage from './Pages/DogsPage/DogsPage';
import AiPage from './Pages/AiPage/AiPage';
import ApiPage from './Pages/ApiPage/ApiPage';
import UsersPage from './Pages/UsersPage/UsersPage';
import UserPage from './Pages/UserPage/UserPage';
import PostsPage from './Pages/PostsPage/PostsPage';
import PostPage from './Pages/PostPage/PostPage';
import CreatePost from './Pages/CreatePost/CreatePost';
import EditPostPage from './Pages/EditPostPage/EditPostPage';
import CreateUserPage from './Pages/CreateUserPage/CreateUserPage';

function App() {
  return (
    <div className='App'>

      <Container classes='custom-container'>
        <PageHeader />
      </Container>

      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/demo' element={<DemoPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/shopping-list' element={<ShoppingListPage />} />
        <Route path='/cities' element={<CitiesPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/api' element={<ApiPage />} />
        <Route path='/api/chuck-norris' element={<ChuckNorrisPage />} />
        <Route path='/api/dogs' element={<DogsPage />} />
        <Route path='/api/ai' element={<AiPage />} />
        <Route path='/json/users' element={<UsersPage />} />
        <Route path='/json/users/:id' element={<UserPage />} />
        <Route path='/json/users/create' element={<CreateUserPage />} />
        <Route path='/json/posts' element={<PostsPage />} />
        <Route path='/json/posts/:id' element={<PostPage />} />
        <Route path='/json/posts/create' element={<CreatePost />} />
        <Route path='/json/posts/edit/:id' element={<EditPostPage />} />

        <Route path='*' element={
          <Container>
            <Card>
              <h1>404 error. Page not found</h1>
              <Link to='/'>Go Back to home page</Link>
            </Card>
          </Container>
        } />
      </Routes>
      
    </div>
  );
}

export default App;

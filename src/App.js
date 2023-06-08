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

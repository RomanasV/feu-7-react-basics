import { Routes, Route, Link, NavLink } from 'react-router-dom';

import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import DemoPage from './Pages/DemoPage/DemoPage';
import Container from './Components/Container/Container';
import Card from './Components/Card/Card';

function App() {
  return (
    <div className='App'>

      <Container classes='custom-container'>
        <nav className='main-navigation'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link'>Home</NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/demo' className='nav-link'>Demo Page</NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/contact-us' className='nav-link'>Contacts Page</NavLink>
            </li>
          </ul>
        </nav>
      </Container>

      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/demo' element={<DemoPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
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

import { NavLink } from 'react-router-dom';

import './PageHeader.css';

const PageHeader = () => {
  return (
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

        <li className='nav-item'>
          <NavLink to='/news' className='nav-link'>News Page</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink to='/counter' className='nav-link'>Counter Page</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink to='/shopping-list' className='nav-link'>Shopping List Page</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink to='/cities' className='nav-link'>Cities Page</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink to='/todo' className='nav-link'>Todo Page</NavLink>
        </li>

        <li className='nav-item'>
          
          <NavLink to='/api' className='nav-link'>API Projects Page</NavLink>

          <ul className='inner-menu'>
            <li className='nav-item'>
              <NavLink to='/api/chuck-norris' className='nav-link'>Chuck API Page</NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/api/dogs' className='nav-link'>Dogs API Page</NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/api/ai' className='nav-link'>AI API Page</NavLink>
            </li>
          </ul>
        </li>

        <li className='nav-item'>
          
          <NavLink to='/api' className='nav-link'>JSON API</NavLink>

          <ul className='inner-menu'>
            <li className='nav-item'>
              <NavLink to='/json/users' className='nav-link'>Users</NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/json/posts' className='nav-link'>Posts</NavLink>
            </li>
          </ul>
        </li>


      </ul>
    </nav>
  )
}

export default PageHeader
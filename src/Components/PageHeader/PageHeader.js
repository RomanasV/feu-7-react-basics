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
      </ul>
    </nav>
  )
}

export default PageHeader
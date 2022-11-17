
import './../App.css';
import AboutPage from './About';
import HomePage from './Home';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <Link to='/'><h3>USC MarketPlace</h3></Link>
        <ul className='nav-links'>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/login'>
                <li>Login</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;

import { Link } from 'react-router-dom';
import logo from '../assets/impactOS.jpeg'; // Assume you have a logo image

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="askKauko" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/database">Search</Link></li>
        <li><Link to="/about">Community</Link></li>
        <li><Link to="/contact">API Docs</Link></li>
        <li><Link to="/support">Support</Link></li>

      </ul>
    </nav>
  );
};

export default NavBar;

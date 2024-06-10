import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import logo from "../assets/impactOS.jpeg"; // Ensure this path is correct

function Navigation({ handleInputChange, query }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="askKauko" />
        </a>
      </div>
      
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/database">Database</a>
        </li>
        <li>
          <a href="/community">Community</a>
        </li>
        <li>
          <a href="/API">API Docs</a>
        </li>
        <li>
          <a href="/support">Support</a>
        </li>
      </ul>
     
    </nav>
  );
}

export default Navigation;

import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import logo from "../../assets/impactOS.jpeg";

function Navigation({ setCurrentPage }) {
  const navigate = (path) => {
    window.history.pushState(null, "", path);
    setCurrentPage(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="askKauko" onClick={() => navigate("/")} />
      </div>
      <ul className="navbar-links">
        <li><a href="#" onClick={() => navigate("/")}>Home</a></li>
        <li><a href="#" onClick={() => navigate("/contribute")}>Contribute</a></li>
        <li><a href="#" onClick={() => navigate("/community")}>Community</a></li>
        <li><a href="#" onClick={() => navigate("/api-docs")}>API Docs</a></li>
        <li><a href="#" onClick={() => navigate("/support")}>Support</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Nav";
import Home from "./pages/Home/home";
import Contribute from "./pages/Contribute/contribute";
import Community from "./pages/Community/community";
import APIDocs from "./pages/APIDocs/apidocs";
import Support from "./pages/Support/support";
import Signup from "./pages/Signup/signup";
import Login from "./pages/Login/login";
import "./index.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  const renderPage = () => {
    switch (currentPage) {
      case "/":
        return <Home isDarkMode={isDarkMode} />;
      case "/contribute":
        return <Contribute />;
      case "/community":
        return <Community />;
      case "/api-docs":
        return <APIDocs />;
      case "/support":
        return <Support />;
      case "/signup":
        return <Signup />;
      case "/login":
        return <Login />;
      default:
        return <Home isDarkMode={isDarkMode} />;
    }
  };

  return (
  <div className={isDarkMode ? 'app dark' : 'app'}>
    <Navigation setCurrentPage={setCurrentPage} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    {renderPage()}
  </div>
  );
}

export default App;

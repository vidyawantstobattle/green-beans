import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Nav";
import Home from "./pages/Home/home";
import Contribute from "./pages/Contribute/contribute";
import Community from "./pages/Community/community";
import APIDocs from "./pages/APIDocs/apidocs";
import Search from "./pages/Search/search";
import Support from "./pages/Support/support";
import Signup from "./pages/Auth/signup";
import Login from "./pages/Auth/login";
import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [darkMode, setDarkMode] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "/":
        return <Home />;
      case "/search":
        return <Search />;
      case "/contribute":
        return <Contribute isLoggedIn={isLoggedIn}/>;
      case "/community":
        return <Community />;
      case "/api-docs":
        return <APIDocs />;
      case "/support":
        return <Support />;
        case '/login':
          return <Login darkMode={darkMode} onLogin={handleLogin} />;
        case '/signup':
          return <Signup darkMode={darkMode} />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {renderPage()}
    </>
  );
}

export default App;
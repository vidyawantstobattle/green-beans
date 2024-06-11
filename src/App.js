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
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [darkMode, setDarkMode] = useState(false);

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
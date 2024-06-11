import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Nav";
import Home from "./pages/Home/home";


import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    return <Home />;
    // call your search page here 
  };

  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;

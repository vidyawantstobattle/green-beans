import { useState } from "react";
import "./home.css";

function Home() {
  const [query, setQuery] = useState("");
  
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    window.history.pushState(null, "", `/search?q=${query}`);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="home">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search Emission Factors"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="reliable-sources">
        <h2>Reliable Emission Factor Sources</h2>
        <p>Content similar to climatiq.io...</p>
      </div>
    </div>
  );
}

export default Home;

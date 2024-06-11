import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Card from '../../components/cards';
import products from '../../db/data';
import './Search.css';

// this the refactored code related to searching and filtering results that was in app.js
// put the css for the table in search.css ?
function Search() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="search-page">
      <Sidebar handleClick={handleClick} handleChange={handleChange} />
      <div className="search-results">
        <div className="search-input">
          <input 
            type="text" 
            value={query} 
            onChange={handleInputChange} 
            placeholder="Search emission factors..." 
          />
        </div>
        <div className="results">
          {result}
        </div>
      </div>
    </div>
  );
}

export default Search;

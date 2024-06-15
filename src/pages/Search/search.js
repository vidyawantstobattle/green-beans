import React, { useState } from 'react';
import axios from 'axios';
import Products from '../../Products/Products';
import Recommond from '../../Recommond/Recommond';
import Sidebar from '../../Sidebar/Sidebar';
import Card from '../../components/cards';
import TableElement from '../../components/tableelement';
import products from '../../db/data';
import './search.css';

// this the refactored code related to searching and filtering results that was in app.js
// put the css for the table in search.css ?
function Search() {

  // axios.get("http://ec2-54-226-167-211.compute-1.amazonaws.com/api/emissionfactor/?format=json")
  // .then((response) => console.log(response.data))
  // .catch((error) => console.log(error));

  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // ----------- Input Filter -----------
  const params = new URLSearchParams(window.location.search)
  let query = params.get('q') ? params.get('q') : '';

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase())!== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredDataBeta(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
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
      ({title, star, reviews, prevPrice, newPrice }) => (
        <TableElement
          key={Math.random()}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  
  const resultBeta = filteredDataBeta(products, selectedCategory, query);
  const resultsBetaLength = resultBeta.length

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Recommond handleClick={handleClick} length = {resultsBetaLength}/>
      <Products result={resultBeta} />
    </>
  );
}

export default Search;

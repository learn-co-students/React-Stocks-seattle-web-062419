import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input onClick={props.sortByAlpha}type="radio" value="Alphabetically" checked={props.alphaChecked} />
        Alphabetically
      </label>
      <label>
        <input onClick={props.sortByPrice}type="radio" value="Price" checked={props.priceChecked} />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.stockFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;

import React from "react";

function SearchBar({ onSortChange, onFilterChange }) {
  return (
    <div>
      <strong>Sort By:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          onChange={(e) => onSortChange(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          onChange={(e) => onSortChange(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => onFilterChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
          <option value="Health">Health</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;

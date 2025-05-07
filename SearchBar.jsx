import React from 'react';

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Products"
      value={searchQuery}
      onChange={e => onSearch(e.target.value)}
      className="p-2 border rounded w-full mb-4"
    />
  );
};

export default SearchBar;
